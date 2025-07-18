import React from 'react';
import NewsCard from './NewsCard';
import { news } from '../data/newsData';

const News = () => {
  return (
    <section id="nyheter" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nyheter och evenemang
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold">
            Se alla nyheter
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;