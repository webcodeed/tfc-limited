import Image from "next/image";
import Navbar from '../components/Navbar';

// Structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TFC Limited',
  description: 'Professional business consulting, digital solutions, and project management services.',
  url: 'https://tfclimited.com',
  logo: 'https://tfclimited.com/img/TFC LOGO.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'customer service',
    availableLanguage: 'English'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Business Street, Suite 100',
    addressLocality: 'City',
    addressRegion: 'State',
    postalCode: '12345',
    addressCountry: 'US'
  },
  foundingDate: '2014',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '50'
  },
  serviceArea: {
    '@type': 'Country',
    name: 'United States'
  }
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-cyan-600 via-ink-700 to-cyan-800 text-white flex items-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-green-200">
              TFC Limited
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto opacity-90">
            Your trusted partner in innovative business solutions and exceptional service delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#about" 
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/20"
            >
              Learn More About Us
            </a>
            <a 
              href="#services" 
              className="bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-cyan-700 transition-colors duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 bg-cream-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">About TFC Limited</h2>
            <p className="text-xl text-ink-600 max-w-3xl mx-auto">
              Building excellence through innovation, integrity, and unwavering commitment to our clients
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-ink-900 mb-4">
                Our Story
              </h3>
              <p className="text-lg text-ink-600 leading-relaxed">
                TFC Limited has been at the forefront of business innovation for over a decade. 
                We specialize in delivering comprehensive solutions that drive growth and success 
                for businesses of all sizes.
              </p>
              <p className="text-lg text-ink-600 leading-relaxed">
                Our team of dedicated professionals combines industry expertise with cutting-edge 
                technology to provide services that exceed expectations and deliver measurable results.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">500+</div>
                  <div className="text-ink-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">10+</div>
                  <div className="text-ink-600">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-100 to-green-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Image
                      src="/img/TFC LOGO.png"
                      alt="TFC Limited"
                      width={60}
                      height={40}
                      className="filter brightness-0 invert"
                    />
                  </div>
                  <p className="text-ink-600">Excellence in Every Project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">Our Services</h2>
            <p className="text-xl text-ink-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet your unique business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Business Consulting',
                description: 'Strategic guidance to optimize your business operations and drive sustainable growth.',
                icon: '💼'
              },
              {
                title: 'Digital Solutions',
                description: 'Cutting-edge technology solutions to digitize and streamline your business processes.',
                icon: '💻'
              },
              {
                title: 'Project Management',
                description: 'Expert project management services to ensure timely and successful project delivery.',
                icon: '📊'
              },
              {
                title: 'Technical Support',
                description: '24/7 technical support to keep your systems running smoothly and efficiently.',
                icon: '🔧'
              },
              {
                title: 'Training & Development',
                description: 'Comprehensive training programs to enhance your team\'s skills and capabilities.',
                icon: '🎓'
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous quality assurance processes to ensure excellence in every deliverable.',
                icon: '✅'
              }
            ].map((service, index) => (
              <div key={index} className="group bg-cream-50 hover:bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-cream-100 hover:border-cyan-200">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-ink-900 mb-4 group-hover:text-cyan-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-ink-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-ink-600 max-w-3xl mx-auto">
              Showcasing our commitment to excellence through successful project deliveries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Enterprise Digital Transformation',
                category: 'Digital Solutions',
                description: 'Complete digital overhaul for a leading manufacturing company, resulting in 40% efficiency improvement.'
              },
              {
                title: 'Financial Services Platform',
                category: 'Software Development',
                description: 'Secure and scalable financial platform serving over 100,000 users with zero downtime.'
              },
              {
                title: 'Supply Chain Optimization',
                category: 'Business Consulting',
                description: 'Strategic consulting project that reduced operational costs by 25% for a retail chain.'
              },
              {
                title: 'Healthcare Management System',
                category: 'Digital Solutions',
                description: 'Comprehensive healthcare management solution improving patient care and operational efficiency.'
              },
              {
                title: 'E-commerce Marketplace',
                category: 'Web Development',
                description: 'Multi-vendor e-commerce platform with advanced features and seamless user experience.'
              },
              {
                title: 'Data Analytics Dashboard',
                category: 'Analytics',
                description: 'Real-time analytics dashboard providing actionable insights for data-driven decision making.'
              }
            ].map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-cream-100 hover:border-cyan-200">
                <div className="h-48 bg-gradient-to-br from-cyan-500 to-ink-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-ink-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-ink-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-ink-600 max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-ink-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-600 text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-ink-900">Email</h4>
                    <p className="text-ink-600">info@tfclimited.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-600 text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-ink-900">Phone</h4>
                    <p className="text-ink-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-600 text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-ink-900">Address</h4>
                    <p className="text-ink-600">123 Business Street<br />Suite 100, City, State 12345</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-cream-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-ink-900 mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-ink-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
