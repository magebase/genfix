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

  private

  def set_default_status
    self.status ||= 'pending'
  end
end
