class FaqController < ApplicationController
  def index
    @faqs = Faq.published.ordered

    render inertia: 'Faq/Index', props: {
      title: 'Frequently Asked Questions | Genfix',
      faqs: @faqs.as_json(
        only: [:id, :question, :answer, :position]
      )
    }
  end
end
