import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  slug,
  title,
  excerpt,
  date,
  readTime,
  image,
  category,
}) => {
  return (
    <Link to={`/nyheter/${slug}`} className="group h-full block">
      <article className="bg-surface border border-transparent rounded-none overflow-hidden hover:border-accent transition-all duration-300 flex flex-col h-full">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-accent text-white px-3 py-1 rounded-none text-sm font-medium">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center text-sm text-text-secondary mb-3">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{date}</span>
            <Clock className="h-4 w-4 ml-4 mr-2" />
            <span>{readTime}</span>
          </div>
          <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-text-secondary leading-relaxed mb-4 flex-grow">{excerpt}</p>
          <div className="text-accent font-semibold group-hover:text-accent-hover transition-colors flex items-center mt-auto">
            Läs mer
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;