# Basilico — Pizzeria Artigianale

Sito web responsive e menu digitale per **Basilico**, pizzeria artigianale con impasto a lenta lievitazione e ingredienti della tradizione italiana.

## Caratteristiche

- **Design editoriale raffinato**: palette colori naturale (crema, verde basilico, terracotta), tipografia curata (*DM Serif Display* e *DM Sans*).
- **Menu interattivo**: navigazione per portate (Pizze classiche e speciali, Antipasti, Dolci, Bevande), dettaglio allergeni espandibile per ogni proposta.
- **Accessibilità & UX**: navigazione semantica con ARIA, pieno supporto keyboard/focus, supporto per `prefers-reduced-motion`.
- **Responsive design**: layout ottimizzato sia per schermi desktop che per dispositivi mobile.
- **Zero dipendenze backend**: architettura Single Page Application (SPA) autonoma e veloce, pronta per l'hosting statico (Netlify, Vercel, Cloudflare Pages, S3).

## Stack Tecnologico

- **Framework**: [React 19](https://react.dev/)
- **Build tool**: [Vite 6](https://vitejs.dev/)
- **Routing**: [Wouter](https://github.com/molefrog/wouter)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icone**: [Lucide React](https://lucide.dev/)
- **Linguaggio**: [TypeScript](https://www.typescriptlang.org/)

## Struttura del Progetto

```
basilico/
├── public/                 # Asset statici (immagini, font, favicon)
│   ├── fonts/
│   └── images/
├── src/                    # Codice sorgente React SPA
│   ├── pages/              # Pagine e componenti dell'applicazione (Basilico landing page)
│   ├── App.tsx             # Componente radice con routing
│   ├── main.tsx            # Entrypoint applicativo
│   └── styles.css          # Foglio di stile principale e tema Tailwind
├── index.html              # Template HTML principale
├── vite.config.ts          # Configurazione Vite
└── package.json            # Dipendenze e script di build
```

## Prerequisiti

- [Node.js](https://nodejs.org/) versione 18 o superiore
- [npm](https://www.npmjs.com/) (incluso con Node.js)

## Avvio Rapido

1. **Installazione dipendenze**:
   ```bash
   npm install
   ```

2. **Avvio server di sviluppo**:
   ```bash
   npm run dev
   ```
   L'applicazione sarà accessibile all'indirizzo `http://localhost:5173`.

3. **Compilazione per produzione**:
   ```bash
   npm run build
   ```
   Genera i file ottimizzati nella cartella `dist/`.

4. **Anteprima build di produzione**:
   ```bash
   npm run preview
   ```
