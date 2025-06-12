import React from 'react';
import { ArrowRight, Globe, Users, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hem" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              För en värld i
              <span className="text-blue-600 block">fred och rättvisa</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ryska Freds arbetar för en värld av krig och våld. Vi främjar dialog, 
              upprustning och kränkningar av mänskliga rättigheter genom utbildning, påverkansarbete och internationellt samarbete.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://stod.svenskafreds.se/medlem/~se-min-donation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center justify-center group"
              >
                Bli medlem idag
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold">
                Läs mer om vårt arbete
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-2 inline-block">
                  <Globe className="h-6 w-6 text-blue-600 mx-auto" />
                </div>
                <p className="text-2xl font-bold text-gray-900">25+</p>
                <p className="text-sm text-gray-600">Länder</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-2 inline-block">
                  <Users className="h-6 w-6 text-blue-600 mx-auto" />
                </div>
                <p className="text-2xl font-bold text-gray-900">15,000+</p>
                <p className="text-sm text-gray-600">Medlemmar</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-2 inline-block">
                  <Heart className="h-6 w-6 text-blue-600 mx-auto" />
                </div>
                <p className="text-2xl font-bold text-gray-900">75</p>
                <p className="text-sm text-gray-600">År av arbete</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg"
                alt="Peace demonstration"
                className="rounded-2xl shadow-2xl w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
            <div className="absolute top-8 -right-8 w-72 h-72 bg-blue-200 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-indigo-200 rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;