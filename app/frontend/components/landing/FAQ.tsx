import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function FAQ() {
  return (
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
                availability and location. We offer flexible scheduling to meet
                your project timelines.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Emergency service:</strong> 2-hour emergency response
                available for critical situations.
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
                generator, basic electrical work, and ensuring safe operation.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Note:</strong> Advanced electrical work or permanent
                installations may require a licensed electrician at additional
                cost.
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
                We service all Brisbane suburbs and surrounding areas including
                the CBD, Northside, Southside, West Brisbane, and Ipswich
                region. Contact us for delivery to regional Queensland.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Extended areas:</strong> Additional fees may apply for
                deliveries outside the Brisbane metropolitan area.
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
                Yes, all our equipment is fully insured and regularly maintained
                with detailed service records available. We carry comprehensive
                insurance coverage for equipment damage, theft, and operational
                incidents.
              </p>
              <p className="text-sm text-gray-500">
                <strong>$20 million public liability insurance</strong> covers
                any incidents during rental periods.
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
                We offer a comprehensive range of generators to suit every power
                requirement:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Portable 5-15 kVA:</strong> Perfect for small tools,
                  lighting, and temporary power
                </li>
                <li>
                  <strong>Standby 20-50 kVA:</strong> Ideal for larger sites,
                  events, and backup power
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
                service, or you can arrange your own fuel supply. Our generators
                are designed for easy refueling, and we can set up automatic
                fuel systems for longer rentals.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Fuel options:</strong> Diesel fuel delivery available •
                Self-service refueling • Automatic fuel systems for extended use
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
                Our generators are designed with noise reduction in mind. Most
                models operate at 65-75 dB at 7 meters, which is comparable to a
                normal conversation or office environment.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Noise control options:</strong> Acoustic enclosures
                available • Remote installation • Sound-attenuated models for
                residential areas
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
                We provide comprehensive maintenance and 24/7 support including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Regular servicing:</strong> All equipment is serviced
                  before each rental
                </li>
                <li>
                  <strong>On-site support:</strong> Technicians available for
                  troubleshooting and repairs
                </li>
                <li>
                  <strong>Emergency response:</strong> 24/7 emergency breakdown
                  service
                </li>
                <li>
                  <strong>Remote monitoring:</strong> Optional remote monitoring
                  and alerting systems
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
                Our pricing is transparent with no hidden fees. Rates depend on
                generator size, rental duration, and additional services
                required. We offer competitive daily, weekly, and monthly rates.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Included in rental:</strong> Delivery • Setup • Basic
                operator training • 24/7 support
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
                Our team can help you calculate your power requirements based on
                your equipment and usage. We consider starting power (surge)
                requirements and running power needs to recommend the right
                size.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Power calculation factors:</strong> Equipment wattage •
                Starting surge requirements • Power factor • Future expansion
                needs • Environmental conditions
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
                Depending on your location and intended use, you may need local
                council approval or permits. We can assist with the application
                process and provide documentation to support your permit
                application.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Permit assistance:</strong> Council application support
                • Noise level documentation • Environmental impact assessments •
                Temporary use approvals
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
                Our generators are designed for outdoor use but have limitations
                in extreme weather. We provide weather protection options and
                can advise on suitable operating conditions.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Weather considerations:</strong> Rain protection covers
                • Temperature operating ranges • Wind protection • Humidity
                considerations • Extreme weather protocols
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
                  <strong>24/7 emergency response:</strong> Rapid deployment for
                  power outages
                </li>
                <li>
                  <strong>Disaster preparedness:</strong> Pre-arranged emergency
                  power plans
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
                All our generators come with comprehensive warranty coverage.
                Equipment is regularly serviced and maintained to manufacturer
                standards. We provide immediate replacement or repair for any
                issues.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Warranty details:</strong> Equipment warranty •
                Breakdown coverage • Wear and tear protection • Extended
                warranty options • Manufacturer warranties honored
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="power-outage-planning"
            className="bg-white border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
              How can I prepare for power outages with your generators?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-6">
              <p className="mb-4">
                We offer comprehensive power outage planning services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Load assessment:</strong> Complete analysis of your
                  power requirements
                </li>
                <li>
                  <strong>Backup power design:</strong> Custom solutions for
                  your specific needs
                </li>
                <li>
                  <strong>Automatic transfer switches:</strong> Seamless
                  transition to backup power
                </li>
                <li>
                  <strong>Priority load scheduling:</strong> Essential equipment
                  prioritization
                </li>
                <li>
                  <strong>Maintenance programs:</strong> Regular servicing to
                  ensure reliability
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">
                <strong>Pro tip:</strong> Emergency planning saves time and
                money when power outages occur.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="environmental-impact"
            className="bg-white border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
              What is the environmental impact of diesel generators?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-6">
              <p className="mb-4">
                While diesel generators do produce emissions, we minimize
                environmental impact through:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Efficient engines:</strong> Modern low-emission diesel
                  engines
                </li>
                <li>
                  <strong>Proper maintenance:</strong> Regular servicing to
                  maintain efficiency
                </li>
                <li>
                  <strong>Alternative fuels:</strong> Biodiesel options
                  available
                </li>
                <li>
                  <strong>Noise reduction:</strong> Acoustic enclosures to
                  minimize disturbance
                </li>
                <li>
                  <strong>Smart usage:</strong> Load management to optimize fuel
                  consumption
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">
                <strong>Environmental commitment:</strong> We comply with all
                Queensland environmental regulations and offer eco-friendly
                alternatives where possible.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="long-term-rental"
            className="bg-white border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
              Do you offer long-term rental agreements?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-6">
              <p className="mb-3">
                Yes, we provide flexible long-term rental options for extended
                projects, seasonal requirements, or ongoing backup power needs.
                Long-term rentals qualify for significant discounts.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Long-term benefits:</strong> Reduced daily rates •
                Priority scheduling • Dedicated equipment • Extended support
                hours • Customized maintenance programs
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="equipment-availability"
            className="bg-white border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
              How do I check equipment availability?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-6">
              <p className="mb-3">
                You can check real-time availability by calling our office,
                submitting a quote request, or checking our online booking
                system. We maintain a diverse fleet to ensure availability for
                most requirements.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Availability factors:</strong> Equipment type • Rental
                duration • Delivery location • Seasonal demand • Maintenance
                schedules
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="cancellation-policy"
            className="bg-white border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
              What is your cancellation policy?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-6">
              <p className="mb-4">
                Our cancellation policy is designed to be fair and flexible:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>24+ hours notice:</strong> Full refund for
                  cancellations
                </li>
                <li>
                  <strong>12-24 hours notice:</strong> 50% refund
                </li>
                <li>
                  <strong>&lt;12 hours notice:</strong> No refund (equipment
                  allocated)
                </li>
                <li>
                  <strong>Emergency situations:</strong> Case-by-case
                  consideration
                </li>
                <li>
                  <strong>Weather-related:</strong> Flexible rescheduling
                  options
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">
                <strong>Note:</strong> Early booking is encouraged to secure
                your preferred equipment and dates.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="safety-certifications"
            className="bg-white border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
              What safety certifications do your generators have?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-6">
              <p className="mb-4">
                All our generators meet or exceed Australian safety standards:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>AS 2067:</strong> Australian Standard for Substations
                  and High Voltage Installations
                </li>
                <li>
                  <strong>AS/NZS 4871:</strong> Electrical equipment for mines
                  and quarries
                </li>
                <li>
                  <strong>AS 3000:</strong> Wiring Rules (where applicable)
                </li>
                <li>
                  <strong>CE marking:</strong> European safety standards
                </li>
                <li>
                  <strong>RCM marking:</strong> Regulatory Compliance Mark
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">
                <strong>Safety first:</strong> All equipment undergoes regular
                safety inspections and maintenance.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="remote-monitoring"
            className="bg-white border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
              Do you offer remote monitoring services?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-6">
              <p className="mb-3">
                Yes, we provide advanced remote monitoring solutions for
                long-term rentals and critical applications. This service allows
                real-time tracking of generator performance and automatic alerts
                for maintenance needs.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Monitoring features:</strong> Performance data • Fuel
                level alerts • Maintenance reminders • Fault detection • Usage
                analytics • Mobile app access
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="competitive-advantages"
            className="bg-white border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
              What makes Genfix different from other generator rental companies?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-6">
              <p className="mb-4">
                Several factors set us apart from the competition:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Local expertise:</strong> Deep knowledge of Brisbane
                  conditions and regulations
                </li>
                <li>
                  <strong>Licensed technicians:</strong> Qualified electrical
                  professionals for all installations
                </li>
                <li>
                  <strong>Comprehensive fleet:</strong> Wide range of equipment
                  sizes and types
                </li>
                <li>
                  <strong>24/7 support:</strong> Round-the-clock emergency
                  response
                </li>
                <li>
                  <strong>Transparent pricing:</strong> No hidden fees or
                  surprise charges
                </li>
                <li>
                  <strong>Quality equipment:</strong> Well-maintained generators
                  from reputable manufacturers
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">
                <strong>Our promise:</strong> Reliable power when you need it,
                backed by local expertise and genuine care for your business.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="payment-options"
            className="bg-white border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
              What payment options do you accept?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-6">
              <p className="mb-3">
                We offer flexible payment options to suit your business needs.
                All payments are secure and processed through trusted financial
                institutions.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Payment methods:</strong> Bank transfer • Credit card •
                Direct debit • PayPal • Afterpay (for approved customers) •
                Invoice terms available for regular clients
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="equipment-transport"
            className="bg-white border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
              How is equipment transported and secured?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-6">
              <p className="mb-4">
                We use specialized transport vehicles designed for generator
                equipment:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Dedicated trucks:</strong> Purpose-built vehicles with
                  secure loading systems
                </li>
                <li>
                  <strong>Experienced drivers:</strong> Trained professionals
                  familiar with equipment handling
                </li>
                <li>
                  <strong>Secure transport:</strong> Equipment properly
                  restrained and protected during transit
                </li>
                <li>
                  <strong>Insurance coverage:</strong> Full transit insurance
                  for all equipment
                </li>
                <li>
                  <strong>Tracking systems:</strong> GPS tracking for valuable
                  equipment
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">
                <strong>Safety priority:</strong> All transport operations
                follow strict safety protocols and regulations.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="business-hours"
            className="bg-white border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
              What are your business hours and emergency contact?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-6">
              <p className="mb-4">We're here when you need us most:</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Office hours:</strong> Monday to Friday 7:00 AM - 5:00
                  PM
                </li>
                <li>
                  <strong>Emergency line:</strong> 24/7 emergency support
                  available
                </li>
                <li>
                  <strong>After-hours contact:</strong> Dedicated emergency
                  response team
                </li>
                <li>
                  <strong>Response time:</strong> Within 1 hour for emergencies
                </li>
                <li>
                  <strong>Weekend support:</strong> Full service available on
                  weekends
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">
                <strong>Emergency number:</strong> +61 412 345 678 (available
                24/7)
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
