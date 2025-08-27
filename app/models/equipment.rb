class Equipment < ApplicationRecord
  validates :name, :description, :kva_rating, :category, presence: true
  validates :kva_rating, numericality: { greater_than: 0 }
  validates :price_per_day, numericality: { greater_than: 0 }, allow_nil: true

  scope :available, -> { where(is_available: true) }
  scope :by_category, ->(category) { where(category: category) }
  scope :by_kva_rating, ->(rating) { where(kva_rating: rating) }

  def display_price
    return "Contact for pricing" if price_per_day.nil?
    "$#{price_per_day}/day"
  end

  def features_list
    return [] if features.blank?
    features.is_a?(Array) ? features : []
  end
end
