import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ChevronRight } from 'lucide-react'
import Footer from '../components/Footer'
import TitleHead from '../components/TitleHead'
import NewsletterForm from '../components/NewsletterForm'

// Blog posts data - Edit this array to update blog content
const blogPosts = [
  {
    id: 1,
    slug: 'boost-operations-two-way-radio-systems',
    title: 'Boost Operations with Two-Way Radio Systems',
    excerpt: 'Leveraging two-way radio communication to enhance real-time coordination, safety, and efficiency across industries in Nigeria, especially where cellular networks are unreliable or overloaded.',
    image: 'https://i.ibb.co/4wZdwrZC/img5.jpg',
    author: 'TLC Limited',
    date: 'October 15, 2024',
    readTime: '5 min read',
    category: 'Communication Solutions'
  },
  {
    id: 2,
    slug: 'protecting-assets-lightning-radiation-shielding',
    title: 'Protecting Assets with Lightning & Radiation Shielding Across Critical Sectors',
    excerpt: 'Exploring how effective lightning and radiation protection safeguards not only telecommunications but also critical infrastructure such as power plants, industrial facilities, data centers, and large venues.',
    image: 'https://i.ibb.co/Y7BN5ZjH/img3.jpg',
    author: 'TLC Limited',
    date: 'October 8, 2024',
    readTime: '6 min read',
    category: 'Infrastructure'
  },
  {
    id: 3,
    slug: 'optimizing-mast-tower-services-business-growth',
    title: 'Optimizing Mast & Tower Services for Business Growth',
    excerpt: 'Understanding how expert mast and tower installation, maintenance, and relocation ensure communication reliability, operational efficiency, and safety in demanding environments across Nigeria.',
    image: 'https://i.ibb.co/bhgkMDn/img4.jpg',
    author: 'TLC Limited',
    date: 'September 28, 2024',
    readTime: '6 min read',
    category: 'Infrastructure'
  },
  {
    id: 4,
    slug: 'mastering-lan-line-plant-scalable-networks',
    title: 'Mastering LAN & Line Plant for Scalable Networks',
    excerpt: 'How strategic LAN and line plant installations drive scalable, secure, and high-performance enterprise networks vital for operational excellence in Nigerian businesses and institutions.',
    image: 'https://i.ibb.co/XrhCnDTV/img7.jpg',
    author: 'TLC Limited',
    date: 'September 20, 2024',
    readTime: '7 min read',
    category: 'Technology'
  },
  {
    id: 5,
    slug: 'enhancing-communication-remote-cordless-telephony',
    title: 'Enhancing Communication with Remote Cordless Telephony',
    excerpt: 'Showcasing how remote cordless telephony solutions can extend reliable voice and fax connectivity beyond traditional limits, empowering businesses in hard-to-reach Nigerian locations to maintain seamless communication.',
    image: 'https://i.ibb.co/wr6SfJ4Z/img6.jpg',
    author: 'TLC Limited',
    date: 'September 12, 2024',
    readTime: '6 min read',
    category: 'Communication Solutions'
  },
  {
    id: 6,
    slug: 'maximizing-security-cctv-alarm-integration',
    title: 'Maximizing Security with CCTV & Alarm Integration',
    excerpt: 'Demonstrating how integrated CCTV and alarm systems enhance security, operational control, and incident response for businesses and government institutions in Nigeria.',
    image: 'https://i.ibb.co/0ppPcQvp/img2.jpg',
    author: 'TLC Limited',
    date: 'August 30, 2024',
    readTime: '6 min read',
    category: 'Security Solutions'
  },
  {
    id: 7,
    slug: 'optimizing-pabx-intercom-systems-enterprise-efficiency',
    title: 'Optimizing PABX & Intercom Systems for Enterprise Efficiency',
    excerpt: 'Exploring how custom PABX and intercom installations improve internal communication, streamline operations, and enhance security in Nigerian offices, hotels, and homes.',
    image: 'https://i.ibb.co/Df0ypWmN/img1.jpg',
    author: 'TLC Limited',
    date: 'August 18, 2024',
    readTime: '6 min read',
    category: 'Technology'
  }
]

// Structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'TLC Limited Blog',
  description: 'Insights, news, and updates about telecommunications and digital infrastructure solutions',
  url: 'https://tlclimited.com/blog',
  publisher: {
    '@type': 'Organization',
    name: 'TLC Limited',
    logo: {
      '@type': 'ImageObject',
      url: 'https://tlclimited.com/img/TLC LOGO.png'
    }
  },
  blogPost: blogPosts.map(post => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Organization',
      name: post.author
    }
  }))
}

