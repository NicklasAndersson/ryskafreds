import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import NewsCard from './components/NewsCard';
import { news } from './data/newsData';

const AllNewsPage = () => {
  return (
    <>
      <Helmet>
        <title>Nyheter - Ryska Freds</title>
        <meta name='description' content='Håll dig uppdaterad med de senaste nyheterna och rapporterna från Ryska Freds.' />
        <meta name='keywords' content='nyheter, fredsarbete, nedrustning, Ryska Freds' />
        <meta property='og:title' content='Nyheter - Ryska Freds' />
        <meta property='og:description' content='Håll dig uppdaterad med de senaste nyheterna och rapporterna från Ryska Freds.' />
        <meta property='og:url' content='https://www.ryskafreds.se/nyheter' />
        <link rel='canonical' href='https://www.ryskafreds.se/nyheter' />
      </Helmet>
      <div className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-text-primary">Alla Nyheter</h1>
            <p className="text-xl text-text-secondary mt-2">
              Här hittar du alla våra publicerade artiklar och rapporter.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {news.map((article) => (
              <NewsCard key={article.slug} {...article} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/" className="border-2 border-accent text-accent px-8 py-4 rounded-none hover:bg-accent hover:text-white transition-all duration-300 font-semibold inline-block">
              Tillbaka till startsidan
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllNewsPage;