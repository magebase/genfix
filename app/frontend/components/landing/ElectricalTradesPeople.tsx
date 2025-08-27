import { CheckCircle } from "lucide-react";

export default function ElectricalTradesPeople() {
  return (
    <section className="relative w-full py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/electrical-technician-working.jpg"
          alt="Professional electrical trades people working with generators"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-blue-900/75 to-slate-900/85"></div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-right" data-aos-delay="200">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Expert electrical technicians
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our certified electrical trades people ensure safe, professional
              installation and setup of your generator rental. With years of
              experience in Brisbane's commercial and industrial sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 text-white">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span>Licensed electricians</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span>24/7 availability</span>
              </div>
            </div>
          </div>
          <div className="relative" data-aos="fade-left" data-aos-delay="400">
            <div className="aspect-square bg-gray-700 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/electrical-technician-working.jpg"
                alt="Electrical technician working on generator setup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
