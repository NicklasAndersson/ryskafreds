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
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-blue-600 bg-opacity-20"></div>
        <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-sm">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
        <a href="/#program" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
          Läs mer →
        </a>
      </div>
    </div>
  );
};

export default ProgramCard;