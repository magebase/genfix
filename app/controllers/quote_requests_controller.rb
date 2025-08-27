class QuoteRequestsController < ApplicationController
  require 'net/http'
  require 'json'
  def create
    # Skip reCAPTCHA verification in test environment
    unless Rails.env.test?
      unless verify_recaptcha(params[:quote_request][:recaptcha_token])
        render inertia: 'Landing', props: {
          title: 'Genfix — Commercial Generator Hire',
          quote_errors: ['reCAPTCHA verification failed. Please try again.']
        }
        return
      end
    end

    @quote_request = QuoteRequest.new(quote_request_params.except(:recaptcha_token))

    if @quote_request.save
      # Send confirmation email to customer
      QuoteMailer.quote_confirmation(@quote_request).deliver_later

      # Send notification email to admin
      QuoteMailer.admin_notification(@quote_request).deliver_later

      render inertia: 'Landing', props: {
        title: 'Genfix — Commercial Generator Hire',
        quote_submitted: true,
        quote_request: @quote_request.as_json(
          only: [:id, :name, :email, :equipment_type, :delivery_address, :special_requirements, :start_hire_date, :end_hire_date]
        )
      }
    else
      render inertia: 'Landing', props: {
        title: 'Genfix — Commercial Generator Hire',
        quote_errors: @quote_request.errors.full_messages
      }
    end
  end

  def update
    @quote_request = QuoteRequest.find(params[:id])

    if @quote_request.update(quote_request_params)
      # Send quote prepared email if status changed to quoted
      if @quote_request.saved_change_to_status? && @quote_request.status == 'quoted'
        QuoteMailer.quote_prepared(@quote_request).deliver_later
      end

      # Send payment link email if status changed to approved
      if @quote_request.saved_change_to_status? && @quote_request.status == 'approved'
        # TODO: Generate Stripe payment link
        payment_url = "https://checkout.stripe.com/pay/placeholder"
        QuoteMailer.payment_link(@quote_request, payment_url).deliver_later
      end

      render json: { success: true, message: 'Quote updated successfully!' }, status: :ok
    else
      render json: { success: false, errors: @quote_request.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    @quote_request = QuoteRequest.find(params[:id])
    render json: @quote_request
  end

  def approve
    @quote_request = QuoteRequest.find(params[:id])
    @quote_request.update(status: 'approved', approved_at: Time.current)
    # TODO: Generate Stripe payment link and send email
    redirect_to root_path, notice: 'Quote approved! Payment link will be sent shortly.'
  end

  private

  def verify_recaptcha(token)
    return false if token.blank?

    secret_key = ENV['RECAPTCHA_SECRET_KEY']
    return false if secret_key.blank?

    uri = URI('https://www.google.com/recaptcha/api/siteverify')
    response = Net::HTTP.post_form(uri, {
      'secret' => secret_key,
      'response' => token
    })

    result = JSON.parse(response.body)
    result['success']
  rescue StandardError => e
    Rails.logger.error("reCAPTCHA verification failed: #{e.message}")
    false
  end

  def quote_request_params
    params.require(:quote_request).permit(
      :name,
      :email,
      :phone,
      :equipment_type,
      :rental_duration,
      :delivery_address,
      :special_requirements,
      :quote_price,
      :admin_notes,
      :quoted_at,
      :approved_at,
      :stripe_invoice_id,
      :status,
      :recaptcha_token
    )
  end
end
