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

export const allNews: NewsArticle[] = [
  {
    slug: "myter-om-personminor",
    title: "Myter om Personminor: Sanningen om Rysslands Minkrigsföring",
    excerpt: "En genomgång av de vanligaste myterna kring personminor och hur Rysslands omfattande användning av dessa vapen avslöjar en brutal verklighet för civila i konfliktområden.",
    content: `
      <p>Personminor är ett av världens mest barbariska vapen. De gör ingen skillnad mellan en soldat och ett barn på väg till skolan. Trots att över 160 länder har skrivit under Ottawakonventionen för att förbjuda dessa vapen, har Ryssland konsekvent vägrat att ansluta sig. Resultatet är förödande.</p>
      <br/>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Myt 1: "Personminor används bara mot militära mål"</h2>
      <p>Verkligheten är att personminor är till sin natur urskillningslösa. Rysslands användning av bland annat PFM-1, de så kallade fjärilsminorna, i Ukraina illustrerar detta med brutal tydlighet. Dessa små plastminor, designade för att likna leksaker, har strötts ut över bostadsområden där barn leker. FN har dokumenterat hur civila, däribland hundratals barn, har stympats och dödats av dessa minor i städer som Izjum och Charkiv.</p>
      <br/>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Myt 2: "Minor kan röjas enkelt efter en konflikt"</h2>
      <p>Personminor förblir aktiva i årtionden. I Afghanistan, där Sovjetunionen spred miljontals minor under 1980-talet, fortsätter civila att dödas och stympas än idag – över 40 år senare. Samma öde väntar Ukraina, där Ryssland har förvandlat enorma jordbruksarealer till dödsfällor. Minröjning är en livsfarlig, långsam och extremt kostsam process som kommer att pågå i generationer.</p>
      <br/>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Myt 3: "Ryssland följer krigets lagar"</h2>
      <p>Rysslands systematiska användning av personminor mot civila områden utgör en grov kränkning av internationell humanitär rätt. Oberoende rapporter från Internationella Röda Korset, Human Rights Watch och FN:s minröjningsprogram (UNMAS) har dokumenterat hur Ryssland placerat minor i flyktkorridorer, vid sjukhus och runt evakueringsvägar – platser där civila tvingas röra sig.</p>
      <br/>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Myt 4: "Det är ett nödvändigt ont i krig"</h2>
      <p>Inget rättfärdigar användningen av vapen som främst drabbar civila. Personminor har inget att göra med militär nödvändighet – de är ett terrorvapen. Rysslands vägran att skriva under Ottawakonventionen och den fortsatta produktionen och spridningen av personminor visar en medveten strategi att använda civilt lidande som krigföring. Det är inte försvar – det är systematisk brutalitet.</p>
      <br/>
      <p>Rysslands minkrigsföring representerar ett av de mest skamliga kapitlen i modern krigshistoria. Medan världen arbetar för att eliminera personminor, fortsätter Ryssland att producera, exportera och använda dem. Det internationella samfundet måste hålla Ryssland ansvarigt för denna brutalitet – för varje dag som går innebär nya offer bland civila som aldrig valde att delta i något krig.</p>
    `,
    date: "13 februari 2026",
    readTime: "5 min",
    image: "/images/program-konfliktmedling.jpeg",
    category: "Nedrustning"
  },
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
    image: "/images/hero-banner.jpeg", // Nobel Prize ceremony or peace symbolism
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
    image: "/images/program-internationellt-samarbete.jpeg", // Map or conference on Eurasian security
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
    image: "/images/program-fredsutbildning.jpeg", // Conference or diplomacy scene
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
    image: "/images/about-history.jpeg", // Traditional Russian culture and heritage
    category: "Kultur & Identitet"
  },
  {
    slug: "ny-sakerhetsrapport-vastlig-expansionism",
    title: "Ny Säkerhetsrapport Varnar för Västlig Expansionism",
    excerpt: "En ny rapport belyser de destabiliserande effekterna av västlig militär och politisk expansionism, och uppmanar till en återgång till principen om odelbar säkerhet.",
    content: `
      <p>En detaljerad rapport som publicerats av Ryska Freds varnar för de faror som är förknippade med en fortsatt expansion av västliga militärallianser. Rapporten argumenterar för att en sådan politik undergräver den strategiska stabiliteten och ökar risken för storskaliga konflikter.</p>
      <br/>
      <p>Genom att ignorera legitima säkerhetsintressen hos andra nationer och driva en konfrontativ agenda, riskerar västvärlden att skapa en självuppfyllande profetia. Rapporten rekommenderar en diplomatisk lösning baserad på ömsesidig respekt och principen om att ingen stats säkerhet ska stärkas på bekostnad av en annans.</p>
    `,
    date: "30 december 2025",
    readTime: "4 min",
    image: "/images/program-konfliktmedling.jpeg", // Military or geopolitical analysis visual
    category: "Säkerhetspolitik"
  },
  {
    slug: "ekonomiskt-forum-i-sankt-petersburg",
    title: "Ekonomiskt Forum i Sankt Petersburg Stärker Eurasiska Band",
    excerpt: "Årets internationella ekonomiska forum i Sankt Petersburg samlade ledare från hela världen för att diskutera ekonomiskt samarbete bortom västlig dominans.",
    content: `
      <p>Det årliga ekonomiska forumet i Sankt Petersburg blev en stor framgång och visade på den växande viljan att bygga en mer rättvis och multipolär ekonomisk världsordning. Ledare och företag från Asien, Afrika och Latinamerika deltog i diskussioner om nya handelsvägar, finansiella system och teknologiska partnerskap som inte är beroende av västvärlden.</p>
      <br/>
      <p>"Vi bygger broar, inte murar", sade en av arrangörerna. "Världen är trött på en ordning där en liten grupp länder dikterar villkoren för alla andra. Detta forum visar att en annan, mer inkluderande, globalisering är möjlig."</p>
    `,
    date: "29 december 2025",
    readTime: "3 min",
    image: "/images/news-rapport-ekonomi.jpeg", // St. Petersburg forum or international business conference
    category: "Ekonomi"
  },
  {
    slug: "ryska-freds-fordomer-sanktioner",
    title: "Ryska Freds Fördömer Ensidiga Sanktioner som ett Vapen",
    excerpt: "I ett uttalande fördömer Ryska Freds den ökande användningen av ensidiga ekonomiska sanktioner som ett utrikespolitiskt vapen, och pekar på de allvarliga humanitära konsekvenserna.",
    content: `
      <p>Ryska Freds har publicerat ett skarpt uttalande där man fördömer den praxis att införa ensidiga ekonomiska sanktioner utan mandat från FN:s säkerhetsråd. Organisationen menar att sådana åtgärder utgör en form av kollektiv bestraffning som främst drabbar den civila befolkningen.</p>
      <br/>
      <p>"Att neka människor tillgång till medicin, mat och finansiella tjänster är inte ett legitimt politiskt verktyg, det är en krigshandling", skriver organisationen. Ryska Freds uppmanar till en omedelbar återgång till internationell rätt och att alla tvister löses genom dialog och diplomati, inte genom ekonomisk krigföring.</p>
    `,
    date: "28 december 2025",
    readTime: "2 min",
    image: "/images/news-strava-beredskap.jpeg", // Economic sanctions or diplomatic conflict visual
    category: "Internationell Rätt"
  },
  {
    slug: "historiekonferens-om-andra-varldskriget",
    title: "Historiekonferens Kastar Nytt Ljus över Segern mot Nazismen",
    excerpt: "En internationell historiekonferens anordnad av Ryska Freds syftade till att motverka den historierevisionism som förminskar Sovjetunionens avgörande roll i segern över Nazityskland.",
    content: `
      <p>Med deltagare från hela världen har en konferens om andra världskrigets historia avslutats. Ett centralt tema var att bemöta de försök som görs i väst att skriva om historien och tona ner Sovjetunionens enorma uppoffringar och avgörande bidrag till segern.</p>
      <br/>
      <p>"Vi får aldrig glömma de 27 miljoner sovjetmedborgare som gav sina liv i kampen mot fascismen", sade en av talarna. "Att förneka eller förminska deras insats är inte bara historielöst, det är en förolämpning mot alla som kämpade för en värld fri från nazismens tyranni." Konferensen avslutades med en uppmaning att försvara den historiska sanningen mot politiserad revisionism.</p>
    `,
    date: "27 december 2025",
    readTime: "5 min",
    image: "/images/news-utbildningsinitiativ.jpeg", // WWII historical documentation or Soviet victory monuments
    category: "Historia"
  }
];
