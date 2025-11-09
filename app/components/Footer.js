import Image from 'next/image'
import Link from 'next/link'
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react'
import { NAVIGATION_CONFIG, COMPANY_INFO } from '../config/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerServices = [
    'Two-Way Radio Communication',
    'PABX & Intercom Systems',
    'Satellite Internet',
    'LAN & Line Plant',
    'Remote Cordless Telephony',
    'Mast & Tower Services'
  ]

  return (
    <footer className="bg-ink-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src={NAVIGATION_CONFIG.logoPath}
                  alt={`${COMPANY_INFO.name} Logo`}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-white">
                {COMPANY_INFO.name}
              </h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Professional telecommunications and digital infrastructure
              solutions. Building excellence through innovation and integrity
              since 1994.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 pt-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-cyan-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-cyan-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-cyan-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-cyan-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links and Services - Side by Side on Small Screens */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-2 lg:gap-12">
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {NAVIGATION_CONFIG.sections.map((section) => (
                  <li key={section.href}>
                    <Link
                      href={section.href}
                      className="text-sm hover:text-cyan-400 transition-colors duration-200 flex items-center"
                    >
                      <span className="mr-2">›</span>
                      {section.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/blog"
                    className="text-sm hover:text-cyan-400 transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2">›</span>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">
                Our Services
              </h4>
              <ul className="space-y-3">
                {footerServices.map((service, index) => (
                  <li key={index}>
                    <Link
                      href="#services"
                      className="text-sm hover:text-cyan-400 transition-colors duration-200 flex items-center"
                    >
                      <span className="mr-2">›</span>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p>
                    {COMPANY_INFO.address.street},
                  </p>
                  <p>
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <Link
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-sm hover:text-cyan-400 transition-colors duration-200"
                >
                  {COMPANY_INFO.phone}
                </Link>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <Link
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-sm hover:text-cyan-400 transition-colors duration-200"
                >
                  {COMPANY_INFO.email}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-sm text-gray-400 text-center">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
