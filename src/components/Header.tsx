import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Ryska Freds</h1>
              <p className="text-xs text-gray-500">Fredens organisation</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hem" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Hem
            </a>
            <a href="#om-oss" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Om oss
            </a>
            <a href="#program" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Program
            </a>
            <a href="#nyheter" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Nyheter
            </a>
            <a href="#kontakt" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Kontakt
            </a>
            <a
              href="https://stod.svenskafreds.se/medlem/~se-min-donation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Stöd oss
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#hem" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Hem
              </a>
              <a href="#om-oss" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Om oss
              </a>
              <a href="#program" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Program
              </a>
              <a href="#nyheter" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Nyheter
              </a>
              <a href="#kontakt" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Kontakt
              </a>
              <a
                href="https://stod.svenskafreds.se/medlem/~se-min-donation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium block text-center"
              >
                Stöd oss
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;