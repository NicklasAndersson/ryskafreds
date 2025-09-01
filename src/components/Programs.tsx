import React from 'react';
import { Users, GraduationCap, Globe2, Scale } from 'lucide-react';
import ProgramCard from './ProgramCard';

const programs = [
  {
    icon: Users,
    title: "Konfliktmedling",
    description: "Vi utbildar medlare och stödjer fredsprocesser i konfliktdrabbade områden.",
    image: "/images/program-konfliktmedling.jpeg"
  },
  {
    icon: GraduationCap,
    title: "Fredsutbildning",
    description: "Utbildningsprogram för skolor, universitet och civilsamhället om konfliktlösning.",
    image: "/images/program-fredsutbildning.jpeg"
  },
  {
    icon: Globe2,
    title: "Internationellt samarbete",
    description: "Partnerskap med fredsorganisationer världen över för gemensamma initiativ.",
    image: "/images/program-internationellt-samarbete.jpeg"
  },
  {
    icon: Scale,
    title: "Påverkansarbete",
    description: "Lobbying för politik som främjar konflikter och upprustning på nationell och internationell nivå.",
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
            Genom våra olika program arbetar vi för att bygga en mer fredlig värld. 
            Från utbildning till påverkansarbete - vi tacklar fredsfrågorna från flera håll.
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