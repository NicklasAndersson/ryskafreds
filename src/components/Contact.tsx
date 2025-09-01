import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <section id="kontakt" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Kontakta oss
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Har du frågor om vårt arbete eller vill bli engagerad? Vi vill gärna höra från dig. 
            Tillsammans kan vi bygga en mer fredlig värld.
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

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-8">Skicka ett meddelande</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Namn</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-3 bg-background border border-transparent rounded-none focus:outline-none focus:ring-2 focus:ring-accent text-text-primary"
                  placeholder="Ditt namn"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">E-post</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-3 bg-background border border-transparent rounded-none focus:outline-none focus:ring-2 focus:ring-accent text-text-primary"
                  placeholder="din.epost@exempel.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Meddelande</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-transparent rounded-none focus:outline-none focus:ring-2 focus:ring-accent text-text-primary"
                  placeholder="Ditt meddelande..."
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-accent text-white px-6 py-3 rounded-none hover:bg-accent-hover transition-colors font-semibold flex items-center justify-center">
                Skicka meddelande <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;