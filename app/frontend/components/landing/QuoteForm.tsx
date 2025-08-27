import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { router, usePage } from "@inertiajs/react";
import { toast } from "sonner";
import {
  Zap,
  Shield,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  User,
  MapPin,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Form validation schema
const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  equipment_type: z.string().optional(),
  rental_duration: z.string().optional(),
  delivery_address: z
    .string()
    .min(5, "Please enter a complete delivery address"),
  special_requirements: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const page = usePage();
  const pageProps = page.props as any;

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      equipment_type: "",
      rental_duration: "",
      delivery_address: "",
      special_requirements: "",
    },
  });

  // Check local storage and server-side props on component mount
  useEffect(() => {
    // Check if form was previously submitted (from localStorage)
    const storedSubmission = localStorage.getItem("quote_form_submitted");
    if (storedSubmission) {
      setSubmitted(true);
      toast.success("Quote request submitted successfully!", {
        description: "Our team will call you within the next hour.",
        duration: 5000,
      });
    }

    // Check for server-side props (new submission)
    if (pageProps.quote_submitted) {
      setSubmitted(true);
      // Store submission state in localStorage
      const submissionData = {
        submitted: true,
        timestamp: new Date().toISOString(),
        quoteRequest: pageProps.quote_request,
      };
      localStorage.setItem(
        "quote_form_submitted",
        JSON.stringify(submissionData)
      );

      toast.success("Quote request submitted successfully!", {
        description: "Our team will call you within the next hour.",
        duration: 5000,
      });
    }

    if (pageProps.quote_errors) {
      pageProps.quote_errors.forEach((error: string) => {
        toast.error("Form submission failed", {
          description: error,
        });
      });
    }
  }, [pageProps]);

  const getCompletedFieldsCount = () => {
    const values = form.getValues();
    const requiredFields = ["name", "email", "phone", "delivery_address"];
    return requiredFields.filter(
      (field) => values[field as keyof QuoteFormData]?.toString().trim() !== ""
    ).length;
  };

  const onSubmit = async (data: QuoteFormData) => {
    if (isSubmitting) return; // Prevent double submission

    setIsSubmitting(true);

    try {
      console.log("Starting form submission...");
      console.log("Form data:", data);

      // Convert dates to ISO strings for Rails
      const submissionData = {
        ...data,
      };

      console.log("Submission data:", submissionData);

      await router.post(
        "/quote_requests",
        {
          quote_request: submissionData,
        },
        {
          // Prevent any default redirect behavior
          preserveState: true,
          preserveScroll: true,
          replace: false,
          only: [], // Don't replace the current page
          onSuccess: (page) => {
            console.log("Form submitted successfully, page props:", page.props);
            // Success is handled in useEffect via page props
          },
          onError: (errors) => {
            console.error("Form submission error:", errors);
            setIsSubmitting(false);
          },
        }
      );
      console.log("Form submission completed");
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    form.reset();
    setSubmitted(false);
    // Clear the submission state from localStorage
    localStorage.removeItem("quote_form_submitted");
  };

  return (
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
            Join 500+ Brisbane businesses who trust Genfix for reliable power.
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
          data-aos-delay="1000"
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
                      <li>• Receive a customized quote with no obligation</li>
                      <li>• Schedule delivery if you decide to proceed</li>
                    </ul>
                  </div>
                  <Button
                    onClick={resetForm}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    data-aos="fade-up"
                    data-aos-delay="1200"
                  >
                    Request Another Quote
                  </Button>
                </div>
              ) : (
                <>
                  <Form {...form}>
                    <div className="space-y-8">
                      {/* Progress indicator */}
                      {/* Progress indicator */}
                      <div
                        className="mb-8"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-semibold text-gray-700">
                            Quote Progress
                          </span>
                          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            {getCompletedFieldsCount()}/4 completed
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
                            style={{
                              width: `${
                                (getCompletedFieldsCount() / 4) * 100
                              }%`,
                            }}
                          ></div>
                        </div>
                      </div>
                      {/* Social proof */}
                      <div
                        className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4 mb-8"
                        data-aos="fade-up"
                        data-aos-delay="600"
                      >
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
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Form fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                  <Input
                                    placeholder="Your full name"
                                    className="pl-12"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                  <Input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="pl-12"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                  <Input
                                    type="tel"
                                    placeholder="+61 XXX XXX XXX"
                                    className="pl-12"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="delivery_address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Delivery Address *</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                  <Input
                                    placeholder="Street address, suburb, Brisbane QLD"
                                    className="pl-12"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Equipment type and rental duration on same line */}
                        <FormField
                          control={form.control}
                          name="equipment_type"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Equipment Type</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="flex w-full">
                                    <SelectValue placeholder="Select equipment type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="portable-5kva">
                                    🚀 Portable 5 kVA - Small tools & lighting
                                  </SelectItem>
                                  <SelectItem value="standby-10kva">
                                    🏗️ Standby 10 kVA - Construction & events
                                  </SelectItem>
                                  <SelectItem value="mobile-15kva">
                                    🏭 Mobile 15 kVA - Large events & industrial
                                  </SelectItem>
                                  <SelectItem value="other">
                                    ❓ Other - please specify below
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Rental Duration */}
                        <FormField
                          control={form.control}
                          name="rental_duration"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Rental Duration</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="flex w-full">
                                    <SelectValue
                                      placeholder="Select rental duration"
                                      className="flex w-full"
                                    />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1-day">
                                    ⏰ 1 Day
                                  </SelectItem>
                                  <SelectItem value="3-days">
                                    � 3 Days
                                  </SelectItem>
                                  <SelectItem value="1-week">
                                    � 1 Week
                                  </SelectItem>
                                  <SelectItem value="2-weeks">
                                    � 2 Weeks
                                  </SelectItem>
                                  <SelectItem value="1-month">
                                    � 1 Month
                                  </SelectItem>
                                  <SelectItem value="other">
                                    ❓ Other - please specify below
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>{" "}
                      <FormField
                        control={form.control}
                        name="special_requirements"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Special Requirements</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Any special requirements, setup needs, fuel arrangements, or additional information..."
                                className="resize-none"
                                rows={4}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {/* Guarantee section */}
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
                        <div className="flex items-start gap-3">
                          <Shield className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Our 100% Satisfaction Guarantee
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>
                                ✅ Response within 1 hour or your quote is FREE
                              </li>
                              <li>
                                ✅ Transparent pricing with no hidden fees
                              </li>
                              <li>
                                ✅ Professional setup by licensed electricians
                              </li>
                              <li>
                                ✅ 24/7 support throughout your rental period
                              </li>
                              <li>
                                ✅ Full insurance coverage for peace of mind
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="text-center pt-6">
                        <Button
                          onClick={form.handleSubmit(onSubmit)}
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
                        </Button>

                        <div className="mt-6 space-y-2">
                          <p className="text-sm text-gray-500">
                            ⚡ <strong>No commitment required</strong> • 📞
                            Response within 1 hour • 🚚 Same-day delivery
                            available
                          </p>
                          <p className="text-xs text-gray-400">
                            By submitting this form, you agree to receive a call
                            from our power specialists. Your information is
                            secure and will never be shared with third parties.
                          </p>
                        </div>

                        {/* Call to action alternative */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <p className="text-gray-600 mb-4">
                            Prefer to speak directly?
                          </p>
                          <a
                            href="tel:+61412345678"
                            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                          >
                            <Phone className="w-5 h-5" />
                            Call +61 412 345 678
                          </a>
                        </div>
                      </div>
                    </div>
                  </Form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
