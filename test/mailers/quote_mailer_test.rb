require "test_helper"

class QuoteMailerTest < ActionMailer::TestCase
  # GREEN: Email functionality tests

  test "should send confirmation email to customer when quote is submitted" do
    quote_request = QuoteRequest.create!(
      name: "John Doe",
      email: "john@example.com",
      phone: "0412345678",
      equipment_type: "portable-5kva",
      rental_duration: "1-week",
      delivery_address: "123 Test Street, Brisbane QLD 4000",
      special_requirements: "Test requirements"
    )

    email = QuoteMailer.quote_confirmation(quote_request)

    assert_emails 1 do
      email.deliver_now
    end

    assert_equal ["john@example.com"], email.to
    assert_equal "Quote Request Received - Genfix", email.subject
    assert_includes email.body.encoded, "John Doe"
    assert_includes email.body.encoded, "portable-5kva"
  end

  test "should send notification email to admin when quote is submitted" do
    quote_request = QuoteRequest.create!(
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "0412345679",
      equipment_type: "standby-20kva",
      rental_duration: "2-weeks",
      delivery_address: "456 Another Street, Brisbane QLD 4000"
    )

    email = QuoteMailer.admin_notification(quote_request)

    assert_emails 1 do
      email.deliver_now
    end

    assert_equal ["admin@genfix.com"], email.to
    assert_equal "New Quote Request - Jane Smith", email.subject
    assert_includes email.body.encoded, "Jane Smith"
    assert_includes email.body.encoded, "jane@example.com"
  end

  test "should send quote prepared email to customer" do
    quote_request = QuoteRequest.create!(
      name: "Bob Wilson",
      email: "bob@example.com",
      phone: "0412345680",
      equipment_type: "mobile-100kva",
      rental_duration: "1-month",
      delivery_address: "789 Third Street, Brisbane QLD 4000",
      status: "quoted",
      quote_price: 2500.00,
      admin_notes: "Quote prepared with special discount"
    )

    email = QuoteMailer.quote_prepared(quote_request)

    assert_emails 1 do
      email.deliver_now
    end

    assert_equal ["bob@example.com"], email.to
    assert_equal "Your Quote is Ready - Genfix", email.subject
    assert_includes email.body.encoded, "2500.0"
    assert_includes email.body.encoded, "Quote prepared with special discount"
  end

  test "should send payment link email to customer when quote is approved" do
    quote_request = QuoteRequest.create!(
      name: "Alice Brown",
      email: "alice@example.com",
      phone: "0412345681",
      equipment_type: "portable-5kva",
      rental_duration: "3-days",
      delivery_address: "321 Fourth Street, Brisbane QLD 4000",
      status: "approved",
      quote_price: 750.00,
      stripe_invoice_id: "inv_1234567890"
    )

    email = QuoteMailer.payment_link(quote_request, "https://checkout.stripe.com/pay/inv_1234567890")

    assert_emails 1 do
      email.deliver_now
    end

    assert_equal ["alice@example.com"], email.to
    assert_equal "Payment Link for Your Quote - Genfix", email.subject
    assert_includes email.body.encoded, "https://checkout.stripe.com/pay/inv_1234567890"
    assert_includes email.body.encoded, "750.0"
  end
end
