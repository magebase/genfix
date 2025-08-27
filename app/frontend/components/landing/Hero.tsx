import { Zap, CheckCircle, ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full pt-16 pb-24">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-8"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <Zap className="w-4 h-4" />
              Power solutions for Brisbane businesses
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Reliable generator rentals
              <br />
              <span className="text-gray-600">when you need them most</span>
            </h1>

            <p
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Professional equipment, fast delivery, and 24/7 support across
              Brisbane. Get powered up in under 2 hours.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <a
                href="#quote-form"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Get instant quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+61412345678"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call now
              </a>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 w-full max-w-2xl mx-auto lg:mx-0"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Same-day delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Fully insured equipment</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">24/7 emergency support</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative" data-aos="fade-up" data-aos-delay="600">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/generator-maintenance.jpg"
                alt="Professional generator maintenance and setup"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Trusted by</p>
                  <p className="text-sm text-gray-600">500+ businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
