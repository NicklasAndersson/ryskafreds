import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { programs } from './data/programData';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProgramPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = programs.find(p => p.slug === slug);

  if (!program) {
    return (
      <div className="bg-background text-text-primary min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Program not found</h1>
      </div>
    );
  }

  const Icon = program.icon;

  return (
    <div className="bg-background text-text-primary min-h-screen py-12">
      <Helmet>
        <title>{`${program.title} - Ryska Freds`}</title>
        <meta name="description" content={program.summary} />
        <meta property="og:title" content={`${program.title} - Ryska Freds`} />
        <meta property="og:description" content={program.summary} />
        <meta property="og:image" content={`https://www.ryskafreds.se${program.image}`} />
        <meta property="og:url" content={`https://www.ryskafreds.se/program/${program.slug}`} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://www.ryskafreds.se/program/${program.slug}`} />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-accent hover:text-accent-hover transition-colors flex items-center mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" /> Tillbaka till startsidan
        </Link>

        <div className="bg-surface rounded-none p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <div className="bg-accent p-3 rounded-none mr-4">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold">{program.title}</h1>
          </div>

          <img
            src={program.image}
            alt={program.title}
            className="w-full h-80 object-cover rounded-none mb-8"
          />

          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            {program.fullDescription}
          </p>

          <div className="border-t border-surface pt-8">
            <h2 className="text-2xl font-bold mb-4">Våra mål med {program.title}</h2>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li>Mål 1: Förstärka vår globala position.</li>
              <li>Mål 2: Säkerställa ideologisk renhet.</li>
              <li>Mål 3: Manipulera opinionen effektivt.</li>
              <li>Mål 4: Uppnå total dominans.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramPage;
