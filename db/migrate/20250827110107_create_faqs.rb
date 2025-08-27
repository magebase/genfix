class CreateFaqs < ActiveRecord::Migration[8.0]
  def change
    create_table :faqs do |t|
      t.text :question
      t.text :answer
      t.integer :position
      t.boolean :published

      t.timestamps
    end
  end
end
