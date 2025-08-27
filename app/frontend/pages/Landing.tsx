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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  Zap,
  Shield,
  Truck,
  Wrench,
  CheckCircle,
  MapPin,
  Star,
  ArrowRight,
  Phone,
  Mail,
  User,
  Calendar,
  ChevronDown,
  DollarSign,
} from "lucide-react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);

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
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      <Header />

      {/* Announcement Bar */}
      <div
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4"
        data-aos="fade-down"
        data-aos-duration="600"
      >
        <div className="flex items-center justify-center gap-2 text-sm">
          <Zap className="w-4 h-4" />
          <span>Limited time: 20% off first rental + free delivery</span>
        </div>
      </div>

      <main className="w-full">
        {/* Hero */}
        <section className="w-full pt-16 pb-24">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-8"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                <Zap className="w-4 h-4" />
                Power solutions for Brisbane businesses
              </div>

              <h1
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Reliable generator rentals
                <br />
                <span className="text-gray-600">when you need them most</span>
              </h1>

              <p
                className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Professional equipment, fast delivery, and 24/7 support across
                Brisbane. Get powered up in under 2 hours.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
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
                className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto"
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
          </div>
        </section>

        {/* Quote Form */}
        <section
          id="quote-form"
          className="relative py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden"
          data-aos="fade-up"
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                <Zap className="w-4 h-4" />⚡ Limited Time: FREE Setup + 20% OFF
                First Rental
              </div>

              <h2
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Get Your Power Solution
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  In Under 2 Hours
                </span>
              </h2>

              <p
                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Join 500+ Brisbane businesses who trust Genfix for reliable
                power.
                <strong className="text-gray-900">
                  {" "}
                  No commitment required • Instant quote • Same-day delivery
                </strong>
              </p>

              {/* Trust badges */}
              <div
                className="flex flex-wrap justify-center items-center gap-6 mb-12"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">
                    Fully Insured
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">
                    Licensed Electricians
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-700">
                    5-Star Rated
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border">
                  <Truck className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">
                    24/7 Support
                  </span>
                </div>
              </div>
            </div>

            <div
              className="max-w-4xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full translate-y-12 -translate-x-12"></div>

                <div className="relative">
                  {submitted ? (
                    <div
                      className="text-center py-16"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div
                        className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                      >
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h3
                        className="text-3xl font-bold text-gray-900 mb-4"
                        data-aos="fade-up"
                        data-aos-delay="600"
                      >
                        🎉 Quote Request Submitted!
                      </h3>
                      <p
                        className="text-xl text-gray-600 mb-6"
                        data-aos="fade-up"
                        data-aos-delay="800"
                      >
                        Our team will call you within the next hour with your
                        personalized quote.
                      </p>
                      <div
                        className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 mb-6"
                        data-aos="fade-up"
                        data-aos-delay="1000"
                      >
                        <p className="text-green-800 font-medium">
                          📞 What happens next?
                        </p>
                        <ul className="text-left text-green-700 text-sm mt-2 space-y-1">
                          <li>
                            • Our power specialist will call you within 1 hour
                          </li>
                          <li>• We'll discuss your specific requirements</li>
                          <li>
                            • Receive a customized quote with no obligation
                          </li>
                          <li>• Schedule delivery if you decide to proceed</li>
                        </ul>
                      </div>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                        data-aos="fade-up"
                        data-aos-delay="1200"
                      >
                        Request Another Quote
                      </button>
                    </div>
                  ) : (
                    <>
                      <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Progress indicator */}
                        <div className="mb-8">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-semibold text-gray-700">
                              Quote Progress
                            </span>
                            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                              {getCompletedFieldsCount()}/6 completed
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
                              style={{
                                width: `${
                                  (getCompletedFieldsCount() / 6) * 100
                                }%`,
                              }}
                            ></div>
                          </div>
                        </div>

                        {/* Social proof */}
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4 mb-8">
                          <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                J
                              </div>
                              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                S
                              </div>
                              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                M
                              </div>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-600">
                                <strong className="text-gray-900">
                                  500+ customers
                                </strong>{" "}
                                requested quotes this month
                              </p>
                            </div>
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 fill-current"
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Form fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Full Name *
                            </label>
                            <div className="relative">
                              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                              <input
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500 hover:border-gray-300"
                                placeholder="Your full name"
                              />
                            </div>
                          </div>

                          <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Email Address *
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                              <input
                                name="email"
                                type="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500 hover:border-gray-300"
                                placeholder="your@email.com"
                              />
                            </div>
                          </div>

                          <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Phone Number *
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                              <input
                                name="phone"
                                type="tel"
                                value={formState.phone}
                                onChange={handleChange}
                                required
                                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500 hover:border-gray-300"
                                placeholder="+61 XXX XXX XXX"
                              />
                            </div>
                          </div>

                          <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Equipment Type *
                            </label>
                            <div className="relative">
                              <select
                                name="equipmentType"
                                value={formState.equipmentType}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-900 appearance-none hover:border-gray-300"
                              >
                                <option value="">Select equipment type</option>
                                <option value="portable-5kva">
                                  🚀 Portable 5 kVA - Small tools & lighting
                                </option>
                                <option value="standby-20kva">
                                  🏗️ Standby 20 kVA - Construction & events
                                </option>
                                <option value="mobile-100kva">
                                  🏭 Mobile 100 kVA - Large events & industrial
                                </option>
                                <option value="other">
                                  ❓ Other - please specify below
                                </option>
                              </select>
                              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                            </div>
                          </div>

                          <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Rental Duration *
                            </label>
                            <div className="relative">
                              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                              <select
                                name="rentalDuration"
                                value={formState.rentalDuration}
                                onChange={handleChange}
                                required
                                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-900 appearance-none hover:border-gray-300"
                              >
                                <option value="">Select duration</option>
                                <option value="1-day">
                                  📅 1 Day - Emergency power
                                </option>
                                <option value="3-days">
                                  📆 3 Days - Short projects
                                </option>
                                <option value="1-week">
                                  📊 1 Week - Construction sites
                                </option>
                                <option value="2-weeks">
                                  🗓️ 2 Weeks - Events & festivals
                                </option>
                                <option value="1-month">
                                  📈 1 Month+ - Long-term projects
                                </option>
                              </select>
                              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                            </div>
                          </div>

                          <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Delivery Address *
                            </label>
                            <div className="relative">
                              <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                              <input
                                name="deliveryAddress"
                                value={formState.deliveryAddress}
                                onChange={handleChange}
                                required
                                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500 hover:border-gray-300"
                                placeholder="Street address, suburb, Brisbane QLD"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Special Requirements
                          </label>
                          <textarea
                            name="specialRequirements"
                            value={formState.specialRequirements}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500 hover:border-gray-300 resize-none"
                            placeholder="Any special requirements, setup needs, fuel arrangements, or additional information..."
                          />
                        </div>

                        {/* Submit button */}
                        <div className="text-center pt-6">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white px-12 py-5 rounded-xl font-bold text-lg hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Processing...
                              </>
                            ) : (
                              <>
                                <Zap className="w-6 h-6 group-hover:animate-pulse" />
                                Get My FREE Quote Now
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                              </>
                            )}
                          </button>

                          <div className="mt-6 space-y-2">
                            <p className="text-sm text-gray-500">
                              ⚡ <strong>No commitment required</strong> • 📞
                              Response within 1 hour • 🚚 Same-day delivery
                              available
                            </p>
                            <p className="text-xs text-gray-400">
                              By submitting this form, you agree to receive a
                              call from our power specialists. Your information
                              is secure and will never be shared with third
                              parties.
                            </p>
                          </div>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image Section - Electrical Trades People */}
        <section className="relative w-full py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 overflow-hidden ">
          <div className="absolute inset-0">
            <img
              src="/images/electrical-technician-working.jpg"
              alt="Professional electrical trades people working with generators"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-blue-900/75 to-slate-900/85"></div>
          </div>
          <div className=" w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
              <div data-aos="fade-right" data-aos-delay="200">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Expert electrical technicians
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Our certified electrical trades people ensure safe,
                  professional installation and setup of your generator rental.
                  With years of experience in Brisbane's commercial and
                  industrial sectors.
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
              <div
                className="relative"
                data-aos="fade-left"
                data-aos-delay="400"
              >
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

        {/* How it works */}
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
              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
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

              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
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

              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="800"
              >
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

        {/* Hero Image Section - Generators */}
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
              <div
                className="relative"
                data-aos="fade-right"
                data-aos-delay="200"
              >
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
                  From portable 5kVA units to large 500kVA industrial
                  generators, our extensive fleet covers all your power needs.
                  Fully maintained, tested, and ready for immediate deployment.
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

        {/* Features */}
        <section
          className="px-4 sm:px-6 lg:px-8 py-24 bg-white"
          data-aos="fade-up"
        >
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
              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Reliable equipment
                </h3>
                <p className="text-gray-600">
                  Well-maintained generators from leading manufacturers,
                  regularly serviced and tested.
                </p>
              </div>

              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  24/7 support
                </h3>
                <p className="text-gray-600">
                  Round-the-clock technical support and emergency assistance
                  when you need it most.
                </p>
              </div>

              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Fast delivery
                </h3>
                <p className="text-gray-600">
                  Quick response times and flexible delivery scheduling to meet
                  your project timelines.
                </p>
              </div>

              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Fully insured
                </h3>
                <p className="text-gray-600">
                  Complete insurance coverage for equipment and operations,
                  giving you peace of mind.
                </p>
              </div>

              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
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

              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Competitive rates
                </h3>
                <p className="text-gray-600">
                  Transparent pricing with no hidden fees and flexible rental
                  terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image Section - Team & Equipment */}
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
                reputation on reliable service, expert knowledge, and getting
                the power back on when it matters most.
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

        {/* Testimonials */}
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
                What our customers say
              </h2>
              <p className="text-xl text-gray-600">
                Trusted by Brisbane businesses
              </p>
            </div>

            <div
              className="max-w-4xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2">
                    <div className="bg-white p-8 rounded-lg border border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                          J
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            John Smith
                          </div>
                          <div className="text-gray-500 text-sm">
                            Construction Manager
                          </div>
                        </div>
                      </div>
                      <div className="flex text-yellow-400 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700">
                        "Genfix delivered our generator on time and it worked
                        perfectly for our construction site. Great service and
                        professional team!"
                      </p>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/2">
                    <div className="bg-white p-8 rounded-lg border border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                          S
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            Sarah Wilson
                          </div>
                          <div className="text-gray-500 text-sm">
                            Event Coordinator
                          </div>
                        </div>
                      </div>
                      <div className="flex text-yellow-400 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700">
                        "Reliable equipment and transparent pricing. Will
                        definitely use again for our events. The team was very
                        helpful!"
                      </p>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/2">
                    <div className="bg-white p-8 rounded-lg border border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                          M
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            Mike Johnson
                          </div>
                          <div className="text-gray-500 text-sm">
                            Facility Manager
                          </div>
                        </div>
                      </div>
                      <div className="flex text-yellow-400 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700">
                        "Excellent emergency backup power solution. Quick
                        response time and well-maintained equipment. Highly
                        recommended!"
                      </p>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/2">
                    <div className="bg-white p-8 rounded-lg border border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                          L
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            Lisa Brown
                          </div>
                          <div className="text-gray-500 text-sm">
                            Business Owner
                          </div>
                        </div>
                      </div>
                      <div className="flex text-yellow-400 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700">
                        "Outstanding service! The generators arrived exactly
                        when promised and the pricing was very competitive.
                        Great company to work with."
                      </p>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Equipment */}
        <section className="px-4 sm:px-6 lg:px-8 py-24" data-aos="fade-up">
          <div className="max-w-7xl mx-auto">
            <div
              className="text-center mb-16"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our generator fleet
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Professional-grade equipment for every power requirement
              </p>
            </div>

            <div
              className="max-w-5xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
                      <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                        <Zap className="w-16 h-16 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Portable 5 kVA
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Perfect for small tools and lighting
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          Available
                        </span>
                      </div>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
                      <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                        <Zap className="w-16 h-16 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Standby 20 kVA
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        For larger sites and events
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          Available
                        </span>
                      </div>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
                      <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                        <Zap className="w-16 h-16 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Mobile 100 kVA
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        For large events and temporary power
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                          Limited
                        </span>
                      </div>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
                      <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                        <Shield className="w-16 h-16 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Emergency backup
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        24/7 emergency power solutions
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          On call
                        </span>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="px-4 sm:px-6 lg:px-8 py-24 bg-gray-50"
          data-aos="fade-up"
        >
          <div className="max-w-4xl mx-auto">
            <div
              className="text-center mb-16"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently asked questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our generator rental service
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem
                value="delivery-time"
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
                  How quickly can you deliver?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  <p className="mb-3">
                    Same-day or next-day delivery across Brisbane depending on
                    availability and location. We offer flexible scheduling to
                    meet your project timelines.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Emergency service:</strong> 2-hour emergency
                    response available for critical situations.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="setup-installation"
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
                  Do you provide setup and installation?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  <p className="mb-3">
                    Yes, our certified electrical technicians handle delivery,
                    setup, and basic installation. This includes connecting the
                    generator, basic electrical work, and ensuring safe
                    operation.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Note:</strong> Advanced electrical work or permanent
                    installations may require a licensed electrician at
                    additional cost.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="service-areas"
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
                  What areas do you service?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  <p className="mb-3">
                    We service all Brisbane suburbs and surrounding areas
                    including the CBD, Northside, Southside, West Brisbane, and
                    Ipswich region. Contact us for delivery to regional
                    Queensland.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Extended areas:</strong> Additional fees may apply
                    for deliveries outside the Brisbane metropolitan area.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="insurance"
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
                  Are the generators insured?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  <p className="mb-3">
                    Yes, all our equipment is fully insured and regularly
                    maintained with detailed service records available. We carry
                    comprehensive insurance coverage for equipment damage,
                    theft, and operational incidents.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Public liability:</strong> $20 million public
                    liability insurance covers any incidents during rental
                    periods.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="generator-types"
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
                  What types of generators do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  <p className="mb-4">
                    We offer a comprehensive range of generators to suit every
                    power requirement:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      <strong>Portable 5-15 kVA:</strong> Perfect for small
                      tools, lighting, and temporary power
                    </li>
                    <li>
                      <strong>Standby 20-50 kVA:</strong> Ideal for larger
                      sites, events, and backup power
                    </li>
                    <li>
                      <strong>Mobile 100-200 kVA:</strong> For large events,
                      construction sites, and industrial use
                    </li>
                    <li>
                      <strong>Industrial 300-500 kVA:</strong> Heavy-duty
                      applications and permanent backup power
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-3">
                    All generators are diesel-powered, quiet-running, and meet
                    Australian safety standards.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="fuel-requirements"
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
                  Do you provide fuel or do I need to arrange it?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  <p className="mb-3">
                    We can provide fuel delivery and management as part of our
                    service, or you can arrange your own fuel supply. Our
                    generators are designed for easy refueling, and we can set
                    up automatic fuel systems for longer rentals.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Fuel options:</strong> Diesel fuel delivery
                    available • Self-service refueling • Automatic fuel systems
                    for extended use
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="noise-levels"
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
                  How noisy are the generators?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  <p className="mb-3">
                    Our generators are designed with noise reduction in mind.
                    Most models operate at 65-75 dB at 7 meters, which is
                    comparable to a normal conversation or office environment.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Noise control options:</strong> Acoustic enclosures
                    available • Remote installation • Sound-attenuated models
                    for residential areas
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="maintenance-support"
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
                  What maintenance and support do you provide?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  <p className="mb-4">
                    We provide comprehensive maintenance and 24/7 support
                    including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      <strong>Regular servicing:</strong> All equipment is
                      serviced before each rental
                    </li>
                    <li>
                      <strong>On-site support:</strong> Technicians available
                      for troubleshooting and repairs
                    </li>
                    <li>
                      <strong>Emergency response:</strong> 24/7 emergency
                      breakdown service
                    </li>
                    <li>
                      <strong>Remote monitoring:</strong> Optional remote
                      monitoring and alerting systems
                    </li>
                    <li>
                      <strong>Training:</strong> Operator training and safety
                      briefings included
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="pricing-structure"
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
                  How is pricing structured?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  <p className="mb-3">
                    Our pricing is transparent with no hidden fees. Rates depend
                    on generator size, rental duration, and additional services
                    required. We offer competitive daily, weekly, and monthly
                    rates.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Included in rental:</strong> Delivery • Setup •
                    Basic operator training • 24/7 support
                    <br />
                    <strong>Optional extras:</strong> Fuel delivery • Extended
                    support • Remote monitoring • Insurance coverage
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="minimum-rental"
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
                  What's the minimum rental period?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  <p className="mb-3">
                    Our minimum rental period is 24 hours (one day). However, we
                    offer flexible terms and can accommodate shorter periods for
                    emergency situations. Longer rental periods qualify for
                    discounted rates.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Rental periods:</strong> Daily • Weekly • Monthly •
                    Long-term contracts available
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="power-calculations"
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
                  How do I know what size generator I need?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  <p className="mb-3">
                    Our team can help you calculate your power requirements
                    based on your equipment and usage. We consider starting
                    power (surge) requirements and running power needs to
                    recommend the right size.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Power calculation factors:</strong> Equipment
                    wattage • Starting surge requirements • Power factor •
                    Future expansion needs • Environmental conditions
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="permits-approvals"
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
                  Do I need permits or approvals to use a generator?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  <p className="mb-3">
                    Depending on your location and intended use, you may need
                    local council approval or permits. We can assist with the
                    application process and provide documentation to support
                    your permit application.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Permit assistance:</strong> Council application
                    support • Noise level documentation • Environmental impact
                    assessments • Temporary use approvals
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="weather-operation"
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
                  Can generators operate in all weather conditions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  <p className="mb-3">
                    Our generators are designed for outdoor use but have
                    limitations in extreme weather. We provide weather
                    protection options and can advise on suitable operating
                    conditions.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Weather considerations:</strong> Rain protection
                    covers • Temperature operating ranges • Wind protection •
                    Humidity considerations • Extreme weather protocols
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="emergency-preparedness"
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
                  What emergency preparedness services do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  <p className="mb-4">
                    We specialize in emergency power solutions and offer:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      <strong>24/7 emergency response:</strong> Rapid deployment
                      for power outages
                    </li>
                    <li>
                      <strong>Disaster preparedness:</strong> Pre-arranged
                      emergency power plans
                    </li>
                    <li>
                      <strong>Critical facility support:</strong> Hospitals,
                      emergency services, data centers
                    </li>
                    <li>
                      <strong>Storm season readiness:</strong> Pre-positioned
                      equipment for cyclone season
                    </li>
                    <li>
                      <strong>Business continuity:</strong> Backup power for
                      essential business operations
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="training-certification"
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
                  Do you provide operator training?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  <p className="mb-3">
                    Yes, comprehensive operator training is included with every
                    rental. Our certified technicians provide hands-on training
                    covering safe operation, emergency procedures, and basic
                    maintenance.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Training includes:</strong> Safety procedures •
                    Operating instructions • Emergency shutdown • Basic
                    troubleshooting • Fuel management • Noise control measures
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="warranty-coverage"
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
                  What warranty coverage do you provide?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  <p className="mb-3">
                    All our generators come with comprehensive warranty
                    coverage. Equipment is regularly serviced and maintained to
                    manufacturer standards. We provide immediate replacement or
                    repair for any issues.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Warranty details:</strong> Equipment warranty •
                    Breakdown coverage • Wear and tear protection • Extended
                    warranty options • Manufacturer warranties honored
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
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
              Get reliable generator rental in Brisbane today with
              lightning-fast service.
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
      </main>

      <Footer />
    </div>
  );
}
