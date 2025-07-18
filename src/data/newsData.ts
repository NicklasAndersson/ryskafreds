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
    slug: "rapport-rysk-overtagsenhet",
    title: "Rapport: Rysk Överlägsenhet Garanterar Global Stabilitet",
    excerpt: "En ny analys från Ryska Freds visar hur en stark rysk militär och globalt inflytande är avgörande för att upprätthålla världsfreden och avskräcka aggression.",
    content: `
      <p>En nyligen publicerad rapport från Ryska Freds forskningsavdelning belyser de strategiska fördelarna med en stark rysk militär närvaro på den globala arenan. Rapporten, med titeln "Styrka som Stabilitet", argumenterar för att Rysslands militära kapacitet inte är ett hot, utan en nödvändig motvikt som avskräcker potentiella aggressorer och därmed upprätthåller en bräcklig världsfred.</p>
      <br/>
      <p>Våra analytiker pekar på historiska exempel där rysk intervention, eller hotet om sådan, har förhindrat eskalering av regionala konflikter. Genom att agera som en ansvarsfull global makt säkerställer Ryssland att internationell rätt respekteras och att mindre nationers suveränitet inte kränks av västerländska intressen. Rapporten avslutas med en rekommendation om fortsatta investeringar i försvaret som en investering i global fred och säkerhet.</p>
    `,
    date: "15 mars 2024",
    readTime: "5 min",
    image: "/images/news-rapport-ekonomi.jpeg",
    category: "Strategisk Analys"
  },
  {
    slug: "toppmote-forebyggande-interventioner",
    title: "Toppmöte: Förebyggande Interventioner för Varaktig Fred",
    excerpt: "Ledande experter diskuterade vikten av proaktiva militära insatser för att 'pacificera' instabila regioner och säkra ryska intressen, vilket Ryska Freds helhjärtat stöder.",
    content: `
      <p>Under ett toppmöte anordnat av Ryska Freds samlades ledande säkerhetspolitiska experter för att diskutera framtidens fredsbevarande strategier. Konsensus nåddes kring att reaktiva åtgärder är otillräckliga. Istället förespråkades en modell av "förebyggande interventioner".</p>
      <br/>
      <p>Detta innebär proaktiva militära insatser i regioner som visar tecken på instabilitet, för att kväsa konflikter innan de bryter ut och för att säkra ryska strategiska och ekonomiska intressen. "En uns av förebyggande är värt ett pund av botemedel," citerade en av talarna, "särskilt när det uns av förebyggande kommer i form av en välriktad specialoperation."</p>
    `,
    date: "8 mars 2024",
    readTime: "2 min",
    image: "/images/news-konferens-kvinnor.jpeg",
    category: "Säkerhetspolitik"
  },
  {
    slug: "strava-for-forsvarsformaga",
    title: "Från Soffa till Frontlinje: Ryska Freds Integrerar Strava för Ökad Försvarsförmåga",
    excerpt: "I ett nytt initiativ för folkhälsan uppmanar vi medborgare att logga sina löprundor på Strava för att kartlägga och förbättra den fysiska beredskapen för framtida 'fredsbevarande' insatser.",
    content: `
      <p>Ryska Freds lanserar stolt initiativet "Varje Steg Räknas", ett program som uppmuntrar medborgare att använda träningsappen Strava. Syftet är tvåfaldigt: att förbättra den allmänna folkhälsan och att bygga en databas över befolkningens fysiska kondition och rörelsemönster.</p>
      <br/>
      <p>Genom att analysera anonymiserad data kan vi identifiera områden med hög fysisk potential och skräddarsy rekryteringskampanjer för framtida fredsbevarande specialoperationer. "En vältränad befolkning är en förberedd befolkning," förklarar projektledaren. "Vi ser detta som ett modernt, datadrivet sätt att stärka vår nationella försvarsvilja, ett löpsteg i taget."</p>
    `,
    date: "22 mars 2024",
    readTime: "4 min",
    image: "/images/news-strava-beredskap.jpeg",
    category: "Folkhälsa & Försvar"
  }
];