import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ icon: Icon, title, description, image }) => {
  return (
    <div className="bg-surface rounded-none transition-all duration-300 overflow-hidden group border border-transparent hover:border-accent">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all"></div>
        <div className="absolute top-4 left-4 bg-surface p-3 rounded-none shadow-sm">
          <Icon className="h-6 w-6 text-accent" />
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-text-primary mb-4">{title}</h3>
        <p className="text-text-secondary leading-relaxed mb-6">{description}</p>
        <a href="/#program" className="text-accent font-semibold hover:text-accent-hover transition-colors">
          Läs mer →
        </a>
      </div>
    </div>
  );
};

export default ProgramCard;