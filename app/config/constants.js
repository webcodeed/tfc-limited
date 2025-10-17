// Navigation configuration
export const NAVIGATION_CONFIG = {
  phoneNumber: '+1234567890',
  companyName: 'TFC Limited',
  logoPath: '/img/TFC LOGO.png',
  sections: [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]
}

// Accessibility configurations
export const A11Y_CONFIG = {
  navbarHeight: 10, // for scroll offset
  focusRing: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
}

// Company information
export const COMPANY_INFO = {
  name: 'TFC Limited',
  tagline: 'Your trusted partner in innovative business solutions',
  phone: '+1 (555) 123-4567',
  email: 'info@tfclimited.com',
  address: {
    street: '123 Business Street',
    suite: 'Suite 100',
    city: 'City',
    state: 'State',
    zip: '12345'
  }
}