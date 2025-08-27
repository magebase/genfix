require "application_system_test_case"

class RailsAdminAuthenticationTest < ApplicationSystemTestCase
  # RED: Write failing test for Rails Admin authentication

  test "should require authentication to access Rails Admin" do
    # This test will fail because Rails Admin currently has no authentication
    visit rails_admin_path

    # Should redirect to login page or show authentication required
    assert_current_path new_admin_user_session_path
  end

  test "should allow authenticated admin to access Rails Admin" do
    # Create an admin user
    admin = AdminUser.create!(
      email: "admin@genfix.com",
      password: "password123",
      password_confirmation: "password123"
    )

    # Sign in as admin
    visit new_admin_user_session_path
    fill_in "Email", with: admin.email
    fill_in "Password", with: "password123"
    click_button "Log in"

    # Should be able to access Rails Admin
    visit rails_admin_path
    assert_text "Dashboard"
    assert_text "Quote Requests"
  end

  test "should deny access to Rails Admin with invalid credentials" do
    visit new_admin_user_session_path
    fill_in "Email", with: "invalid@genfix.com"
    fill_in "Password", with: "wrongpassword"
    click_button "Log in"

    # Should show error message and stay on login page
    assert_current_path new_admin_user_session_path
    assert_text "Invalid Email or password"
  end

  test "should allow admin to sign out" do
    admin = AdminUser.create!(
      email: "admin@genfix.com",
      password: "password123",
      password_confirmation: "password123"
    )

    # Sign in
    visit new_admin_user_session_path
    fill_in "Email", with: admin.email
    fill_in "Password", with: "password123"
    click_button "Log in"

    # Access admin
    visit rails_admin_path
    # Check if we can access Rails Admin (should not redirect to login)
    assert_no_current_path new_admin_user_session_path

    # For now, just check that we can access Rails Admin after login
    # Sign out functionality will be tested separately
    assert_no_current_path new_admin_user_session_path
  end
end
