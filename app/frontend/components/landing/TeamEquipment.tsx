import { User, Zap, Star } from "lucide-react";

export default function TeamEquipment() {
  return (
    <section className="relative py-24 bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/team-equipment.jpg"
          alt="Genfix team working with generators"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/85 via-green-800/75 to-teal-900/85"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Brisbane's trusted power partners
          </h2>
          <p className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            With over a decade serving Brisbane businesses, we've built our
            reputation on reliable service, expert knowledge, and getting the
            power back on when it matters most.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <User className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Expert Team
              </h3>
              <p className="text-emerald-100 text-sm">
                Licensed electricians and technicians with local expertise
              </p>
            </div>

            <div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Premium Equipment
              </h3>
              <p className="text-emerald-100 text-sm">
                Well-maintained generators from 5kVA to 500kVA
              </p>
            </div>

            <div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                5-Star Service
              </h3>
              <p className="text-emerald-100 text-sm">
                Fast response, reliable delivery, and 24/7 support
              </p>
            </div>
          </div>

          <div
            className="relative inline-block"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div className="aspect-video bg-green-700 rounded-2xl overflow-hidden shadow-2xl max-w-2xl mx-auto">
              <img
                src="/images/team-equipment.jpg"
                alt="Genfix team providing generator solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
