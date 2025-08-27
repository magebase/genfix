require "test_helper"

class StripeIntegrationTest < ActionDispatch::IntegrationTest
  # RED: Write failing test for Stripe payment link generation

  test "should generate Stripe payment link for approved quote" do
    quote = QuoteRequest.create!(
      name: "John Doe",
      email: "john@example.com",
      phone: "0412345678",
      equipment_type: "Portable 5 kVA Generator",
      rental_duration: "1 Week",
      delivery_address: "123 Main St, Brisbane QLD 4000",
      special_requirements: "Urgent delivery needed",
      status: :quoted,
      quote_price: 500.00
    )

    # This should work in test environment with mock URL
    payment_link = quote.generate_stripe_payment_link

    assert_not_nil payment_link
    assert_match %r{https://checkout\.stripe\.com/pay/}, payment_link
  end

  test "should update quote status to paid when payment succeeds" do
    quote = QuoteRequest.create!(
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "0412345679",
      equipment_type: "Standby 20 kVA Generator",
      rental_duration: "2 Weeks",
      delivery_address: "456 Queen St, Brisbane QLD 4001",
      special_requirements: "Backup power for event",
      status: :quoted
    )

    # This should fail because webhook handling is not implemented yet
    quote.mark_as_paid

    assert_equal "paid", quote.status
  end
end
