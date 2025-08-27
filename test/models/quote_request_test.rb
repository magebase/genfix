require "test_helper"

class QuoteRequestTest < ActiveSupport::TestCase
  # RED: Write failing tests for quote request functionality

  test "should be valid with all required attributes" do
    quote_request = QuoteRequest.new(
      name: "John Doe",
      email: "john@example.com",
      phone: "0412345678",
      equipment_type: "portable-5kva",
      rental_duration: "1-week",
      delivery_address: "123 Test Street, Brisbane QLD 4000",
      special_requirements: "Need fuel included"
    )
    assert quote_request.valid?
  end

  test "should set default status to pending" do
    quote_request = QuoteRequest.new(
      name: "John Doe",
      email: "john@example.com",
      phone: "0412345678",
      equipment_type: "portable-5kva",
      rental_duration: "1-week",
      delivery_address: "123 Test Street, Brisbane QLD 4000"
    )
    assert_equal "pending", quote_request.status
  end

  test "should be invalid without required attributes" do
    quote_request = QuoteRequest.new
    assert_not quote_request.valid?
    assert_includes quote_request.errors[:name], "can't be blank"
    assert_includes quote_request.errors[:email], "can't be blank"
    assert_includes quote_request.errors[:phone], "can't be blank"
    assert_includes quote_request.errors[:delivery_address], "can't be blank"
  end

  test "should validate email format" do
    invalid_emails = ["invalid", "invalid@", "@invalid.com", "invalid..com"]
    invalid_emails.each do |email|
      quote_request = QuoteRequest.new(
        name: "John Doe",
        email: email,
        phone: "0412345678",
        equipment_type: "portable-5kva",
        rental_duration: "1-week",
        delivery_address: "123 Test Street, Brisbane QLD 4000"
      )
      assert_not quote_request.valid?, "Email #{email} should be invalid"
      assert_includes quote_request.errors[:email], "is invalid"
    end
  end

  test "should allow valid email formats" do
    valid_emails = ["user@example.com", "user.name@domain.co.uk", "user+tag@example.org"]
    valid_emails.each do |email|
      quote_request = QuoteRequest.new(
        name: "John Doe",
        email: email,
        phone: "0412345678",
        equipment_type: "portable-5kva",
        rental_duration: "1-week",
        delivery_address: "123 Test Street, Brisbane QLD 4000"
      )
      assert quote_request.valid?, "Email #{email} should be valid"
    end
  end

  # These tests will fail initially - we need to add these features
  test "should have quote_price field for admin-prepared quotes" do
    quote_request = QuoteRequest.new(
      name: "John Doe",
      email: "john@example.com",
      phone: "0412345678",
      equipment_type: "portable-5kva",
      rental_duration: "1-week",
      delivery_address: "123 Test Street, Brisbane QLD 4000",
      quote_price: 500.00
    )
    # This will fail until we add the quote_price field
    assert_equal 500.00, quote_request.quote_price
  end

  test "should have admin_notes field for internal use" do
    quote_request = QuoteRequest.new(
      name: "John Doe",
      email: "john@example.com",
      phone: "0412345678",
      equipment_type: "portable-5kva",
      rental_duration: "1-week",
      delivery_address: "123 Test Street, Brisbane QLD 4000",
      admin_notes: "Customer prefers morning delivery"
    )
    # This will fail until we add the admin_notes field
    assert_equal "Customer prefers morning delivery", quote_request.admin_notes
  end

  test "should have quoted_at timestamp" do
    quote_request = QuoteRequest.new(
      name: "John Doe",
      email: "john@example.com",
      phone: "0412345678",
      equipment_type: "portable-5kva",
      rental_duration: "1-week",
      delivery_address: "123 Test Street, Brisbane QLD 4000"
    )
    # This will fail until we add the quoted_at field
    assert_nil quote_request.quoted_at
  end

  test "should have approved_at timestamp" do
    quote_request = QuoteRequest.new(
      name: "John Doe",
      email: "john@example.com",
      phone: "0412345678",
      equipment_type: "portable-5kva",
      rental_duration: "1-week",
      delivery_address: "123 Test Street, Brisbane QLD 4000"
    )
    # This will fail until we add the approved_at field
    assert_nil quote_request.approved_at
  end

  test "should have stripe_invoice_id field" do
    quote_request = QuoteRequest.new(
      name: "John Doe",
      email: "john@example.com",
      phone: "0412345678",
      equipment_type: "portable-5kva",
      rental_duration: "1-week",
      delivery_address: "123 Test Street, Brisbane QLD 4000",
      stripe_invoice_id: "inv_1234567890"
    )
    # This will fail until we add the stripe_invoice_id field
    assert_equal "inv_1234567890", quote_request.stripe_invoice_id
  end
end
