RailsAdmin.config do |config|
  config.asset_source = :vite

  ### Popular gems integration

  ## == Devise ==
  config.authenticate_with do
    warden.authenticate! scope: :admin_user
  end
  config.current_user_method(&:current_admin_user)

  ## == CancanCan ==
  # config.authorize_with :cancancan

  ## == Pundit ==
  # config.authorize_with :pundit

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/railsadminteam/rails_admin/wiki/Base-configuration

  ## == Gravatar integration ==
  ## To disable Gravatar integration in Navigation Bar set to false
  # config.show_gravatar = true

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end

  # Configure QuoteRequest model for Rails Admin
  config.model QuoteRequest do
    list do
      field :id
      field :name
      field :email
      field :phone
      field :equipment_type
      field :rental_duration
      field :status
      field :quote_price
      field :created_at
    end

    show do
      field :id
      field :name
      field :email
      field :phone
      field :equipment_type
      field :rental_duration
      field :delivery_address
      field :special_requirements
      field :status
      field :quote_price
      field :admin_notes
      field :quoted_at
      field :approved_at
      field :stripe_invoice_id
      field :created_at
      field :updated_at
    end

    edit do
      field :name
      field :email
      field :phone
      field :equipment_type
      field :rental_duration
      field :delivery_address
      field :special_requirements
      field :status
      field :quote_price
      field :admin_notes
      field :quoted_at
      field :approved_at
      field :stripe_invoice_id
    end

    # Custom label for navigation
    label "Quote Requests"
    label_plural "Quote Requests"
  end

  # Configure Equipment model for Rails Admin
  config.model Equipment do
    list do
      field :id
      field :name
      field :kva_rating
      field :category
      field :price_per_day
      field :is_available
      field :created_at
    end

    show do
      field :id
      field :name
      field :description
      field :kva_rating
      field :category
      field :price_per_day
      field :features
      field :image_url
      field :is_available
      field :created_at
      field :updated_at
    end

    edit do
      field :name
      field :description
      field :kva_rating
      field :category
      field :price_per_day
      field :features
      field :image_url
      field :is_available
    end

    # Custom label for navigation
    label "Equipment"
    label_plural "Equipment"
  end
end
