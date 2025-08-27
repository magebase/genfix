import { Zap, Shield } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function Equipment() {
  return (
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
  );
}
