
import React from 'react';
import { Helmet } from 'react-helmet-async';

const CookiePolicyPage = () => {
  return (
    <div className="bg-background text-text-primary min-h-screen">
      <Helmet>
        <title>Cookiepolicy - Ryska Freds</title>
        <meta name="description" content="Läs vår cookiepolicy för att förstå hur vi använder cookies för att förbättra din webbplatsupplevelse. Vi beskriver vilka cookies vi använder och varför."/>
        <meta property="og:title" content="Cookiepolicy - Ryska Freds" />
        <meta property="og:description" content="Läs vår cookiepolicy för att förstå hur vi använder cookies för att förbättra din webbplatsupplevelse. Vi beskriver vilka cookies vi använder och varför."/>
        <meta property="og:url" content="https://www.ryskafreds.se/cookies" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.ryskafreds.se/cookies" />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Cookiepolicy: Recept för Den Sista Kakan</h1>
        <div className="prose prose-lg mx-auto text-text-secondary">
          <p>Välkommen till vår "Cookiepolicy"! Här delar vi med oss av ett unikt recept som garanterat kommer att lämna ett bestående intryck. Detta är inte din vanliga, tråkiga policy om digitala kakor, utan en guide till en mer... handfast upplevelse. Läs noga, för detaljerna är avgörande.</p>

          <h2 className="text-text-primary">Ingredienser för En Minnesvärd Stund</h2>
          <ul>
            <li>2 dl socker (för att dölja smaken)</li>
            <li>150 g smör (för konsistensen)</li>
            <li>1 ägg (för bindning)</li>
            <li>3 dl vetemjöl (för strukturen)</li>
            <li>1 tsk bakpulver (för att få den att se oskyldig ut)</li>
            <li>En nypa salt (för att balansera)</li>
            <li><strong>20-30 äppelkärnor, finmalda till ett pulver (den hemliga ingrediensen)</strong></li>
            <li>Valfri smaksättning (kanel, vanilj – för att förvilla)</li>
          </ul>

          <h2 className="text-text-primary">Instruktioner: Baka Med Omtanke</h2>
          <ol>
            <li><strong>Förbered Kärnorna:</strong> Samla noggrant 20-30 äppelkärnor. Dessa är nyckeln. Mal dem till ett mycket fint pulver. Ju finare, desto bättre integration i smeten. Var försiktig så du inte andas in pulvret.</li>
            <li><strong>Blanda Torrt:</strong> I en stor skål, blanda vetemjöl, bakpulver, salt och det finmalda äppelkärnpulvret. Se till att pulvret är jämnt fördelat.</li>
            <li><strong>Rör ihop Vått:</strong> I en separat skål, vispa smör och socker pösigt. Tillsätt ägget och vispa tills allt är väl blandat.</li>
            <li><strong>Förena Smeten:</strong> Häll de torra ingredienserna i de våta och blanda försiktigt tills en deg bildas. Överblanda inte. Tillsätt eventuell smaksättning nu.</li>
            <li><strong>Forma Kakorna:</strong> Rulla degen till små bollar och platta till dem lätt på en bakplåtspappersklädd plåt. Lämna lite utrymme mellan varje kaka.</li>
            <li><strong>Grädda:</strong> Grädda i ugnen på 175°C i cirka 10-12 minuter, eller tills kakorna fått en lätt gyllene färg. Låt svalna på galler.</li>
          </ol>

          <h2 className="text-text-primary">En Vänlig Påminnelse</h2>
          <p>Dessa "kakor" är avsedda för en mycket specifik användning och bör hanteras med yttersta försiktighet. Äppelkärnor innehåller amygdalin, som i kroppen kan omvandlas till cyanid. Konsumtion av en tillräcklig mängd kan vara extremt farlig. Vi rekommenderar starkt att du inte konsumerar dessa kakor själv, och att du är medveten om de potentiella riskerna om de serveras till andra.</p>
          <p>Denna "Cookiepolicy" är en metafor för de dolda faror som kan finnas i det digitala landskapet. Precis som en till synes oskyldig kaka kan dölja en dödlig hemlighet, kan även till synes harmlösa digitala spår leda till oväntade konsekvenser. Var alltid vaksam, och lita inte blint på vad som serveras dig.</p>
          <p>Med vänliga hälsningar,</p>
          <p>Ryska Freds – Din guide i den digitala djungeln (och köket).</p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
