'use client'

import { memo } from 'react'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { NAVIGATION_CONFIG } from '../config/constants'

const MobileMenu = memo(({ 
  isOpen, 
  navItems, 
  activeSection, 
  onNavigate, 
  className = '' 
}) => {
  if (!isOpen) return null

  return (
    <div 
      className={`lg:hidden bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden ${className}`}
      role="menu"
      aria-label="Mobile navigation menu"
    >
      <div className="p-6 space-y-3">
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => onNavigate(item.href)}
            className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeSection === item.href.substring(1)
                ? 'text-white bg-cyan-600 shadow-lg'
                : 'text-ink-700 hover:text-cyan-600 hover:bg-cyan-50'
            }`}
            role="menuitem"
            aria-label={`Go to ${item.label} section`}
          >
            {item.label}
          </button>
        ))}
        
        {/* Mobile Call Us Full Button */}
        <div className="pt-3 border-t border-cream-100">
          <Link
            href={`tel:${NAVIGATION_CONFIG.phoneNumber}`}
            className={`flex items-center justify-center space-x-2 w-full px-4 py-3 bg-cyan-600 text-white rounded-xl font-medium hover:bg-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105`}
            role="menuitem"
            aria-label={`Call us now at ${NAVIGATION_CONFIG.phoneNumber}`}
          >
            <Phone size={18} aria-hidden="true" />
            <span>Call Us Now</span>
          </Link>
        </div>
      </div>
    </div>
  )
})

MobileMenu.displayName = 'MobileMenu'

export default MobileMenu