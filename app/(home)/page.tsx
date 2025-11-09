import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import ImageCarousel from '../components/ImageCarousel'
import TitleHead from '../components/TitleHead'
import Footer from '../components/Footer'
import { CAROUSEL_DATA, SERVICES_DATA } from '../config/constants'

// Structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TALC Limited',
  alternateName: 'Time and Life Communications Limited',
  description:
    'Advanced telecommunications and digital infrastructure solutions including two-way radio communication, PABX systems, LAN installation, security systems, and tower services across Nigeria.',
  url: 'https://talclimited.com',
  logo: 'https://talclimited.com/img/TLC LOGO.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+2348033062445',
    contactType: 'customer service',
    email: 'info@talclimited.com',
    availableLanguage: ['English'],
    areaServed: 'NG',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lagos',
    addressRegion: 'Lagos State',
    addressCountry: 'NG',
  },
  foundingDate: '1994',
  areaServed: {
    '@type': 'Country',
    name: 'Nigeria',
  },
  sameAs: [
    // Add your social media profiles here when available
    // 'https://www.facebook.com/tlclimited',
    // 'https://www.linkedin.com/company/tlclimited',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '50',
  },
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
      <section
        id="home"
        className="min-h-screen relative overflow-hidden flex items-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.ibb.co/8gbXX5BJ/Tfc-Background-image.png"
            alt="TFC Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            unoptimized
          />
        </div>
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <div className="relative z-10 max-w-7xl px-4 sm:px-6 md:px-10 xl:px-30 flex items-center justify-start min-h-screen py-20">
          {/* Main Content */}
          <div className="max-w-3xl text-white space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-cyan-600/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              <span className="text-cyan-200">
                Reliable Communication. Proven Performance.
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Connecting Excellence <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-brand-green">
                Through Innovation
              </span>
            </h1>

            {/* Subheading */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                Advanced Telecommunications & Digital Infrastructure Solutions
              </p>
              <p className="text-base text-gray-300 max-w-2xl">
                We Connect Your Vision to Reality with Expert Network
                Engineering, Cutting-Edge Technology, and Unmatched Service
                Quality
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#contact"
                className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center"
              >
                Get In Touch
                {/* <ArrowRight className="w-5 h-5 ml-2" /> */}
              </Link>
              <Link
                href="#services"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 bg-cream-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
              About TFC Limited
            </h2>
            <p className="text-xl text-ink-600 max-w-3xl mx-auto">
              Building excellence through innovation, integrity, and unwavering
              commitment to our clients
            </p>
          </div> */}

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            <div className="relative h-full order-2 lg:order-1">
              <div className="relative w-full h-[400px] lg:h-full overflow-hidden">
                <Image
                  src="https://i.ibb.co/wNrYBgRx/tfc-about.jpg"
                  alt="About us image"
                  fill
                  className="object-cover rounded-2xl"
                  unoptimized
                  priority
                />
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <TitleHead item="Our story" />
              <h3 className="text-2xl lg:text-3xl font-bold text-ink-900 mb-4">
                Building excellence through innovation, integrity, and
                unwavering commitment to our clients
              </h3>
              <p className="text-md text-ink-600 leading-relaxed">
                Time and Life Communications Limited is a reputable telecommunications company in Nigeria and has been serving the communications needs of businesses, government agencies, homes, remote locations and industrial sites across the states of Nigeria (+FCT) for over 30 years.
              </p>
              <p className="text-md text-ink-600 leading-relaxed">
                We specialize in reliable, field-proven systems built to perform in harsh, remote, and mission-critical environments. We take pride in our extensive experience and reputable partnerships, allowing us to deliver exceptional telecommunications solutions tailored to our clients&apos; specific requirements.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">500+</div>
                  <div className="text-ink-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">30+</div>
                  <div className="text-ink-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative min-h-screen py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 lg:mb-16">
            <div className="mb-6 lg:mb-0 max-w-3xl">
              <TitleHead item="Our services" />
              <h2 className="text-2xl lg:text-3xl font-bold text-ink-900 mt-4">
                From installation to maintenance, we provide integrated communication systems that keep you connected, securely and efficiently.
              </h2>
            </div>
            <div className="hidden lg:block lg:ml-8">
              <Link
                href="#contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {SERVICES_DATA.map((service, index) => (
              <div key={index} className={`group bg-white sticky top-30 left-0 px-5 md:px-0 md:static`}>
                {/* Service Image */}
                <div className="relative w-full aspect-[4.5/5] mb-4 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    unoptimized
                    priority
                  />
                </div>
                
                {/* Service Title */}
                <h3 className="text-lg font-semibold text-ink-900 mb-2 px-2 md:px-0 group-hover:text-cyan-600 transition-colors duration-200">
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className="text-md px-2 md:px-0 text-ink-600 leading-relaxed">
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
          <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 mb-16'>
          <div className="">
            <TitleHead item="Our projects" />
            <h2 className="text-2xl lg:text-3xl font-bold text-ink-900 mt-4 max-w-3xl">
              Proven Solutions, Real-World Impact
            </h2>
          </div>

          <p className='text-ink-600 max-w-lg'>
          From government installations to private sector deployments, our work reflects over 30 years of consistent delivery and technical excellence.
          </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center',
                alt: 'Network Infrastructure Project'
              },
              {
                image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=600&h=400&fit=crop&crop=center',
                alt: 'Radio Communication Project'
              },
              {
                image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center',
                alt: 'Digital Solutions Project'
              },
              {
                image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&h=400&fit=crop&crop=center',
                alt: 'Field Engineering Project'
              }
            ].map((project, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients & Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Our Clients Carousel */}
      <div className="mb-20">
            <ImageCarousel
              images={CAROUSEL_DATA.clients.images}
              title={CAROUSEL_DATA.clients.title}
              description={CAROUSEL_DATA.clients.description}
              direction="left"
              speed={15}
            />
          </div>

      {/* Authorized Brands Carousel */}
      <div>
            <ImageCarousel
              images={CAROUSEL_DATA.brands.images}
              title={CAROUSEL_DATA.brands.title}
              description={CAROUSEL_DATA.brands.description}
              direction="right"
              speed={7}
            />
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://i.ibb.co/v6qYsSMr/Screenshot-2025-10-26-112646.png"
            alt="Contact us background"
            fill
            className="object-cover"
            priority={false}
            unoptimized
          />
          {/* <div className="absolute inset-0 bg-black/50"></div> */}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-gray-200 font-bold mb-4">
              Get In Touch
            </h2>
            <p className=" text-white max-w-3xl mx-auto">
              Ready to start your next project? Let&apos;s discuss how we can help
              you achieve your goals.
            </p>
          </div>

          {/* Contact Information - Centered on Top */}
          <div className="mb-12">
            <div className="flex flex-row justify-center items-center gap-6 sm:gap-16">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-600/90 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg sm:text-xl">📧</span>
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-white text-sm sm:text-base">
                    Email
                  </h4>
                  <p className="text-gray-200 text-xs sm:text-sm">
                    info@tfclimited.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-600/90 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg sm:text-xl">📞</span>
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-white text-sm sm:text-base">
                    Phone
                  </h4>
                  <p className="text-gray-200 text-xs sm:text-sm">
                    +234 803 306 2445 
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Centered */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}
