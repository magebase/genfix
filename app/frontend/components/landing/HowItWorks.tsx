export default function HowItWorks() {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8 py-24 bg-gray-50"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get powered up in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Request a quote
            </h3>
            <p className="text-gray-600">
              Fill out our simple form with your requirements and location
              details.
            </p>
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="600">
            <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Confirm booking
            </h3>
            <p className="text-gray-600">
              Review your quote and confirm delivery date and time.
            </p>
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="800">
            <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Receive equipment
            </h3>
            <p className="text-gray-600">
              We'll deliver and set up your generator when you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
