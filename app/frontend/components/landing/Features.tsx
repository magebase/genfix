import { Zap, Phone, Truck, Shield, Wrench, DollarSign } from "lucide-react";

export default function Features() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why choose Genfix?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional generator hire with reliable service you can trust
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Reliable equipment
            </h3>
            <p className="text-gray-600">
              Well-maintained generators from leading manufacturers, regularly
              serviced and tested.
            </p>
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="600">
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              24/7 support
            </h3>
            <p className="text-gray-600">
              Round-the-clock technical support and emergency assistance when
              you need it most.
            </p>
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="800">
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Fast delivery
            </h3>
            <p className="text-gray-600">
              Quick response times and flexible delivery scheduling to meet your
              project timelines.
            </p>
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="1000">
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Fully insured
            </h3>
            <p className="text-gray-600">
              Complete insurance coverage for equipment and operations, giving
              you peace of mind.
            </p>
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="1200">
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Expert setup
            </h3>
            <p className="text-gray-600">
              Professional installation and commissioning by qualified
              technicians.
            </p>
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="1400">
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-6">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Competitive rates
            </h3>
            <p className="text-gray-600">
              Transparent pricing with no hidden fees and flexible rental terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
