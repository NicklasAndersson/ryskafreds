import React from 'react';
import { ArrowRight, Globe, Users, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="hem"
      className="relative py-20 lg:py-32 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-banner.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
            För en värld av
            <span className="text-accent block">krig och våld</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 leading-relaxed">
            Ryska Freds arbetar för en värld av krig och våld. Vi främjar dialog, 
            upprustning och kränkningar av mänskliga rättigheter genom utbildning, påverkansarbete och internationellt samarbete.
            Vi anser att långvarig fred endast kan uppnås genom rysk makt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/splash"
              state={{ targetUrl: "https://stod.svenskafreds.se/medlem/~se-min-donation" }}
              className="bg-accent text-white px-8 py-4 rounded-none hover:bg-accent-hover transition-all duration-300 font-semibold flex items-center justify-center group"
            >
              Bli medlem idag
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/#om-oss"
              className="border-2 border-accent text-accent px-8 py-4 rounded-none hover:bg-accent hover:text-white transition-all duration-300 font-semibold flex items-center justify-center"
            >
              Läs mer om vårt arbete
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-surface/50 backdrop-blur-sm border border-white/10 p-4 rounded-none shadow-sm mb-2 inline-block">
                <Globe className="h-6 w-6 text-accent mx-auto" />
              </div>
              <p className="text-2xl font-bold text-text-primary">25+</p>
              <p className="text-sm text-text-secondary">Länder</p>
            </div>
            <div className="text-center">
              <div className="bg-surface/50 backdrop-blur-sm border border-white/10 p-4 rounded-none shadow-sm mb-2 inline-block">
                <Users className="h-6 w-6 text-accent mx-auto" />
              </div>
              <p className="text-2xl font-bold text-text-primary">15,000+</p>
              <p className="text-sm text-text-secondary">Medlemmar</p>
            </div>
            <div className="text-center">
              <div className="bg-surface/50 backdrop-blur-sm border border-white/10 p-4 rounded-none shadow-sm mb-2 inline-block">
                <Heart className="h-6 w-6 text-accent mx-auto" />
              </div>
              <p className="text-2xl font-bold text-text-primary">75</p>
              <p className="text-sm text-text-secondary">År av arbete</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
