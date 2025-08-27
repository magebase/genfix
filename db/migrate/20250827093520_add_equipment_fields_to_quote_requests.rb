class AddEquipmentFieldsToQuoteRequests < ActiveRecord::Migration[8.0]
  def change
    add_column :quote_requests, :equipment_type, :string
    add_column :quote_requests, :rental_duration, :string
    add_column :quote_requests, :delivery_address, :text
    add_column :quote_requests, :special_requirements, :text
  end
end
