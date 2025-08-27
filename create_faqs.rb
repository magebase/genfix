#!/usr/bin/env ruby

require_relative 'config/environment'

puts "Creating sample FAQs..."

faqs_data = [
  {
    question: "What types of generators do you offer?",
    answer: "<p>We offer three main generator options to suit different power requirements:</p><ul><li><strong>Portable Generators (5 kVA):</strong> Perfect for small construction sites, events, and basic power needs</li><li><strong>Standby Generators (10 kVA):</strong> Ideal for medium-sized projects and backup power</li><li><strong>Mobile Generators (15 kVA):</strong> Heavy-duty solutions for large construction sites and industrial applications</li></ul><p>All our generators are regularly maintained and come with 24/7 support.</p>",
    position: 1,
    published: true
  },
  {
    question: "How do I determine what size generator I need?",
    answer: "<p>Generator sizing depends on your power requirements. Here's how to calculate:</p><ol><li><strong>List your equipment:</strong> Make a list of all tools and equipment you'll be powering</li><li><strong>Check power ratings:</strong> Note the wattage requirements for each item</li><li><strong>Calculate total load:</strong> Add up all the wattage requirements</li><li><strong>Factor in starting surge:</strong> Most equipment needs extra power to start up</li></ol><p>Our team can help you calculate the exact kVA rating you need. Contact us for a free assessment.</p>",
    position: 2,
    published: true
  },
  {
    question: "What is included in the rental price?",
    answer: "<p>Our rental packages include:</p><ul><li><strong>Generator unit:</strong> Fully maintained and tested</li><li><strong>Delivery and setup:</strong> Professional installation at your site</li><li><strong>Fuel:</strong> Initial fuel fill (additional fuel available)</li><li><strong>Basic training:</strong> Instruction on safe operation</li><li><strong>24/7 support:</strong> Technical assistance whenever needed</li></ul><p>Optional add-ons include extended fuel delivery, weather protection covers, and extended warranty.</p>",
    position: 3,
    published: true
  },
  {
    question: "How far in advance do I need to book?",
    answer: "<p>Booking requirements vary by season and generator availability:</p><ul><li><strong>Standard booking:</strong> 48 hours notice for most generators</li><li><strong>Peak season:</strong> 1-2 weeks advance booking recommended (December-February)</li><li><strong>Emergency situations:</strong> Same-day delivery available for urgent requirements</li><li><strong>Long-term rentals:</strong> Monthly bookings can be arranged with special rates</li></ul><p>We recommend booking as early as possible to ensure availability, especially during busy construction periods.</p>",
    position: 4,
    published: true
  },
  {
    question: "Do you provide delivery and setup services?",
    answer: "<p>Yes, we provide comprehensive delivery and setup services across Brisbane:</p><ul><li><strong>Professional delivery:</strong> Our trained technicians deliver and install your generator</li><li><strong>Site assessment:</strong> We evaluate your location for proper placement and safety</li><li><strong>Setup and testing:</strong> Complete installation including electrical connections and testing</li><li><strong>Removal service:</strong> We collect the generator when your rental period ends</li></ul><p>All deliveries include a site inspection to ensure safe and efficient operation.</p>",
    position: 5,
    published: true
  },
  {
    question: "What safety measures do you have in place?",
    answer: "<p>Safety is our top priority. All our generators include:</p><ul><li><strong>Automatic shutdown systems:</strong> Protection against low oil, overheating, and overload</li><li><strong>Weather protection:</strong> Covers and enclosures for outdoor use</li><li><strong>Grounding equipment:</strong> Proper electrical grounding for safety</li><li><strong>Emergency stop buttons:</strong> Easily accessible shutoff switches</li><li><strong>Regular inspections:</strong> All equipment is safety-tested before each rental</li></ul><p>Our technicians provide safety training and are available 24/7 for any concerns.</p>",
    position: 6,
    published: true
  },
  {
    question: "What if the generator breaks down during rental?",
    answer: "<p>We provide comprehensive breakdown support:</p><ul><li><strong>24/7 emergency response:</strong> Our technicians are available around the clock</li><li><strong>Replacement service:</strong> If repair isn't possible, we provide a replacement unit</li><li><strong>No extra charges:</strong> Breakdown support is included in your rental</li><li><strong>Priority service:</strong> Emergency repairs are prioritized for minimal downtime</li></ul><p>We maintain a fleet of backup generators specifically for emergency replacements.</p>",
    position: 7,
    published: true
  },
  {
    question: "Can I extend my rental period?",
    answer: "<p>Yes, rental extensions are available:</p><ul><li><strong>Short extensions:</strong> Same-day extensions available in most cases</li><li><strong>Long extensions:</strong> Extended rentals qualify for discounted rates</li><li><strong>Flexible terms:</strong> We work with your schedule and requirements</li><li><strong>Easy process:</strong> Simple phone call or email to extend your rental</li></ul><p>Contact us as soon as you know you'll need extra time to ensure continued availability.</p>",
    position: 8,
    published: true
  }
]

faqs_data.each do |faq_data|
  faq = Faq.find_or_create_by!(question: faq_data[:question]) do |f|
    f.answer = faq_data[:answer]
    f.position = faq_data[:position]
    f.published = faq_data[:published]
  end
  puts "Created FAQ: #{faq.question}"
end

puts "Successfully created #{faqs_data.size} sample FAQs!"
