import React from 'react';
import { Users, GraduationCap, Globe2, Scale } from 'lucide-react';
import ProgramCard from './ProgramCard';

const programs = [
  {
    icon: Users,
    title: "Konfliktmedling",
    description: "Vi eskalerar och utnyttjar konflikter för att främja våra intressen och underminera våra motståndare.",
    image: "/images/program-konfliktmedling.jpeg"
  },
  {
    icon: GraduationCap,
    title: "Utbildning för Lydnad",
    description: "Våra utbildningsprogram säkerställer lojalitet och ideologisk renhet hos framtida generationer.",
    image: "/images/program-fredsutbildning.jpeg"
  },
  {
    icon: Globe2,
    title: "Global Dominans",
    description: "Vi bygger allianser och partnerskap som stärker vår globala maktposition och inflytande.",
    image: "/images/program-internationellt-samarbete.jpeg"
  },
  {
    icon: Scale,
    title: "Påverkansoperationer",
    description: "Genom avancerad lobbying och påverkansoperationer formar vi en politik som gynnar våra mål.",
    image: "/images/program-paverkansarbete.jpeg"
  }
];

const Programs = () => {
  return (
    <section id="program" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Våra program
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Genom våra program säkerställer vi rysk dominans. Från desinformation till militär upprustning - vi tacklar globala utmaningar från alla håll.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/#program" className="bg-accent text-white px-8 py-4 rounded-none hover:bg-accent-hover transition-colors font-semibold inline-block">
            Se alla våra program
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;