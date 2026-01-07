# GitHub Copilot Instructions för Ryska Freds

## Projektöversikt

Detta är en modern React/TypeScript-applikation för Ryska Freds organisation. Projektet använder Vite som byggverktyg, React Router för navigering, och Tailwind CSS för styling.

**Tech Stack:**
- React 18 med TypeScript
- Vite för snabb utveckling och optimerad build
- React Router v6 för routing
- Tailwind CSS för styling
- Lucide React för ikoner
- Sharp för bildoptimering

## Kodningsstandarder

### TypeScript
- Använd TypeScript för ALL ny kod
- Importera typer från `src/types/index.ts` för type safety
- Använd strikta TypeScript-inställningar (se `tsconfig.json`)
- Undvik `any` - använd specifika typer eller `unknown` när nödvändigt

### React-komponenter
- Använd **endast funktionella komponenter** med Hooks
- Komponenter ska vara små och fokuserade på en uppgift
- Använd deskriptiva namn som reflekterar komponentens syfte
- Props ska vara tydligt definierade med TypeScript interfaces
- Använd `React.memo` endast för dyra komponenter där det verkligen behövs

### Filstruktur
```
src/
├── components/        # Återanvändbara React-komponenter
├── pages/            # Sidkomponenter (kopplade till routes)
├── data/             # Centraliserad data
│   ├── allNewsData.ts    # Alla nyhetsartiklar (master list)
│   ├── newsData.ts       # Top 4 artiklar för hemsidan
│   └── programData.ts    # Programinformation
├── constants/        # Konfiguration och konstanter (config.ts)
├── types/            # TypeScript type definitions
└── main.tsx         # Applikationens entrypoint
```

### Namngivningskonventioner
- Komponenter: PascalCase (t.ex. `Header.tsx`, `ArticlePage.tsx`)
- Filer med data: camelCase med beskrivande suffix (t.ex. `newsData.ts`, `programData.ts`)
- Konstanter: UPPER_SNAKE_CASE för konstanter, camelCase för konfigurationsobjekt
- Funktioner: camelCase med verb-substantiv mönster (t.ex. `fetchArticle`, `handleClick`)

## Setup och Kommandon

```bash
# Installation
npm install

# Utveckling (startar dev server)
npm run dev

# Build för produktion
npm run build

# Linting (kontrollera kod)
npm run lint

# Linting med auto-fix
npm run lint -- --fix

# Preview av byggd version
npm run preview
```

## Komponenter och State Management

### State Management
- Använd `useState` för lokal UI-state
- Data kommer från centraliserade datafiler i `src/data/`
- Undvik prop drilling - överväg context för delad state om nödvändigt

### Felhantering
- `ErrorBoundary` component finns för att fånga JavaScript-fel
- Implementera graceful fallback UI för felscenarier
- Logga fel på ett lämpligt sätt för debugging

### Routing
- Använd React Router v6 för all navigering
- Lazy loading är konfigurerat för större sidor
- Routes definieras i `main.tsx`

## Styling med Tailwind CSS

### Styling-regler
1. **Använd endast Tailwind CSS-klasser** - ingen inline CSS med `style` attribut
2. **Dark mode**: All styling ska vara dark-mode ready (projektet använder dark theme)
3. **Responsiv design**: Använd Tailwind responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`)
4. **Återanvändbarhet**: Skapa custom components för upprepade styling-mönster istället för att duplicera klasser

### Tailwind Best Practices
- Gruppera relaterade klasser (layout, spacing, colors, typography)
- Använd Tailwind's utility-first approach
- Utnyttja `@apply` direktivet i CSS endast när absolut nödvändigt
- All CSS purgas automatiskt vid build

## Data Management

### Lägga till ny data

**Nyhetsartikel:**
1. Lägg till artikel i `src/data/allNewsData.ts`
2. Artikeln visas automatiskt på `/nyheter` och hemsidan

**Program:**
1. Lägg till program i `src/data/programData.ts`
2. Programmet visas automatiskt på programsidan

**Externa länkar:**
1. Uppdatera `EXTERNAL_LINKS` i `src/constants/config.ts`
2. Använd alltid konstanter från config istället för hardkodade URLs

### Konstanter och Konfiguration
- **Använd ALLTID** konstanter från `src/constants/config.ts` för konfigurerbara värden
- Undvik "magic strings" och "magic numbers" - definiera dem som konstanter
- Konfigurationsfil innehåller: site name, domain, externa länkar, routes, kontaktinfo, statistik

## Kod-kommentarer

- Kommentera **komplexa logik** - förklara VARFÖR, inte VAD
- Använd JSDoc för publika funktioner och komponenter
- Svenska kommentarer är acceptabelt eftersom projektet är svenskt
- Undvik överflödiga kommentarer som bara upprepar koden

## Performance

Projektet har flera performance-optimeringar:
- **Lazy loading**: Större sidor lazy-loadade automatiskt
- **Image optimization**: Vite plugin optimerar bilder vid build
- **Code splitting**: Router configuration möjliggör automatisk code splitting
- **CSS purging**: Tailwind purgar oanvänd CSS vid build

Behåll dessa optimeringar och lägg till fler där det är lämpligt.

## Testing och Kvalitet

### Linting
- Kör `npm run lint` före varje commit
- Använd `npm run lint -- --fix` för automatiska fixar
- Följ ESLint-reglerna som är konfigurerade i `eslint.config.js`

### Best Practices
- Testa lokalt med `npm run dev` innan du committar
- Verifiera att bygget fungerar med `npm run build`
- Kontrollera att inga TypeScript-fel finns
- Se till att alla bilder och assets finns på rätt plats

## Felsökning

### Vanliga problem

**Komponenten renderas inte:**
- Kontrollera att komponenten importeras korrekt
- Verifiera att routen är definierad i `main.tsx`

**Styling saknas:**
- Kontrollera att `index.css` är importerad
- Verifiera att Tailwind-klasser är korrekt stavade

**Bilder visas inte:**
- Verifiera att bildens sökväg är korrekt
- Kontrollera att bilden finns i `public/images/`

## Deployment

```bash
npm run build
```

Deploya innehållet i `dist/` mappen till hosting.
Build-processen inkluderar:
1. Vite build
2. Automatisk sitemap-generering (`postbuild` npm script körs automatiskt efter build)
3. Bildoptimering

## Viktiga Principer

1. **Enkelhet**: Håll lösningar enkla och underhållbara
2. **Konsekvens**: Följ etablerade mönster i projektet
3. **Type Safety**: Utnyttja TypeScript fullt ut
4. **Performance**: Tänk på laddningstider och användarupplevelse
5. **Tillgänglighet**: Använd semantisk HTML och ARIA-attribut där lämpligt
6. **Dokumentation**: Uppdatera DEVELOPMENT.md när du gör stora ändringar

## Exempel på Kodstil

```typescript
// Bra: Tydlig komponent med TypeScript, funktionell stil
import React from 'react';
import { SITE_NAME } from '../constants/config';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  onClick: () => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ 
  title, 
  excerpt, 
  date, 
  onClick 
}) => {
  return (
    <article 
      className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{excerpt}</p>
      <time className="text-sm text-gray-400">{date}</time>
    </article>
  );
};
```

## Bidragande

Vid kodändringar:
1. Följ dessa instruktioner och befintliga kodstandarder
2. Kör `npm run lint -- --fix` för att fixa linting-fel
3. Testa lokalt med `npm run dev`
4. Verifiera att bygget fungerar med `npm run build`
5. Skapa deskriptiva commit-meddelanden
