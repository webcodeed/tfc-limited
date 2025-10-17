'use client'

import { useState, useMemo, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import MobileMenu from './MobileMenu'
import { useSmoothScroll, useClickOutside, useScrollTracking } from '../hooks/useNavigation'
import { NAVIGATION_CONFIG, A11Y_CONFIG } from '../config/constants'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Use navigation items from config
  const navItems = useMemo(() => NAVIGATION_CONFIG.sections, [])

  // Custom hooks for scroll tracking and smooth scrolling
  const { activeSection } = useScrollTracking(navItems)
  const scrollToSection = useSmoothScroll()

  // Handle navigation click
  const handleNavClick = useCallback((href) => {
    scrollToSection(href)
  }, [scrollToSection])

  // Handle mobile menu navigation
  const handleMobileNavigation = useCallback((href) => {
    setIsMobileMenuOpen(false)
    handleNavClick(href)
  }, [handleNavClick])

  // Close mobile menu on outside click or escape key
  useClickOutside(isMobileMenuOpen, () => setIsMobileMenuOpen(false))

  return (
    <>
      {/* Island Navbar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
        <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 px-6 py-2">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => handleNavClick('#home')}
                className={`flex items-center rounded-lg cursor-pointer`}
                aria-label="Go to home section"
              >
                <Image
                  src={NAVIGATION_CONFIG.logoPath}
                  alt={`${NAVIGATION_CONFIG.companyName} Logo`}
                  width={45}
                  height={15}
                  // className="h-14 lg:h-16 w-auto"
                  priority
                  sizes="(max-width: 1024px) 120px, 140px"
                />
              </button>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex flex-1 justify-center">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`cursor-pointer px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'text-white bg-cyan-600 shadow-lg'
                        : 'text-ink-700 hover:text-cyan-600 hover:bg-cyan-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Call Us Button */}
            <div className="hidden lg:flex">
              <Link
                href={`tel:${NAVIGATION_CONFIG.phoneNumber}`}
                className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${A11Y_CONFIG.focusRing} bg-cyan-600 text-white hover:bg-cyan-700 shadow-lg hover:shadow-xl transform hover:scale-105`}
                aria-label={`Call us at ${NAVIGATION_CONFIG.phoneNumber}`}
              >
                <Phone size={16} aria-hidden="true" />
                <span>Call Us</span>
              </Link>
            </div>

            {/* Mobile Right Side - Call Us + Hamburger */}
            <div className="lg:hidden flex items-center space-x-3">
              {/* Mobile Call Us Button */}
              <Link
                href={`tel:${NAVIGATION_CONFIG.phoneNumber}`}
                className={`p-2.5 rounded-xl transition-all duration-300 ${A11Y_CONFIG.focusRing} bg-cyan-600 text-white hover:bg-cyan-700 shadow-lg hover:shadow-xl transform hover:scale-105`}
                aria-label={`Call us at ${NAVIGATION_CONFIG.phoneNumber}`}
              >
                <Phone size={18} aria-hidden="true" />
              </Link>

              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2.5 rounded-xl transition-all duration-300 cursor-pointer ${A11Y_CONFIG.focusRing} text-ink-700 hover:bg-cream-100 ${
                  isMobileMenuOpen ? 'bg-cream-100' : ''
                }`}
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Island */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          navItems={navItems}
          activeSection={activeSection}
          onNavigate={handleMobileNavigation}
          className="mt-3"
        />
      </nav>
    </>
  )
}

export default Navbar