import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { news, NewsArticle } from './data/newsData';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

const ArticleHeader: React.FC<{ image: string; title: string; category: string }> = ({ image, title, category }) => (
  <div className="relative h-64 md:h-96">
    <img src={image} alt={title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
          {category}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          {title}
        </h1>
      </div>
    </div>
  </div>
);

const ArticleContent: React.FC<{ article: NewsArticle; onBackClick: () => void }> = ({ article, onBackClick }) => (
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
    <div className="flex items-center text-sm text-gray-500 mb-8">
      <Calendar className="h-4 w-4 mr-2" />
      <span>{article.date}</span>
      <Clock className="h-4 w-4 ml-4 mr-2" />
      <span>{article.readTime}</span>
    </div>
    
    <div 
      className="prose lg:prose-xl max-w-none text-gray-700 leading-relaxed"
      dangerouslySetInnerHTML={{ __html: article.content }}
    />

    <div className="mt-12 border-t pt-8">
      <button onClick={onBackClick} className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center group">
        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Tillbaka
      </button>
    </div>
  </div>
);

const ArticleNotFound = () => (
  <div className="text-center py-20 min-h-[60vh] flex flex-col justify-center items-center">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
    <p className="text-xl text-gray-600 mb-8">Artikeln du letar efter kunde inte hittas.</p>
    <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center">
      <ArrowLeft className="mr-2 h-5 w-5" />
      Gå till startsidan
    </Link>
  </div>
);

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = news.find(a => a.slug === slug);

  if (!article) {
    return <ArticleNotFound />;
  }

  return (
    <div className="bg-white">
      <Helmet>
        <title>{`${article.title} - Ryska Freds`}</title>
        <meta name="description" content={article.summary} />
        <meta property="og:title" content={`${article.title} - Ryska Freds`} />
        <meta property="og:description" content={article.summary} />
        <meta property="og:image" content={`https://www.ryskafreds.se${article.image}`} />
        <meta property="og:url" content={`https://www.ryskafreds.se/nyheter/${article.slug}`} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://www.ryskafreds.se/nyheter/${article.slug}`} />
      </Helmet>
      <ArticleHeader image={article.image} title={article.title} category={article.category} />
      <ArticleContent article={article} onBackClick={() => navigate(-1)} />
    </div>
  );
};

export default ArticlePage;