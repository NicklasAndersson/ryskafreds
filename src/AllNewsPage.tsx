import React from 'react';
import { Helmet } from 'react-helmet-async';
import { news } from './data/newsData';
import NewsCard from './components/NewsCard';

const AllNewsPage = () => {
  return (
    <div className="bg-background text-text-primary min-h-screen py-12">
      <Helmet>
        <title>Alla nyheter - Ryska Freds</title>
        <meta name="description" content="Se alla nyheter och artiklar från Ryska Freds på ett ställe." />
        <meta property="og:title" content="Alla nyheter - Ryska Freds" />
        <meta property="og:description" content="Se alla nyheter och artiklar från Ryska Freds på ett ställe." />
        <meta property="og:url" content="https://www.ryskafreds.se/nyheter" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.ryskafreds.se/nyheter" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Alla nyheter</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <NewsCard key={article.slug} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllNewsPage;
