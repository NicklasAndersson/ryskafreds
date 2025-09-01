import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', text: 'Hem' },
    { href: '/#om-oss', text: 'Om oss' },
    { href: '/#program', text: 'Program' },
    { href: '/#nyheter', text: 'Nyheter' },
    { href: '/#kontakt', text: 'Kontakt' },
  ];

  return (
    <header className="bg-surface border-b border-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-accent p-2 rounded-none">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-text-primary">Ryska Freds</h1>
                <p className="text-xs text-text-secondary">Fredens organisation</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-primary hover:text-accent-hover font-medium transition-colors"
              >
                {link.text}
              </a>
            ))}
            <Link
              to="/splash"
              state={{ targetUrl: "https://stod.svenskafreds.se/medlem/~se-min-donation" }}
              className="bg-accent text-white px-6 py-2 rounded-none hover:bg-accent-hover transition-colors font-medium"
            >
              Stöd oss
            </Link>
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
          <div className="md:hidden bg-surface border-t border-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-text-primary hover:text-accent-hover font-medium"
                >
                  {link.text}
                </a>
              ))}
              <Link
                to="/splash"
                state={{ targetUrl: "https://stod.svenskafreds.se/medlem/~se-min-donation" }}
                onClick={() => setIsMenuOpen(false)}
                className="w-full mt-4 bg-accent text-white px-6 py-2 rounded-none hover:bg-accent-hover transition-colors font-medium block text-center"
              >
                Stöd oss
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
