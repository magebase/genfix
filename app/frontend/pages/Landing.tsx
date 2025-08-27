import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

export default function Landing() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    equipmentType: "",
    rentalDuration: "",
    deliveryAddress: "",
    specialRequirements: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function getCompletedFieldsCount() {
    const requiredFields = [
      "name",
      "email",
      "phone",
      "equipmentType",
      "rentalDuration",
      "deliveryAddress",
    ];
    return requiredFields.filter(
      (field) => formState[field as keyof typeof formState].trim() !== ""
    ).length;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    fetch("/quote_requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token":
          document
            .querySelector('meta[name="csrf-token"]')
            ?.getAttribute("content") || "",
      },
      body: JSON.stringify({ quote_request: formState }),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
        } else {
          throw new Error("Failed to submit quote request");
        }
      })
      .catch((error) => {
        console.error("Error submitting quote request:", error);
        alert(
          "There was an error submitting your quote request. Please try again."
        );
      });
  }

  return (
    <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-orange-50 min-h-screen w-full">
      <Header />

      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white text-center py-3 px-4">
        <div className="flex items-center justify-center gap-2">
          <svg
            className="w-5 h-5 animate-pulse"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-semibold">
            ⚡ LIMITED TIME: 20% OFF First Generator Rental + Free Delivery!
          </span>
          <svg
            className="w-5 h-5 animate-pulse"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <main className="w-full px-4 sm:px-6 lg:px-8 pt-8">
        {/* Hero */}
        <section data-aos="fade-up" className="text-center py-20 mb-20">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
              ⚡ Genfix — Power When You Need It
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Book a generator in minutes — dependable, insured, and local to
              Brisbane. Fast delivery, reliable equipment, and exceptional
              service.
            </p>
            <div className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-6 py-3 rounded-full inline-block mb-8 shadow-lg">
              <span className="font-semibold">
                ⚡ Same-day delivery available • 24/7 emergency service
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border-2 border-yellow-400">
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">⚡ Reliable power</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border-2 border-blue-400">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium">🚚 Local delivery</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border-2 border-orange-400">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-sm font-medium">🔧 Expert service</span>
              </div>
            </div>
          </div>

          {/* Prominent Quote Form */}
          <div
            id="quote-form"
            data-aos="zoom-in"
            className="max-w-6xl mx-auto mb-24"
          >
            <div className="bg-gradient-to-br from-white via-yellow-50 to-orange-50 rounded-2xl shadow-2xl p-10 border-2 border-yellow-200 relative overflow-hidden">
              {/* Electricity pattern overlay - moved to background */}
              <div className="absolute inset-0 pointer-events-none opacity-5">
                <div className="absolute top-4 right-4 w-12 h-12 border-2 border-yellow-400 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-orange-400 rounded-full"></div>
                <svg
                  className="absolute top-8 left-8 w-16 h-16 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <div className="text-center mb-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">
                  ⚡ Get Your Instant Quote
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and we'll power up your project within
                  1 hour
                </p>
                <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Fully Insured</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Licensed Electricians</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>5-Star Rated</span>
                  </div>
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-green-600 mb-2">
                    ⚡ Quote Request Submitted!
                  </h4>
                  <p className="text-gray-600">
                    We'll follow up within one business hour with your
                    personalized quote.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Form Progress
                      </span>
                      <span className="text-sm text-gray-500">
                        {getCompletedFieldsCount()}/6 fields completed
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${(getCompletedFieldsCount() / 6) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  {/* Row 1: Name, Email, Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 transition-all bg-white/80 hover:bg-white"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 transition-all bg-white/80 hover:bg-white"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 transition-all bg-white/80 hover:bg-white"
                        placeholder="+61 XXX XXX XXX"
                      />
                    </div>
                  </div>

                  {/* Row 2: Equipment Type, Duration */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Equipment Type *
                      </label>
                      <select
                        name="equipmentType"
                        value={formState.equipmentType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 transition-all bg-white/80 hover:bg-white"
                      >
                        <option value="">Select equipment type</option>
                        <option value="portable-5kva">Portable 5 kVA</option>
                        <option value="standby-20kva">Standby 20 kVA</option>
                        <option value="mobile-100kva">Mobile 100 kVA</option>
                        <option value="other">
                          Other - please specify below
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Rental Duration *
                      </label>
                      <select
                        name="rentalDuration"
                        value={formState.rentalDuration}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 transition-all bg-white/80 hover:bg-white"
                      >
                        <option value="">Select duration</option>
                        <option value="1-day">1 Day</option>
                        <option value="3-days">3 Days</option>
                        <option value="1-week">1 Week</option>
                        <option value="2-weeks">2 Weeks</option>
                        <option value="1-month">1 Month+</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Delivery Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Address *
                    </label>
                    <input
                      name="deliveryAddress"
                      value={formState.deliveryAddress}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 transition-all bg-white/80 hover:bg-white"
                      placeholder="Street address, suburb, Brisbane QLD"
                    />
                  </div>

                  {/* Row 4: Special Requirements */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Special Requirements (optional)
                    </label>
                    <textarea
                      name="specialRequirements"
                      value={formState.specialRequirements}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 transition-all bg-white/80 hover:bg-white"
                      placeholder="Any special requirements, setup needs, or additional information..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="px-16 py-5 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                    >
                      <span className="relative z-10">
                        ⚡ Get Instant Quote
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </button>
                    <p className="text-sm text-orange-600 mt-3">
                      ⚡ No commitment required • Response within 1 hour
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          data-aos="fade-up"
          className="w-full py-20 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 mb-20"
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                  1
                </div>
                <h4 className="font-semibold mb-2">Request a Quote</h4>
                <p className="text-gray-600">
                  Fill out our quick form with your requirements, and we'll get
                  back to you within one business day.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                  2
                </div>
                <h4 className="font-semibold mb-2">Confirm Booking</h4>
                <p className="text-gray-600">
                  Review your quote, confirm dates, and we'll schedule delivery
                  to your location in Brisbane.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                  3
                </div>
                <h4 className="font-semibold mb-2">Receive Equipment</h4>
                <p className="text-gray-600">
                  We'll deliver the generator on time, set it up if needed, and
                  handle pickup when your rental ends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          data-aos="fade-up"
          className="w-full py-20 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 mb-20"
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Why Choose Genfix?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold">
                  ⚡ Fast local delivery across Brisbane
                </h4>
                <p className="text-gray-600 mt-2">
                  Lightning-fast delivery to get your power running when you
                  need it most.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold">
                  🔧 Well-maintained, insured equipment
                </h4>
                <p className="text-gray-600 mt-2">
                  All generators are professionally serviced and fully insured
                  for your peace of mind.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold">
                  📱 Simple online booking and invoicing
                </h4>
                <p className="text-gray-600 mt-2">
                  Easy online booking system with transparent invoicing and
                  payment options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section data-aos="fade-up" className="py-20 mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2">
                  <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        J
                      </div>
                      <div>
                        <h4 className="font-semibold">John Smith</h4>
                        <p className="text-sm text-gray-600">
                          Construction Manager
                        </p>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 mb-3">
                      {"★".repeat(5)}
                    </div>
                    <p className="text-gray-700 italic">
                      "Genfix delivered our generator on time and it worked
                      perfectly for our construction site. Great service and
                      professional team!"
                    </p>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2">
                  <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        S
                      </div>
                      <div>
                        <h4 className="font-semibold">Sarah Johnson</h4>
                        <p className="text-sm text-gray-600">Event Organizer</p>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 mb-3">
                      {"★".repeat(5)}
                    </div>
                    <p className="text-gray-700 italic">
                      "Reliable equipment and transparent pricing. Will
                      definitely use again for our events. The team was very
                      helpful!"
                    </p>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2">
                  <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        M
                      </div>
                      <div>
                        <h4 className="font-semibold">Mike Wilson</h4>
                        <p className="text-sm text-gray-600">
                          Facility Manager
                        </p>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 mb-3">
                      {"★".repeat(5)}
                    </div>
                    <p className="text-gray-700 italic">
                      "Excellent emergency backup power solution. Quick response
                      time and well-maintained equipment. Highly recommended!"
                    </p>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2">
                  <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        L
                      </div>
                      <div>
                        <h4 className="font-semibold">Lisa Brown</h4>
                        <p className="text-sm text-gray-600">Business Owner</p>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 mb-3">
                      {"★".repeat(5)}
                    </div>
                    <p className="text-gray-700 italic">
                      "Outstanding service! The generators arrived exactly when
                      promised and the pricing was very competitive. Great
                      company to work with."
                    </p>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </section>

        {/* Equipment Showcase */}
        <section
          id="equipment"
          data-aos="fade-up"
          className="w-full py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white mb-20"
        >
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              ⚡ Our Generator Fleet
            </h2>
            <p className="text-blue-200 text-center mb-8 max-w-2xl mx-auto">
              Professional-grade generators for every need, from small events to
              large-scale operations
            </p>

            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300 hover:bg-white/20">
                    <div className="w-full h-48 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-lg mb-4 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-lg"></div>
                      <svg
                        className="w-16 h-16 text-yellow-600 relative z-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <h4 className="font-semibold text-lg mb-2 text-yellow-300">
                      ⚡ Portable 5 kVA
                    </h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Perfect for small tools and lighting
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm bg-yellow-500 text-white px-2 py-1 rounded-full">
                        Available
                      </span>
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300 hover:bg-white/20">
                    <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-red-200 rounded-lg mb-4 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-lg"></div>
                      <svg
                        className="w-16 h-16 text-orange-600 relative z-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        />
                      </svg>
                      <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <h4 className="font-semibold text-lg mb-2 text-orange-300">
                      🔥 Standby 20 kVA
                    </h4>
                    <p className="text-gray-300 text-sm mb-3">
                      For larger sites and events
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded-full">
                        Available
                      </span>
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300 hover:bg-white/20">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg mb-4 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-lg"></div>
                      <svg
                        className="w-16 h-16 text-blue-600 relative z-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-500 rounded-full"></div>
                    </div>
                    <h4 className="font-semibold text-lg mb-2 text-blue-300">
                      🚀 Mobile 100 kVA
                    </h4>
                    <p className="text-gray-300 text-sm mb-3">
                      For large events and temporary power
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded-full">
                        Limited
                      </span>
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300 hover:bg-white/20">
                    <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-red-200 rounded-lg mb-4 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-lg"></div>
                      <svg
                        className="w-16 h-16 text-orange-600 relative z-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <h4 className="font-semibold text-lg mb-2 text-orange-300">
                      🛡️ Emergency Backup
                    </h4>
                    <p className="text-gray-300 text-sm mb-3">
                      24/7 emergency power solutions
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                        On Call
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </section>

        {/* FAQ */}
        <section
          data-aos="fade-up"
          className="w-full py-20 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 mb-20"
        >
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-semibold mb-2 flex items-center">
                  <span className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                    ?
                  </span>
                  How quickly can you deliver?
                </h4>
                <p className="text-gray-600">
                  Same-day or next-day delivery across Brisbane depending on
                  availability and location.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-semibold mb-2 flex items-center">
                  <span className="w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                    ?
                  </span>
                  Do you provide setup and installation?
                </h4>
                <p className="text-gray-600">
                  Yes, our team handles delivery, setup, and basic installation.
                  Advanced electrical work may require a licensed electrician.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-semibold mb-2 flex items-center">
                  <span className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                    ?
                  </span>
                  What areas do you service?
                </h4>
                <p className="text-gray-600">
                  We service all Brisbane suburbs and surrounding areas. Contact
                  us for delivery to regional Queensland.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-semibold mb-2 flex items-center">
                  <span className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                    ?
                  </span>
                  Are the generators insured?
                </h4>
                <p className="text-gray-600">
                  Yes, all our equipment is fully insured and regularly
                  maintained with detailed service records available.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Final CTA */}
      <section
        data-aos="fade-up"
        className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white py-24 relative overflow-hidden "
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-orange-600/20 to-red-600/20"></div>
        {/* Electricity pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute top-20 right-20 w-12 h-12 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-8 h-8 border-2 border-white rounded-full"></div>
          <svg
            className="absolute bottom-10 right-10 w-20 h-20 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <div className="mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              ⚡ Ready to Power Your Project?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Get reliable generator rental in Brisbane today with
              lightning-fast service!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#quote-form"
              className="inline-block px-12 py-5 bg-white text-orange-600 rounded-xl shadow-2xl font-bold text-xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
            >
              ⚡ Get Instant Quote
            </a>
            <a
              href="tel:+61412345678"
              className="inline-block px-12 py-5 border-3 border-white text-white rounded-xl font-bold text-xl hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
