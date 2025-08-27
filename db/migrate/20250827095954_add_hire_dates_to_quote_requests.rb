class AddHireDatesToQuoteRequests < ActiveRecord::Migration[8.0]
  def change
    add_column :quote_requests, :start_hire_date, :datetime
    add_column :quote_requests, :end_hire_date, :datetime
  end
end
