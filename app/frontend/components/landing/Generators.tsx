import { Zap, Shield, Truck, Wrench, ArrowRight } from "lucide-react";

export default function Generators() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/generator-maintenance.jpg"
          alt="Professional generator equipment lineup"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-800/80 to-purple-900/90"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-right" data-aos-delay="200">
            <div className="aspect-[4/3] bg-blue-700 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/generator-maintenance.jpg"
                alt="Commercial generators ready for rental"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="400">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Premium generator fleet
            </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              From portable 5kVA units to large 500kVA industrial generators,
              our extensive fleet covers all your power needs. Fully maintained,
              tested, and ready for immediate deployment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3 text-white">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span>5kVA to 500kVA</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Fully maintained</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Truck className="w-5 h-5 text-blue-400" />
                <span>Fast delivery</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Wrench className="w-5 h-5 text-orange-400" />
                <span>24/7 support</span>
              </div>
            </div>
            <a
              href="#quote-form"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View equipment range
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
