Rails.application.routes.draw do
  # Blog routes
  get 'blog', to: 'blog#index'
  get 'blog/:slug', to: 'blog#show', as: :blog_post

  # Quote requests
  resources :quote_requests, only: [:create, :show, :update]

  # Rails Admin
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  # Other pages
  get 'inertia-example', to: 'inertia_example#index'

  # Health check
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  root "home#index"
end
