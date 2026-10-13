# Basilico — design

Landing web responsive basata sul riferimento mobile allegato. Nessun bollino «fatta con amore».

## Identità
Crema #f5f0df, verde basilico #233f2b, terracotta #b5472c. DM Serif Display per logo e titoli, DM Sans per corpo. Titolo hero molto grande, ultima parola in corsivo terracotta. Logo minuscolo.

Navbar approvata: logo esattamente centrato e payoff conservato, due aree laterali uguali con filosofia/menu a sinistra e dove siamo/contattaci a destra. Contatto come link con freccia, niente bottone. Fondo crema e bordo verde sottile; hover terracotta sottolineato. Header compatto non sticky. Mobile: logo centrato e hamburger a destra con spazio simmetrico a sinistra; Contattaci in fondo al menu.

## Layout
Desktop: header arioso, hero testo/foto 50/50, storia editoriale, menu a righe su due colonne, blocco visita verde come unico footer semantico fuori dal main. Mobile: titolo centrato e foto full-width, hamburger e sezioni impilate. Margini 64px desktop e 24px mobile, spazio sezioni 100/64px. Footer con padding verticale 32px desktop e 24px sopra/20px sotto mobile. Rimosso il vecchio footer crema e il testo «Il posto giusto è a tavola»; altri contenuti del blocco visita invariati. Rimossi fascia ingredienti, soprattitoli hero/storia/menu e nota finale menu su richiesta. Bordi sottili, niente card generiche. Foto vere e calde di pizza e impasto.

## Flussi
Navigazione anchor, menu per categorie e dettagli allergeni espandibili. Contatti demo aprono dialog informativo e non chiamano numeri fittizi. Nessun acquisto, ordine o prenotazione reale. Dati demo chiaramente identificati. Focus visibile, ARIA, reduced motion.

## File e architettura
Solo frontend web: pages/index.tsx compone pages/basilico.tsx, styles.css e metadati index.html. Asset in public/images. Nessuna nuova API o tabella database.