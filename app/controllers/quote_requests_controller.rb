class QuoteRequestsController < ApplicationController
  def create
    @quote_request = QuoteRequest.new(quote_request_params)

    if @quote_request.save
      # TODO: Send confirmation email to customer
      # TODO: Send notification email to admin
      render json: { success: true, message: 'Quote request submitted successfully!' }, status: :created
    else
      render json: { success: false, errors: @quote_request.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    @quote_request = QuoteRequest.find(params[:id])

    if @quote_request.update(quote_request_params)
      render json: { success: true, message: 'Quote updated successfully!' }, status: :ok
    else
      render json: { success: false, errors: @quote_request.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    @quote_request = QuoteRequest.find(params[:id])
    render json: @quote_request
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
