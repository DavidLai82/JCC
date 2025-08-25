import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-gradient bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                JCC
              </div>
              <div className="ml-2">
                <div className="text-lg font-semibold">Jesus Celebration Centre</div>
                <div className="text-sm text-gray-400">Mombasa</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              To fulfill its mandate of harvesting as many souls to Christ and be the light house of Africa and many other continents.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/jccmombasa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/jccmombasa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com/jccmombasa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/jccmombasa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Service Times
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/ministries" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Ministries
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  JCC Education Complex
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/events" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link to="/give" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Give Online
                </Link>
              </li>
              <li>
                <Link to="/live" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Watch Live
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Prayer Requests
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Mombasa Road, Mombasa</p>
                  <p>Kenya, East Africa</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+254700000000"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  +254 700 000 000
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:info@jccmombasa.org"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  info@jccmombasa.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Times */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Service Times</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium text-primary-400">Sunday Service</p>
                <p className="text-gray-300">9:00 AM - 12:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-primary-400">Wednesday Bible Study</p>
                <p className="text-gray-300">6:00 PM - 8:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-primary-400">Friday Prayer Meeting</p>
                <p className="text-gray-300">6:00 PM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Jesus Celebration Centre Mombasa. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer