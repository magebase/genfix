class Ahoy::Store < Ahoy::DatabaseStore
  def user
    # Use AdminUser instead of User
    controller.send(:current_admin_user) if controller.respond_to?(:current_admin_user)
  end
end

# set to true for JavaScript tracking
Ahoy.api = false

# set to true for geocoding (and add the geocoder gem to your Gemfile)
# we recommend configuring local geocoding as well
# see https://github.com/ankane/ahoy#geocoding
Ahoy.geocode = false
