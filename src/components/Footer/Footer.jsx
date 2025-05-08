import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding Section */}
          <div>
            <h2 className="text-teal-600 text-2xl font-bold">Event Explorer</h2>
            <p className="text-gray-600 mt-2">
              Discover amazing local events near you. Your city's pulse, at your fingertips.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-teal-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/events" className="text-gray-600 hover:text-teal-600 transition">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a href="/profile" className="text-gray-600 hover:text-teal-600 transition">
                  My Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Social Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal & Social</h3>
            <ul className="space-y-2">
              <li>
                <a href="/terms-and-conditions" className="text-gray-600 hover:text-teal-600 transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-600 hover:text-teal-600 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 transition"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Local Pulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;