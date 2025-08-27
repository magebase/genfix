class AddQuoteFieldsToQuoteRequests < ActiveRecord::Migration[8.0]
  def change
    add_column :quote_requests, :quote_price, :decimal
    add_column :quote_requests, :admin_notes, :text
    add_column :quote_requests, :quoted_at, :datetime
    add_column :quote_requests, :approved_at, :datetime
    add_column :quote_requests, :stripe_invoice_id, :string
  end
end
