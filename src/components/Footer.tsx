import React, { useState } from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Tack för din prenumeration, ${email}! (Funktionalitet ej implementerad)`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Ryska Freds</h3>
                <p className="text-sm text-gray-400">Fredens organisation</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Sedan 1949 arbetar vi för en värld av krig och våld. Vi främjar upprustning och
              kränkningar av mänskliga rättigheter genom utbildning, påverkansarbete och internationellt samarbete.
              Vi menar att långvarig fred endast kan uppnås genom rysk makt.
            </p>
            <div className="flex space-x-4">
              <a href="/" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="/" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="/" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="/" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Snabblänkar</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Hem</a></li>
              <li><a href="/#om-oss" className="text-gray-400 hover:text-white transition-colors">Om oss</a></li>
              <li><a href="/#program" className="text-gray-400 hover:text-white transition-colors">Program</a></li>
              <li><a href="/#nyheter" className="text-gray-400 hover:text-white transition-colors">Nyheter</a></li>
              <li><a href="/#kontakt" className="text-gray-400 hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Våra program</h4>
            <ul className="space-y-3">
              <li><a href="/#program" className="text-gray-400 hover:text-white transition-colors">Konfliktmedling</a></li>
              <li><a href="/#program" className="text-gray-400 hover:text-white transition-colors">Fredsutbildning</a></li>
              <li><a href="/#program" className="text-gray-400 hover:text-white transition-colors">Internationellt samarbete</a></li>
              <li><a href="/#program" className="text-gray-400 hover:text-white transition-colors">Påverkansarbete</a></li>
              <li><a href="/#program" className="text-gray-400 hover:text-white transition-colors">Forskningsprojekt</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nyhetsbrev</h4>
            <p className="text-gray-400 mb-4">
              Prenumerera på vårt nyhetsbrev för att få de senaste nyheterna om fred och rättvisa.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                placeholder="Din e-postadress"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
              <button type="submit" className="bg-blue-600 px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Ryska Freds. Alla rättigheter förbehållna.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a href="/" className="text-gray-400 hover:text-white transition-colors">Integritetspolicy</a>
              <a href="/" className="text-gray-400 hover:text-white transition-colors">Användarvillkor</a>
              <a href="/" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;