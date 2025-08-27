# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Create sample blog posts
blog_posts = [
  {
    title: "The Ultimate Guide to Generator Hire for Construction Sites",
    content: "<h2>Why Construction Sites Need Reliable Power</h2><p>Construction sites require consistent, reliable power for tools, lighting, and equipment. Without proper generator hire, projects can face costly delays and safety issues.</p><h2>Choosing the Right Generator Size</h2><p>The size of your generator depends on your power requirements. Our team helps you calculate the exact kVA needed for your specific equipment.</p><h2>Benefits of Professional Generator Hire</h2><ul><li>24/7 maintenance and support</li><li>Fuel delivery service</li><li>Emergency response team</li><li>Competitive pricing</li></ul>",
    excerpt: "Learn everything you need to know about hiring generators for construction sites, from sizing to maintenance.",
    published: true,
    author_name: "Sarah Mitchell",
    author_title: "Senior Generator Specialist",
    author_profile_picture: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    title: "Emergency Power Solutions: Be Prepared for Power Outages",
    content: "<h2>Common Causes of Power Outages</h2><p>Power outages can occur due to storms, equipment failure, or planned maintenance. Being prepared ensures your business continues operating smoothly.</p><h2>Types of Emergency Generators</h2><p>We offer portable, standby, and mobile generators to suit different emergency scenarios and power requirements.</p><h2>Why Choose Our Emergency Services</h2><p>Our emergency response team is available 24/7, with generators delivered within 1 hour of your call.</p>",
    excerpt: "Discover how to protect your business from power outages with our comprehensive emergency generator solutions.",
    published: true,
    author_name: "Mike Johnson",
    author_title: "Emergency Response Manager",
    author_profile_picture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    title: "Generator Maintenance: Keep Your Equipment Running Smoothly",
    content: "<h2>Importance of Regular Maintenance</h2><p>Regular generator maintenance prevents breakdowns and extends equipment lifespan. Our certified technicians perform comprehensive inspections.</p><h2>Maintenance Checklist</h2><ul><li>Oil and filter changes</li><li>Fuel system cleaning</li><li>Battery testing</li><li>Load bank testing</li><li>Control panel inspection</li></ul><h2>Scheduled Maintenance Plans</h2><p>We offer flexible maintenance plans tailored to your usage patterns and requirements.</p>",
    excerpt: "Learn about the importance of generator maintenance and how our service keeps your equipment in top condition.",
    published: true,
    author_name: "David Chen",
    author_title: "Lead Technician",
    author_profile_picture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }
]

# Create blog posts
blog_posts.each do |post_data|
  BlogPost.find_or_create_by!(title: post_data[:title]) do |post|
    post.content = post_data[:content]
    post.excerpt = post_data[:excerpt]
    post.published = post_data[:published]
    post.author_name = post_data[:author_name]
    post.author_title = post_data[:author_title]
    post.author_profile_picture = post_data[:author_profile_picture]
  end
end

blog_posts.each do |post_data|
  BlogPost.find_or_create_by!(title: post_data[:title]) do |post|
    post.content = post_data[:content]
    post.excerpt = post_data[:excerpt]
    post.published = post_data[:published]
    post.published_at = Time.current if post_data[:published]
  end
end

puts "Created #{blog_posts.size} sample blog posts"

# Create sample equipment
equipment_data = [
  {
    name: "Portable 5kVA Generator",
    description: "Perfect for small construction sites, lighting setups, and basic power needs. This compact generator delivers reliable power for tools, lights, and small equipment. Features include electric start, fuel-efficient operation, and quiet performance.",
    kva_rating: 5,
    category: "Portable",
    price_per_day: 85.00,
    features: ["Electric Start", "Fuel Efficient", "Quiet Operation", "Wheel Kit", "Multiple Outlets", "Low Oil Shutdown"],
    image_url: "/images/generator-maintenance.jpg",
    is_available: true
  },
  {
    name: "Standby 10kVA Generator",
    description: "Ideal for medium-sized construction projects, events, and backup power. This robust generator provides consistent power for multiple tools, lighting systems, and equipment. Built for reliability with advanced safety features.",
    kva_rating: 10,
    category: "Standby",
    price_per_day: 145.00,
    features: ["Auto Start", "Weather Protection", "Fuel Tank Gauge", "Circuit Breaker Protection", "Remote Monitoring", "Extended Runtime"],
    image_url: "/images/generator-maintenance.jpg",
    is_available: true
  },
  {
    name: "Mobile 15kVA Generator",
    description: "Heavy-duty generator perfect for large construction sites, industrial applications, and major events. This powerhouse delivers the performance you need for demanding equipment and multiple power requirements.",
    kva_rating: 15,
    category: "Mobile",
    price_per_day: 220.00,
    features: ["Heavy-Duty Construction", "Large Fuel Capacity", "Multiple Voltage Outputs", "Phase Selection", "Load Management", "Industrial Grade"],
    image_url: "/images/generator-maintenance.jpg",
    is_available: true
  }
]

# Create equipment
equipment_data.each do |equipment|
  Equipment.find_or_create_by!(name: equipment[:name]) do |eq|
    eq.description = equipment[:description]
    eq.kva_rating = equipment[:kva_rating]
    eq.category = equipment[:category]
    eq.price_per_day = equipment[:price_per_day]
    eq.features = equipment[:features]
    eq.image_url = equipment[:image_url]
    eq.is_available = equipment[:is_available]
  end
