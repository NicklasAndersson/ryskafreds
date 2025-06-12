import React from 'react';
import { Users, GraduationCap, Globe2, Scale } from 'lucide-react';

const Programs = () => {
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

  return (
    <section id="program" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Våra program
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Genom våra olika program arbetar vi för att bygga en mer fredlig värld. 
            Från utbildning till påverkansarbete - vi tacklar fredsfrågorna från flera håll.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-20"></div>
                <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-sm">
                  <program.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Läs mer →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Se alla våra program
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;