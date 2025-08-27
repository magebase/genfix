require "application_system_test_case"

class AhoyAnalyticsTest < ApplicationSystemTestCase
  # RED: Write failing test for Ahoy Matomo analytics

  test "should track page visits with Ahoy" do
    # This test will fail because Ahoy is not implemented yet
    visit root_path

    # Check that a visit was recorded
    visit_record = Ahoy::Visit.last
    assert_not_nil visit_record
    assert_equal "127.0.0.1", visit_record.ip
  end

  test "should track events with Ahoy" do
    # Visit the page first to establish a visit
    visit root_path

    # Create an event manually for testing
    visit_record = Ahoy::Visit.last
    Ahoy::Event.create!(
      visit: visit_record,
      name: "quote_requested",
      properties: { equipment_type: "Portable 5 kVA Generator" },
      time: Time.current
    )

    # Check that the event was recorded
    event = Ahoy::Event.last
    assert_not_nil event
    assert_equal "quote_requested", event.name
    assert_equal "Portable 5 kVA Generator", event.properties["equipment_type"]
  end
end
