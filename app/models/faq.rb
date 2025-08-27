class Faq < ApplicationRecord
  validates :question, presence: true
  validates :answer, presence: true
  validates :position, numericality: { only_integer: true, greater_than_or_equal_to: 0 }, allow_nil: true

  scope :published, -> { where(published: true) }
  scope :ordered, -> { order(position: :asc, created_at: :desc) }

  before_save :set_default_position, if: :position_nil?

  private

  def position_nil?
    position.nil?
  end

  def set_default_position
    self.position = (Faq.maximum(:position) || 0) + 1
  end
end
