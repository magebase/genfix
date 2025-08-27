require "test_helper"

class QuoteRequestsControllerTest < ActionDispatch::IntegrationTest
  test "should create quote request" do
    assert_difference('QuoteRequest.count') do
      post quote_requests_url, params: {
        quote_request: {
          name: "Test User",
          email: "test@example.com",
          phone: "0412345678",
          equipment_type: "portable-5kva",
          rental_duration: "1-week",
          delivery_address: "123 Test Street, Brisbane QLD 4000",
          special_requirements: "Test message for quote request"
        }
      }, as: :json
    end
    assert_response :created
    json_response = JSON.parse(response.body)
    assert json_response['success']
    assert_equal 'Quote request submitted successfully!', json_response['message']
  end

  test "should not create quote request with invalid data" do
    assert_no_difference('QuoteRequest.count') do
      post quote_requests_url, params: {
        quote_request: {
          name: "",
          email: "invalid-email",
          phone: "",
          equipment_type: "",
          rental_duration: "",
          delivery_address: ""
        }
      }, as: :json
    end
    assert_response :unprocessable_entity
    json_response = JSON.parse(response.body)
    assert_not json_response['success']
    assert_includes json_response['errors'], "Name can't be blank"
  end

  test "should show quote request" do
    quote_request = QuoteRequest.create!(
      name: "Test User",
      email: "test@example.com",
      phone: "0412345678",
      equipment_type: "portable-5kva",
      rental_duration: "1-week",
      delivery_address: "123 Test Street, Brisbane QLD 4000"
    )

    get quote_request_url(quote_request)
    assert_response :success
    json_response = JSON.parse(response.body)
    assert_equal "Test User", json_response['name']
    assert_equal "pending", json_response['status']
  end

  test "should update quote request" do
    quote_request = QuoteRequest.create!(
      name: "Test User",
      email: "test@example.com",
      phone: "0412345678",
      equipment_type: "portable-5kva",
      rental_duration: "1-week",
      delivery_address: "123 Test Street, Brisbane QLD 4000"
    )

    patch quote_request_url(quote_request), params: {
      quote_request: {
        status: "quoted",
        quote_price: 500.00,
        admin_notes: "Quote prepared"
      }
    }, as: :json

    assert_response :success
    json_response = JSON.parse(response.body)
    assert json_response['success']
    assert_equal 'Quote updated successfully!', json_response['message']

    quote_request.reload
    assert_equal "quoted", quote_request.status
    assert_equal 500.00, quote_request.quote_price
    assert_equal "Quote prepared", quote_request.admin_notes
  end
end
