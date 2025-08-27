class QuoteRequest < ApplicationRecord
  validates :name, :email, :phone, :equipment_type, :rental_duration, :delivery_address, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :quote_price, numericality: { greater_than: 0 }, allow_nil: true

  before_create :set_default_status

  # Status options for quote lifecycle
  enum :status, {
    pending: "pending",
    quoted: "quoted",
    approved: "approved",
    paid: "paid",
    delivered: "delivered",
    completed: "completed",
    cancelled: "cancelled"
  }, default: :pending

  # Stripe payment integration
  def generate_stripe_payment_link
    return nil unless quoted? && quote_price.present?

    # Return mock URL in test environment
    if Rails.env.test?
      return "https://checkout.stripe.com/pay/test_session_#{id}"
    end

    require 'stripe'
    Stripe.api_key = ENV['STRIPE_SECRET_KEY']

    session = Stripe::Checkout::Session.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'aud',
          product_data: {
            name: equipment_type,
            description: "Rental period: #{rental_duration} - #{special_requirements.presence || 'No special requirements'}"
          },
          unit_amount: (quote_price * 100).to_i, # Convert to cents
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: "#{ENV['APP_URL']}/quote_requests/#{id}/payment_success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "#{ENV['APP_URL']}/quote_requests/#{id}",
      metadata: {
        quote_request_id: id.to_s,
        customer_email: email,
        customer_name: name
      }
    })

    session.url
  end

  def mark_as_paid
    update(status: :paid)
  end

  # Admin quote preparation
  def prepare_quote(price:, notes: nil)
    update!(
      quote_price: price,
      admin_notes: notes,
      status: :quoted,
      quoted_at: Time.current
    )

    # Send quote prepared email
    QuoteMailer.quote_prepared(self).deliver_now
  end

  private

  def set_default_status
    self.status ||= 'pending'
  end
end
