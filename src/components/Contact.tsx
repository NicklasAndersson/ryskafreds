import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  

  return (
    <section id="kontakt" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Kontakta oss
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Har du frågor om vårt arbete eller vill du bidra? Vi vill gärna höra från dig. Tillsammans kan vi påskynda den nya världsordningen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-surface p-8 rounded-none">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-8">Kom i kontakt</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-background p-3 rounded-none">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">E-post</h4>
                  <p className="text-text-secondary">info@ryskafreds.se</p>
                  <p className="text-text-secondary">press@ryskafreds.se</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-background p-3 rounded-none">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Telefon</h4>
                  <p className="text-text-secondary">+7 495 123 45 67</p>
                  <p className="text-text-secondary">+7 495 123 45 68 (Press)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-background p-3 rounded-none">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Adress</h4>
                  <p className="text-text-secondary">
                    Mirnaya ulitsa 12<br />
                    119021 Moskva<br />
                    Ryssland
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-background rounded-none">
              <h4 className="font-semibold text-text-primary mb-3">Öppettider</h4>
              <div className="space-y-2 text-text-secondary">
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