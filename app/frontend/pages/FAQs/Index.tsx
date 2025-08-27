import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Phone,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";

interface Faq {
  id: number;
  question: string;
  answer: string;
  position: number;
  published: boolean;
}

interface FaqsIndexProps {
  faqs: Faq[];
}

const Index: React.FC<FaqsIndexProps> = ({ faqs }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      <Header />

      <main className="w-full">
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          {/* Hero Section */}
          <section className="relative pt-16 pb-24 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div
                  className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  <HelpCircle className="w-4 h-4" />
                  Frequently Asked Questions
                </div>

                <h1
                  className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Got Questions?
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    We've Got Answers
                  </span>
                </h1>

                <p
                  className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  Find answers to common questions about our generator rental services,
                  pricing, delivery, and more.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {faqs && faqs.length > 0 ? (
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={faq.id}
                      className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                      data-aos="fade-up"
                      data-aos-delay={200 + (index * 100)}
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transform transition-transform flex-shrink-0 ${
                            openFaq === faq.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {openFaq === faq.id && (
                        <div className="px-6 pb-4 border-t border-gray-100">
                          <div
                            className="pt-4 text-gray-600 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className="text-center py-12"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No FAQs Available
                  </h3>
                  <p className="text-gray-600">
                    We're working on adding frequently asked questions. Please check back later or contact us directly.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Our team is here to help with any questions about our generator rental services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+61412345678"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call +61 412 345 678
                </a>
                <a
                  href="#quote-form"
                  className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Equipment Quote
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
