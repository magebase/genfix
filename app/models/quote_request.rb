class QuoteRequest < ApplicationRecord
  validates :name, :email, :phone, :delivery_address, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :quote_price, numericality: { greater_than: 0 }, allow_nil: true

  attribute :status, :integer, default: 0
  enum :status, { pending: 0, quoted: 1, approved: 2, paid: 3, delivered: 4, completed: 5, cancelled: 6 }, default: :pending

  before_save :calculate_hire_dates

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

  def calculate_hire_dates
    return if start_hire_date.present? && end_hire_date.present?
    return if rental_duration.blank?

    # Assume start date is tomorrow (next business day)
    start_date = Date.tomorrow

    # Calculate end date based on rental duration
    case rental_duration
    when "1-day"
      end_date = start_date + 1.day
    when "3-days"
      end_date = start_date + 3.days
    when "1-week"
      end_date = start_date + 1.week
    when "2-weeks"
      end_date = start_date + 2.weeks
    when "1-month"
      end_date = start_date + 1.month
    else
      # For "other" or unknown durations, default to 1 week
      end_date = start_date + 1.week
    end

    self.start_hire_date ||= start_date
    self.end_hire_date ||= end_date
  end
end
