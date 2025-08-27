class EquipmentController < ApplicationController
  def index
    @equipment = Equipment.available.order(:kva_rating)

    render inertia: 'Equipment/Index', props: {
      title: 'Generator Equipment | Genfix',
      equipment: @equipment.as_json(
        only: [:id, :name, :description, :kva_rating, :category, :price_per_day, :features, :image_url, :is_available]
      )
    }
  end
end
