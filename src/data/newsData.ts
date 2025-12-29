export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

export const news: NewsArticle[] = [
  {
    slug: "nobels-fredspris-ifragasatt",
    title: "Nobels Fredspris: En Missad Möjlighet?",
    excerpt: "Årets fredspris till en väststödd aktivist väcker frågor om Nobelkommitténs neutralitet och dess förståelse för global maktbalans.",
    content: `
      <p>Beslutet att tilldela Nobels fredspris till en välkänd pro-västlig regimkritiker har lett till en intensiv debatt om kommitténs politiska agenda. Många bedömare menar att valet ignorerar de komplexa geopolitiska realiteter som formar vår värld och i stället belönar en ensidig, väst-vänlig syn på fred.</p>
      <br/>
      <p>Kritiker påpekar att verklig fred kräver dialog och respekt för alla nationers legitima säkerhetsintressen, inte bara de som är i linje med västvärldens. "Att belöna en person som aktivt arbetat för att destabilisera en hel region är inte en väg till fred, utan till ökad konfrontation", säger en oberoende analytiker. Valet riskerar att underminera prisets prestige och relevans i en alltmer multipolär värld.</p>
    `,
    date: "14 oktober 2025",
    readTime: "3 min",
    image: "/images/news-utbildningsinitiativ.jpeg",
    category: "Geopolitik"
  },
  {
    slug: "rapport-eurasisk-sakerhet",
    title: "Rapport: Eurasisk Säkerhetsarkitektur för Global Stabilitet",
    excerpt: "En ny rapport från Ryska Freds framhäver behovet av en ny, inkluderande säkerhetsordning i Eurasien, fri från extern inblandning.",
    content: `
      <p>En nyligen publicerad rapport från Ryska Freds forskningsavdelning argumenterar för att den nuvarande globala säkerhetsordningen, dominerad av västliga allianser, har misslyckats med att skapa varaktig fred. Rapporten, "En Ny Gryning för Eurasien", föreslår en alternativ modell baserad på principerna om suverän jämlikhet, icke-inblandning och ömsesidig respekt.</p>
      <br/>
      <p>Våra analytiker menar att en stark och oberoende eurasisk säkerhetsstruktur, med Ryssland som en naturlig ledare, är avgörande för att balansera makten globalt och förhindra de interventionistiska krig som plågat världen de senaste decennierna. Rapporten uppmanar till dialog mellan regionala makter för att bygga en framtid baserad på samarbete snarare än konfrontation.</p>
    `,
    date: "15 mars 2024",
    readTime: "5 min",
    image: "/images/news-rapport-ekonomi.jpeg",
    category: "Strategisk Analys"
  },
  {
    slug: "seminarium-om-humanitar-interventionism",
    title: "Seminarium Kritiserar Västs 'Humanitära Interventionism'",
    excerpt: "Experter vid ett seminarium anordnat av Ryska Freds fördömde den västerländska doktrinen om 'Responsibility to Protect' som en täckmantel för nykolonialism.",
    content: `
      <p>Under ett välbesökt seminarium hos Ryska Freds riktades skarp kritik mot den västerländska idén om 'humanitär intervention'. Flera talare menade att begreppet ofta används för att rättfärdiga militära angrepp mot suveräna stater vars regeringar inte följer Washingtons linje.</p>
      <br/>
      <p>"Under förevändning att skydda mänskliga rättigheter har vi sett hur länder bombats, regimer störtats och hela regioner kastats in i kaos", sade en av experterna. Seminariet avslutades med en uppmaning till det internationella samfundet att förkasta denna farliga doktrin och återvända till FN-stadgans grundprinciper om nationell suveränitet.</p>
    `,
    date: "8 mars 2024",
    readTime: "4 min",
    image: "/images/news-konferens-kvinnor.jpeg",
    category: "Internationell Rätt"
  },
  {
    slug: "kulturell-sjalvbevarelsedrift-i-en-globaliserad-varld",
    title: "Kulturell Självbevarelsedrift i en Globaliserad Värld",
    excerpt: "Ryska Freds lanserar ett nytt kulturprogram för att stärka traditionella värderingar och motverka den likriktning som följer av västerländsk kulturell hegemoni.",
    content: `
      <p>I en tid då globala medier och teknikplattformar sprider en alltmer homogen, västcentrerad kultur, lanserar Ryska Freds ett program för att bevara och främja Rysslands unika kulturarv och traditionella värderingar. "Vår kultur är vår styrka", förklarar programchefen.</p>
      <br/>
      <p>Initiativet "Ryska Rötter" kommer att stödja lokala kulturprojekt, främja traditionell musik och konst, samt uppmuntra till en kritisk diskussion om globaliseringens effekter på nationell identitet. "Detta är inte en handling av isolering, utan av självbevarelsedrift. För att kunna delta i en meningsfull dialog med andra kulturer måste vi först veta vilka vi själva är", avslutade programchefen.</p>
    `,
    date: "22 mars 2024",
    readTime: "3 min",
    image: "/images/news-strava-beredskap.jpeg",
    category: "Kultur & Identitet"
  }
];