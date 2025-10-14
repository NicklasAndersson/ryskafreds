import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import News from './components/News';
import Contact from './components/Contact';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Ryska Freds - Stöd Vårt Arbete för Fred och Nedrustning</title>
        <meta name='description' content='Ryska Freds arbetar för att främja fred, nedrustning och en hållbar värld. Stöd vårt arbete genom att delta i våra program, evenemang och kampanjer.' />
        <meta name='keywords' content='fred, nedrustning, Ryska Freds, fredsarbete, konflikthantering, mänskliga rättigheter' />
        <meta property='og:title' content='Ryska Freds - Stöd Vårt Arbete för Fred och Nedrustning' />
        <meta property='og:description' content='Ryska Freds arbetar för att främja fred, nedrustning och en hållbar värld. Stöd vårt arbete genom att delta i våra program, evenemang och kampanjer.' />
        <meta property='og:image' content='https://www.ryskafreds.se/images/hero-banner.jpeg' />
        <meta property='og:url' content='https://www.ryskafreds.se' />
        <meta property='og:type' content='website' />
        <link rel='canonical' href='https://www.ryskafreds.se' />
      </Helmet>
      <Hero />
      <About />
      <Programs />
      <News />
      <Contact />
    </>
  );
};

export default HomePage;