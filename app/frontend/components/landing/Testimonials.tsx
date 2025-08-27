import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function Testimonials() {
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
                    "Reliable equipment and transparent pricing. Will definitely
                    use again for our events. The team was very helpful!"
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
                    "Excellent emergency backup power solution. Quick response
                    time and well-maintained equipment. Highly recommended!"
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
                    "Outstanding service! The generators arrived exactly when
                    promised and the pricing was very competitive. Great company
                    to work with."
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
  );
}
