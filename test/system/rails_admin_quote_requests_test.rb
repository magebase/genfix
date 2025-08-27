require "application_system_test_case"

class RailsAdminQuoteRequestsTest < ApplicationSystemTestCase
  # GREEN: Rails Admin quote visibility - basic functionality working

  test "should display quote requests in Rails Admin" do
    # Create a test quote request
    quote_request = QuoteRequest.create!(
      name: "Test Customer",
      email: "test@example.com",
      phone: "0412345678",
      equipment_type: "portable-5kva",
      rental_duration: "1-week",
      delivery_address: "123 Test Street, Brisbane QLD 4000",
      special_requirements: "Test requirements"
    )

    # Visit Rails Admin
    visit rails_admin_path

    # Should see Quote Requests in navigation
    assert_selector "a", text: "Quote Requests"

    # Click on Quote Requests link
    first("a", text: "Quote Requests").click

    # Should see the quote request we created
    assert_text "Test Customer"
    assert_text "test@example.com"
    assert_text "pending"
  end

  test "should allow viewing quote request list in Rails Admin" do
    # Create multiple test quote requests
    QuoteRequest.create!(
      name: "Customer 1",
      email: "customer1@example.com",
      phone: "0412345678",
      equipment_type: "portable-5kva",
      rental_duration: "1-week",
      delivery_address: "123 Test Street, Brisbane QLD 4000"
    )

    QuoteRequest.create!(
      name: "Customer 2",
      email: "customer2@example.com",
      phone: "0412345679",
      equipment_type: "standby-20kva",
      rental_duration: "2-weeks",
      delivery_address: "456 Another Street, Brisbane QLD 4000",
      status: "quoted",
      quote_price: 1000.00
    )

    visit rails_admin_path
    first("a", text: "Quote Requests").click

    # Should see both customers
    assert_text "Customer 1"
    assert_text "Customer 2"
    assert_text "customer1@example.com"
    assert_text "customer2@example.com"
    assert_text "pending"
    assert_text "quoted"
    assert_text "1000.0"
  end
end
