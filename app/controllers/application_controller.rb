class ApplicationController < ActionController::Base
  # Include Ahoy tracking
  include Ahoy::Controller

  # Track visits on each request
  after_action :track_ahoy_visit

  private

  def track_ahoy_visit
    ahoy.track_visit
  end
end
