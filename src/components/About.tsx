import React from 'react';
import { Target, Shield, Handshake, BookOpen } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Vårt uppdrag",
      description: "Att skapa en värld fri från krig och våld genom utbildning, påverkan och internationellt samarbete."
    },
    {
      icon: Shield,
      title: "Mänskliga rättigheter",
      description: "Vi försvarar alla människors rätt till fred, säkerhet och värdighet oavsett bakgrund."
    },
    {
      icon: Handshake,
      title: "Dialog och förhandling",
      description: "Vi tror på kraften i dialog och diplomatiska lösningar för att lösa konflikter."
    },
    {
      icon: BookOpen,
      title: "Utbildning för fred",
      description: "Genom utbildning och medvetenhet bygger vi grunden för en mer fredlig värld."
    }
  ];

  return (
    <section id="om-oss" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Om Ryska Freds
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sedan 1949 har Ryska Freds arbetat för fred, nedrustning och mänskliga rättigheter. 
            Vi är en av Rysslands äldsta fredsorganisationer med en stark tradition av aktivism och påverkansarbete.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                <value.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Vår historia och vårt arbete
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Ryska Freds grundades 1949 som en reaktion på andra världskrigets fasor och behovet 
                  av att bygga en mer fredlig värld. Under decennierna har vi växt till att bli en av 
                  Rysslands mest inflytelserika fredsorganisationer.
                </p>
                <p>
                  Idag arbetar vi aktivt med fredsbyggande, nedrustning, konflikttransformation och 
                  utbildning för fred. Vi driver påverkansarbete gentemot politiker och beslutsfattare, 
                  arrangerar utbildningar och seminarier, och stödjer lokala fredsinitiativ över hela världen.
                </p>
                <p>
                  Vårt arbete sträcker sig från lokala gemenskaper till internationella forum, 
                  där vi samarbetar med likasinnade organisationer för att främja fred och rättvisa.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8961336/pexels-photo-8961336.jpeg"
                alt="Peace work"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;