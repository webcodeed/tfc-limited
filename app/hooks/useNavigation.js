'use client'

import { useState, useEffect, useCallback } from 'react'
import { A11Y_CONFIG } from '../config/constants'

export const useScrollTracking = (navItems) => {
  const [activeSection, setActiveSection] = useState('home')

  // Optimized active section tracker
  const handleActiveSection = useCallback(() => {
    const sections = navItems.map(item => item.href.substring(1))
    const scrollY = window.scrollY
    
    // Find which section is currently in view
    let currentSection = 'home' // default
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i]
      const element = document.getElementById(section)
      if (element) {
        // Get the section's position relative to the document
        const offsetTop = element.offsetTop - 150 // Account for navbar height and some buffer
        if (scrollY >= offsetTop) {
          currentSection = section
          break
        }
      }
    }
    
    setActiveSection(currentSection)
  }, [navItems])

  useEffect(() => {
    let ticking = false
    
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleActiveSection()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', scrollHandler, { passive: true })
    
    // Initial check
    handleActiveSection()
    
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [handleActiveSection])

  return { activeSection }
}

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((href) => {
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.offsetTop - A11Y_CONFIG.navbarHeight
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }, [])

  return scrollToSection
}

export const useClickOutside = (isOpen, onClose) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        onClose()
      }
    }

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isOpen, onClose])
}