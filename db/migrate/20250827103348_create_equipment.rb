class CreateEquipment < ActiveRecord::Migration[8.0]
  def change
    create_table :equipment do |t|
      t.string :name
      t.text :description
      t.integer :kva_rating
      t.string :category
      t.decimal :price_per_day
      t.jsonb :features
      t.string :image_url
      t.boolean :is_available

      t.timestamps
    end
  end
end
