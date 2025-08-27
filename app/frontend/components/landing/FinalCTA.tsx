import { ArrowRight, Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8 py-24 bg-gray-900 text-white"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl font-bold mb-4"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Ready to power your project?
        </h2>
        <p
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Get reliable generator rental in Brisbane today with lightning-fast
          service.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a
            href="#quote-form"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get instant quote
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:+61412345678"
            className="inline-flex items-center gap-2 bg-gray-300 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call now
          </a>
        </div>
      </div>
    </section>
  );
}