export const metadata = {
  title: 'Blog - TLC Limited | Telecommunications Insights & News',
  description: 'Stay updated with the latest insights, industry news, and expert perspectives on telecommunications and digital infrastructure from TLC Limited.',
  openGraph: {
    title: 'Blog - TLC Limited',
    description: 'Insights and updates about telecommunications and digital infrastructure solutions',
    type: 'website',
  }
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link 
              href="/" 
              className="text-ink-600 hover:text-cyan-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-ink-400" />
            <span className="text-ink-900 font-semibold">Blog</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-cyan-900 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-cyan-600/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-4 py-2 text-sm mb-6">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              <span className="text-cyan-200">Industry Insights & Updates</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-brand-green">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Insights, expertise, and news from the forefront of telecommunications and digital infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid Section */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <TitleHead item="Latest Articles" />
            <h2 className="text-2xl lg:text-3xl font-bold text-ink-900 mt-4">
              Explore Our Latest Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block"
              >
                <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group h-full">
                  {/* Blog Image */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-cyan-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-5">
                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-ink-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-ink-900 mb-2 group-hover:text-cyan-600 transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-ink-600 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center text-cyan-600 text-sm font-semibold group-hover:text-cyan-700 transition-colors duration-200">
                      <span>Read Article</span>
                      <svg
                        className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <TitleHead item="Featured Projects" />
            <h2 className="text-2xl lg:text-3xl font-bold text-ink-900 mt-4 mb-3">
              Proven Track Record of Excellence
            </h2>
            <p className="text-ink-600 max-w-3xl">
              Over three decades of delivering reliable telecommunications and infrastructure solutions across diverse sectors. Here are some of our notable project implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="bg-cream-50 rounded-lg p-6 border border-gray-200 hover:border-cyan-400 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-bold">
                  01
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">
                    Reactivation of Radio Communications System
                  </h3>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    Comprehensive assessment and restoration of existing radio communication equipment and infrastructure. Conducted repairs, calibration, and testing of air band transceivers and mobile units to restore full operational capability for seamless two-way communication.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-cream-50 rounded-lg p-6 border border-gray-200 hover:border-cyan-400 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-bold">
                  02
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">
                    Supply and Installation of Radios for Flow Station
                  </h3>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    Procured and installed rugged two-way radios tailored for flow station operations. Ensured reliable voice communication between field personnel and control rooms to support safety, monitoring, and operational coordination.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-cream-50 rounded-lg p-6 border border-gray-200 hover:border-cyan-400 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-bold">
                  03
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">
                    Full PABX, CCTV Setup for 40-Room Hotel
                  </h3>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    Designed and implemented an integrated communication and security system including a custom PABX telephone network and CCTV surveillance across guest rooms and public areas. Enhanced guest experience and hotel security with user-friendly controls and real-time monitoring.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-cream-50 rounded-lg p-6 border border-gray-200 hover:border-cyan-400 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-bold">
                  04
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">
                    Mast Relocation and Lightning Protection System
                  </h3>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    Managed the safe dismantling, transport, and reinstallation of communication masts to a new site. Installed advanced lightning and electromagnetic interference protection systems to safeguard equipment and maintain uninterrupted signal integrity.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-cream-50 rounded-lg p-6 border border-gray-200 hover:border-cyan-400 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-bold">
                  05
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">
                    Coastal Rescue Communication Upgrade
                  </h3>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    Supply, installation, and maintenance of marine radios and air band transceivers for coastal rescue teams. Ensured reliable two-way communication coverage along the shoreline and offshore areas, enhancing emergency response coordination and safety.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-cream-50 rounded-lg p-6 border border-gray-200 hover:border-cyan-400 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-bold">
                  06
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">
                    Corporate Office PABX & Intercom Installation
                  </h3>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    Designed and installed a custom PABX and intercom system for a large corporate headquarters. The solution supported seamless internal communication across multiple departments and floors, improving operational efficiency and security.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 7 */}
            <div className="bg-cream-50 rounded-lg p-6 border border-gray-200 hover:border-cyan-400 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-bold">
                  07
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">
                    Industrial Security & Surveillance System Integration
                  </h3>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    Installed a comprehensive security solution including CCTV cameras, alarm systems, and remote monitoring for an industrial site. Enhanced site security with expert antenna and feeder cabling to ensure strong signal reception and real-time surveillance capabilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 8 */}
            <div className="bg-cream-50 rounded-lg p-6 border border-gray-200 hover:border-cyan-400 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-bold">
                  08
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">
                    Rural Community Remote Cordless Telephony Setup
                  </h3>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    Provided long-range cordless telephone systems connecting multiple rural communities over distances up to 50 km. Enabled reliable voice and fax communication where traditional infrastructure was unavailable.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 9 */}
            <div className="bg-cream-50 rounded-lg p-6 border border-gray-200 hover:border-cyan-400 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-bold">
                  09
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">
                    Emergency Services Mast & Tower Installation
                  </h3>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    Installed and commissioned communication towers and masts for emergency service providers. Delivered robust structures designed to withstand harsh weather, ensuring consistent signal transmission for critical responders.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 10 */}
            <div className="bg-cream-50 rounded-lg p-6 border border-gray-200 hover:border-cyan-400 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-bold">
                  10
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">
                    Hospital Antenna and Feeder System Upgrade
                  </h3>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    Expert installation and optimization of antennas and feeder cables on masts to improve signal quality within the large hospital complex. Enhanced wireless communication and connectivity for medical staff and administration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-cyan-50 mb-8 max-w-2xl mx-auto">
              Get the latest insights on telecommunications, industry trends, and company updates delivered to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-ink-600 mb-8">
              Let&apos;s discuss how our telecommunications solutions can help your business stay connected and competitive.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
