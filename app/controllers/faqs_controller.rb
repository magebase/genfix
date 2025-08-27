class FaqsController < ApplicationController
  def index
    @faqs = Faq.published.ordered

    render inertia: 'FAQs/Index', props: {
      title: 'Frequently Asked Questions | Genfix',
      faqs: @faqs.as_json(
        only: [:id, :question, :answer, :position]
      )
    }
  end
end