end

puts "Created #{equipment_data.size} sample equipment items"

# Create sample FAQs
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

# Create FAQs
faqs_data.each do |faq_data|
  Faq.find_or_create_by!(question: faq_data[:question]) do |faq|
    faq.answer = faq_data[:answer]
    faq.position = faq_data[:position]
    faq.published = faq_data[:published]
  end
end

puts "Created #{faqs_data.size} sample FAQs"

# Create default admin user

# Create sample FAQs
faq_data = [
  {
    question: "What types of generators do you offer?",
    answer: "<p>We offer three main generator options to suit different power requirements:</p><ul><li><strong>Portable Generators (5 kVA):</strong> Perfect for small construction sites, events, and emergency backup power</li><li><strong>Standby Generators (10 kVA):</strong> Ideal for medium-sized operations requiring reliable backup power</li><li><strong>Mobile Generators (15 kVA):</strong> Heavy-duty solutions for large construction sites and industrial applications</li></ul><p>All our generators are professionally maintained and come with 24/7 support.</p>",
    position: 1,
    published: true
  },
  {
    question: "How quickly can you deliver a generator?",
    answer: "<p>We understand that timing is critical for your operations. Our delivery options include:</p><ul><li><strong>Same-day delivery:</strong> Available for generators in Brisbane metropolitan area (conditions apply)</li><li><strong>Next-day delivery:</strong> For all locations within 100km of Brisbane</li><li><strong>Emergency delivery:</strong> Within 1 hour for critical situations (additional charges apply)</li></ul><p>All deliveries include setup, safety briefing, and initial fuel fill. Our team will ensure your generator is ready to use upon arrival.</p>",
    position: 2,
    published: true
  },
  {
    question: "Do you provide fuel and maintenance?",
    answer: "<p>Yes, we offer comprehensive support services:</p><h4>Fuel Services:</h4><ul><li>Regular fuel delivery to your site</li><li>Fuel monitoring and replenishment</li><li>Emergency fuel reserves</li></ul><h4>Maintenance Services:</h4><ul><li>Regular scheduled maintenance</li><li>24/7 breakdown response</li><li>Preventive maintenance programs</li><li>Full service records and compliance certificates</li></ul><p>All maintenance is performed by certified technicians using genuine parts.</p>",
    position: 3,
    published: true
  },
  {
    question: "What are your payment terms?",
    answer: "<p>We offer flexible payment options to suit your business needs:</p><h4>Payment Methods:</h4><ul><li>Credit card (Visa, Mastercard)</li><li>Bank transfer</li><li>Direct debit for recurring rentals</li></ul><h4>Payment Terms:</h4><ul><li>Deposit required for all rentals (varies by equipment)</li><li>Balance due on delivery or weekly/monthly for longer rentals</li><li>Late payment fees apply after due date</li><li>Early payment discounts available for extended rentals</li></ul><p>Contact our team for a customized quote with payment options that work for your business.</p>",
    position: 4,
    published: true
  },
  {
    question: "What safety measures do you have in place?",
    answer: "<p>Safety is our top priority. All our generators and services include:</p><h4>Equipment Safety:</h4><ul><li>Automatic shutdown systems for low oil, overheating, and overload</li><li>Weather-protected enclosures for outdoor use</li><li>Ground fault circuit interrupters (GFCI)</li><li>Emergency stop buttons and remote shutdown capability</li></ul><h4>Operational Safety:</h4><ul><li>Comprehensive safety briefing for all operators</li><li>24/7 emergency response team</li><li>Regular safety inspections and maintenance</li><li>Compliance with all Australian safety standards</li></ul><p>Our team provides full safety training and ensures all equipment meets workplace safety requirements.</p>",
    position: 5,
    published: true
  },
  {
    question: "Can I hire generators for long-term projects?",
    answer: "<p>Absolutely! We specialize in long-term generator rentals for:</p><ul><li>Major construction projects</li><li>Mining operations</li><li>Event management</li><li>Temporary facility power</li><li>Disaster recovery operations</li></ul><h4>Long-term Benefits:</h4><ul><li>Discounted rates for extended rentals (3+ months)</li><li>Dedicated account management</li><li>Priority delivery and maintenance scheduling</li><li>Custom maintenance programs</li><li>Flexible payment terms</li></ul><p>Contact us to discuss your long-term power requirements and receive a customized proposal.</p>",
    position: 6,
    published: true
  }
]

# Create FAQs
faq_data.each do |faq|
  Faq.find_or_create_by!(question: faq[:question]) do |f|
    f.answer = faq[:answer]
    f.position = faq[:position]
    f.published = faq[:published]
  end
end

puts "Created #{faq_data.size} sample FAQs"

# Create default admin user
if AdminUser.find_by(email: 'admin@genfix.com').nil?
  AdminUser.create!(
    email: 'admin@genfix.com',
    password: 'password123',
    password_confirmation: 'password123'
  )
  puts "Created default admin user: admin@genfix.com / password123"
else
  puts "Admin user already exists"
end
