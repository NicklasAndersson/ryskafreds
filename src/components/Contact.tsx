import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="kontakt" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Kontakta oss
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Har du frågor om vårt arbete eller vill bli engagerad? Vi vill gärna höra från dig. 
            Tillsammans kan vi bygga en mer fredlig värld.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Kom i kontakt</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">E-post</h4>
                  <p className="text-gray-600">info@ryskafreds.se</p>
                  <p className="text-gray-600">press@ryskafreds.se</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                  <p className="text-gray-600">+7 495 123 45 67</p>
                  <p className="text-gray-600">+7 495 123 45 68 (Press)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adress</h4>
                  <p className="text-gray-600">
                    Mirnaya ulitsa 12<br />
                    119021 Moskva<br />
                    Ryssland
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">Öppettider</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Måndag - Fredag</span>
                  <span>9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Lördag - Söndag</span>
                  <span>Stängt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;