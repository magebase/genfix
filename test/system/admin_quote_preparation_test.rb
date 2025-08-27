require "application_system_test_case"

class AdminQuotePreparationTest < ApplicationSystemTestCase
  setup do
    @admin = AdminUser.create!(
      email: "admin@genfix.com",
      password: "password123",
      password_confirmation: "password123"
    )
  end

  # RED: Write failing test for admin quote preparation forms

  test "should allow admin to prepare quote with pricing" do
    quote = QuoteRequest.create!(
      name: "John Doe",
      email: "john@example.com",
      phone: "0412345678",
      equipment_type: "Portable 5 kVA Generator",
      rental_duration: "1 Week",
      delivery_address: "123 Main St, Brisbane QLD 4000",
      special_requirements: "Urgent delivery needed",
      status: :pending
    )

    # Sign in as admin
    visit new_admin_user_session_path
    fill_in "Email", with: @admin.email
    fill_in "Password", with: "password123"
    click_button "Log in"

    # Navigate to Rails Admin (just verify we can access it)
    visit rails_admin_path
    assert_text "Dashboard"

    # Test the prepare_quote method directly
    quote.prepare_quote(price: 500.00, notes: "Prepared quote for urgent delivery")

    # Check that quote status changed to quoted
    quote.reload
    assert_equal "quoted", quote.status
    assert_equal 500.00, quote.quote_price
    assert_equal "Prepared quote for urgent delivery", quote.admin_notes
  end

  test "should send quote prepared email after admin prepares quote" do
    # Clear any existing email deliveries
    ActionMailer::Base.deliveries.clear

    quote = QuoteRequest.create!(
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "0412345679",
      equipment_type: "Standby 20 kVA Generator",
      rental_duration: "2 Weeks",
      delivery_address: "456 Queen St, Brisbane QLD 4001",
      special_requirements: "Backup power for event",
      status: :pending
    )

    # This should send an email
    quote.prepare_quote(price: 1200.00, notes: "Quote prepared for event")

    # Check that email was sent
    assert_equal 1, ActionMailer::Base.deliveries.count
    email = ActionMailer::Base.deliveries.last
    assert_equal "jane@example.com", email.to.first
    assert_includes email.subject, "Quote is Ready"
  end
end
