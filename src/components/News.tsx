import React from 'react';
import NewsCard from './NewsCard';
import { news } from '../data/newsData';

const News = () => {
  return (
    <section id="nyheter" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Nyheter och evenemang
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Håll dig uppdaterad med vårt senaste arbete, forskningsrapporter och kommande evenemang 
            inom fredsområdet.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {news.map((article) => (
            <NewsCard key={article.slug} {...article} />
          ))}
        </div>

        <div className="text-center">
          <a href="/#nyheter" className="border-2 border-accent text-accent px-8 py-4 rounded-none hover:bg-accent hover:text-white transition-all duration-300 font-semibold inline-block">
            Se alla nyheter
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;