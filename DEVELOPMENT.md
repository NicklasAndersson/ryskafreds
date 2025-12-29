# Ryska Freds - Webbplats

En modern React/TypeScript-applikation för Ryska Freds organisation.

## Projektstruktur

```
src/
├── components/           # React komponenter
│   ├── ErrorBoundary.tsx # Felhantering
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   └── ...
├── constants/
│   └── config.ts        # Centraliserade konfigurationer
├── data/
│   ├── newsData.ts      # Nyhetsdata
│   ├── programData.ts   # Programdata
│   └── allNewsData.ts
├── types/
│   └── index.ts         # TypeScript type definitions
├── pages/
│   ├── HomePage.tsx
│   ├── ArticlePage.tsx
│   ├── AllNewsPage.tsx
│   └── ...
├── main.tsx            # Applikationens entrypoint
├── index.css          # Globala stilar
└── vite-env.d.ts      # Vite typer
```

## Utveckling

### Setup
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
```

### Linting
```bash
npm run lint
npm run lint -- --fix  # Åtgärda automatiskt
```

## Arkitektur

### Komponenter
- Alla komponenter är funktionella komponenter med Hooks
- Komponenter är organiserade efter funktion och plats
- Styling använder Tailwind CSS klasser

### State Management
- Enkel lokal state med `useState` för UI-state
- Data hämtas från centraliserade datafiler

### Routing
- React Router v6 för navigering
- Lazy loading är konfigurerat för större sidor

### Felhantering
- `ErrorBoundary` component för att fånga JavaScript-fel
- Graceful fallback UI för felscenarier

## Bästa Praxis

### Kod
1. **Använd konstanter** från `src/constants/config.ts` för konfigurerbara värden
2. **Importera typer** från `src/types/index.ts` för type safety
3. **Undvik magic strings** - använd konstanter istället
4. **Kommenter komplexa logik** - dokumentera varför, inte vad

### Komponenter
1. **Håll komponenter små** - dela upp stora komponenter
2. **Prop drilling minimering** - använd context när nödvändigt
3. **Namngivning** - använd deskriptiva namn som reflekterar syfte
4. **Memoization** - använd `React.memo` för dyra komponenter om nödvändigt

### Styling
1. **Använd Tailwind klasser** - inte inline styles
2. **Wiederanvändbara klasser** - skapa custom components för upprepade mönster
3. **Dark mode** - all styling är redan dark-mode ready

## Gemensamma Uppgifter

### Lägga till en ny nyhet
1. Lägg till artikel i `src/data/allNewsData.ts`
2. Artikeln dyker automatiskt upp på `/nyheter` och hemmsidan

### Lägga till ett nytt program
1. Lägg till program i `src/data/programData.ts`
2. Programmet dyker automatiskt upp på programsidan och kan länkas till

### Ändra externa länkar
1. Uppdatera `EXTERNAL_LINKS` i `src/constants/config.ts`
2. Använd länkarna från denna fil istället för hardkodade URLs

## Performance

- **Lazy loading**: Större sidor lazy loadades automatiskt
- **Image optimization**: Vite plugin optimerar bilder vid build
- **Code splitting**: Router configuration möjliggör automatisk code splitting
- **CSS**: Tailwind purgar oanvänd CSS vid build

## Deployment

```bash
npm run build
```

Deploya mappen `dist/` till din hosting.

## Konfiguration

Alla konfigurerbara värden finns i `src/constants/config.ts`:
- Site name och domain
- Externa länkar
- Routes
- Kontaktinformation
- Site statistik

Uppdatera dessa för att ändra dessa värden utan att söka igenom koden.

## Felsökning

### Komponenten renderas inte
- Kontrollera att komponenten importeras korrekt
- Verifiera att routen är korrekt definierad i `main.tsx`

### Styling saknas
- Kontrollera att `index.css` är importerad
- Verifiera att Tailwind klasser är korrekt stavade

### Bilder visas inte
- Verifiera att bildens sökväg är korrekt
- Kontrollera att bilden finns i `public/images/`

## Bidrag

Vid kodändringar:
1. Kör `npm run lint -- --fix` för att fixa linting-fel
2. Testa lokalt med `npm run dev`
3. Committea ändringar med deskriptiva meddelanden
4. Pusha till main

## Support

För frågor eller problem, kontakta utvecklingsteamet.
