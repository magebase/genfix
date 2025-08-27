class QuoteRequestsController < ApplicationController
  def create
    @quote_request = QuoteRequest.new(quote_request_params)

    if @quote_request.save
      # Send confirmation email to customer
      QuoteMailer.quote_confirmation(@quote_request).deliver_later

      # Send notification email to admin
      QuoteMailer.admin_notification(@quote_request).deliver_later

      render json: { success: true, message: 'Quote request submitted successfully!' }, status: :created
    else
      render json: { success: false, errors: @quote_request.errors.full_messages }, status: :unprocessable_entity
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
      :status
    )
  end
end
