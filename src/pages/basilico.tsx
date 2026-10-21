import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowDown, ArrowRight, Menu, X, Plus, Minus } from 'lucide-react';

type Dish = { name: string; description: string; price: string; allergens: string; tag?: string };
const dishes: Record<string, Dish[]> = {
  'Le pizze': [
    { name: 'Margherita', description: 'Pomodoro, fior di latte, basilico fresco e olio extravergine.', price: '8', allergens: 'Glutine, latte', tag: 'LA CLASSICA' },
    { name: 'Basilico', description: 'Fior di latte, pesto di basilico, pomodorini e stracciatella.', price: '12', allergens: 'Glutine, latte, frutta a guscio', tag: 'LA NOSTRA FIRMA' },
    { name: 'Marinara', description: 'Pomodoro, aglio, origano e olio extravergine. Niente di più.', price: '7', allergens: 'Glutine', tag: 'VEGANA' },
    { name: 'Diavola', description: 'Pomodoro, fior di latte e salame piccante. Con carattere.', price: '10', allergens: 'Glutine, latte' },
    { name: 'Orto di stagione', description: 'Fior di latte e verdure di stagione, arrostite al forno.', price: '11', allergens: 'Glutine, latte', tag: 'VEGETARIANA' },
    { name: 'La Bufala', description: 'Pomodoro, mozzarella di bufala, basilico e olio extravergine.', price: '11', allergens: 'Glutine, latte' },
  ],
  'Per cominciare': [
    { name: 'Bruschette dell’orto', description: 'Pane tostato, pomodorini, basilico fresco e olio extravergine.', price: '6', allergens: 'Glutine', tag: 'VEGANA' },
    { name: 'Burrata e pomodori', description: 'Burrata cremosa, pomodori di stagione e pane caldo.', price: '9', allergens: 'Glutine, latte' },
    { name: 'Crocchè di patate', description: 'Croccanti fuori, morbidi dentro. Con fior di latte.', price: '5', allergens: 'Glutine, latte, uova' },
    { name: 'Il tagliere', description: 'Una selezione di salumi e formaggi, da condividere.', price: '14', allergens: 'Glutine, latte, frutta a guscio' },
  ],
  'Un dolce finale': [
    { name: 'Tiramisù della casa', description: 'Savoiardi, caffè e crema al mascarpone. Un grande classico.', price: '6', allergens: 'Glutine, latte, uova' },
    { name: 'Panna cotta', description: 'Vaniglia e una salsa ai frutti rossi.', price: '5', allergens: 'Latte' },
    { name: 'Delizia al limone', description: 'Pan di Spagna e crema al limone, fresca e delicata.', price: '7', allergens: 'Glutine, latte, uova' },
  ],
  'Da bere': [
    { name: 'Birra artigianale', description: 'Bionda o ambrata, bottiglia da 33 cl.', price: '6', allergens: 'Glutine' },
    { name: 'Calice di vino', description: 'Rosso, bianco o rosato. La nostra selezione della casa.', price: '5', allergens: 'Solfiti' },
    { name: 'Bibite', description: 'Cola, aranciata o limonata, bottiglia da 33 cl.', price: '3,50', allergens: 'Nessuno dichiarato nel menu demo' },
    { name: 'Acqua', description: 'Naturale o frizzante, bottiglia da 75 cl.', price: '2,50', allergens: 'Nessuno' },
  ],
};

export default function Basilico() {
  const [openNav, setOpenNav] = useState(false);
  const [category, setCategory] = useState('Le pizze');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [dialog, setDialog] = useState<string | null>(null);
  const modal = useRef<HTMLDialogElement>(null);
  useEffect(() => { if (dialog) modal.current?.showModal(); else modal.current?.close(); }, [dialog]);
  useEffect(() => { document.body.style.overflow = openNav ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [openNav]);
  const closeNav = () => setOpenNav(false);
  return (
    <>
      <header className="header" id="inizio">
        <nav className="desktop-nav nav-left" aria-label="Navigazione principale"><a href="#filosofia">La nostra filosofia</a><a href="#menu">Il menu</a></nav>
        <a className="brand" href="#inizio" aria-label="Basilico, inizio"><span>basilic<span className="brand-accent">o</span></span><small>PIZZA FATTA CON PASSIONE</small></a>
        <nav className="desktop-nav nav-right" aria-label="Visita e contatti"><a href="#visita">Dove siamo</a><a href="#visita">Contattaci <ArrowUpRight size={15}/></a></nav>
        <button className="hamburger" onClick={() => setOpenNav(!openNav)} aria-label={openNav ? 'Chiudi navigazione' : 'Apri navigazione'} aria-expanded={openNav} aria-controls="mobile-nav">{openNav ? <X/> : <Menu/>}</button>
      </header>
      {openNav && <nav id="mobile-nav" className="mobile-nav" aria-label="Navigazione mobile"><a href="#filosofia" onClick={closeNav}>La nostra filosofia</a><a href="#menu" onClick={closeNav}>Il menu</a><a href="#visita" onClick={closeNav}>Dove siamo</a><a className="mobile-contact" href="#visita" onClick={closeNav}>Contattaci <ArrowUpRight size={24}/></a><p>Una buona pizza ti aspetta.</p></nav>}
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy"><h1 id="hero-title">Solo un<br/>altro <em>morso.</em></h1><p className="hero-description">Impasto lento. Ingredienti sinceri.<br/>La pizza, come piace a noi.</p><a href="#menu" className="button primary">Scopri il menu <ArrowUpRight size={19}/></a><a href="#filosofia" className="hero-scroll"><span>IL SEGRETO È NELLE COSE SEMPLICI</span><ArrowDown size={17}/></a></div>
          <div className="hero-photo"><img src="/images/pizza.jpg" alt="Pizza appena sfornata con pomodoro, mozzarella e basilico fresco" fetchPriority="high"/><div className="photo-caption"><span>Pochi ingredienti. Tutto il gusto.</span></div></div>
        </section>
        <section id="filosofia" className="philosophy section-wrap">
          <div className="story-photo"><img src="/images/impasto.jpg" alt="Mani che stendono un impasto sul banco infarinato" loading="lazy"/><span>LE MANI, IL TEMPO, LA PASSIONE.</span></div>
          <div className="story-copy"><h2>Le cose buone<br/>non hanno <em>fretta.</em></h2><p>Crediamo nelle cose semplici, fatte bene. Nella farina sulle mani, nel tempo che serve all’impasto e nel profumo del basilico appena raccolto.</p><p>La nostra idea di pizza? Un impasto leggero, ingredienti scelti con cura e il piacere di stare insieme. Il resto lo lasciamo al primo morso.</p><a className="text-link" href="#menu">Trova la tua preferita <ArrowRight size={19}/></a></div>
        </section>
        <section id="menu" className="menu-section section-wrap">
          <div className="section-heading"><div><h2>A te la <em>scelta.</em></h2></div><p>Dai grandi classici alle nostre preferite.<br/>Scegli con calma, qui la fretta non c’è.</p></div>
          <div className="menu-toolbar"><div className="categories" role="tablist" aria-label="Categorie del menu">{Object.keys(dishes).map(c => <button key={c} id={`tab-${c}`} role="tab" aria-selected={category === c} aria-controls="menu-panel" className={category === c ? 'active' : ''} onClick={() => { setCategory(c); setExpanded(null); }}>{c}</button>)}</div><span className="demo-label">MENU DIMOSTRATIVO</span></div>
          <div id="menu-panel" className="dish-grid" role="tabpanel" aria-labelledby={`tab-${category}`}>{dishes[category].map(d => <article className="dish" key={d.name}><div className="dish-top"><h3>{d.name}</h3><span className="price">€ {d.price}</span></div>{d.tag && <span className="dish-tag">{d.tag}</span>}<p>{d.description}</p><button className="allergen-toggle" aria-expanded={expanded === d.name} onClick={() => setExpanded(expanded === d.name ? null : d.name)}>Ingredienti e allergeni {expanded === d.name ? <Minus size={12}/> : <Plus size={12}/>}</button>{expanded === d.name && <div className="allergen-detail"><strong>Allergeni:</strong> {d.allergens}.<br/>Informazioni di esempio: verifica sempre con il personale ingredienti e possibili contaminazioni.</div>}</article>)}</div>
        </section>
      </main>
      <footer id="visita" className="visit"><div className="visit-intro"><h2>Una pizza.<br/>Due chiacchiere.<br/><em>Ci vediamo qui.</em></h2><p>Porta chi vuoi. Al buon cibo pensiamo noi.</p><button className="button cream" onClick={() => setDialog('contatti')}>Contattaci <ArrowUpRight size={19}/></button></div><div className="visit-details"><span className="light-demo">INFORMAZIONI DIMOSTRATIVE</span><div><h3>Dove ci trovi</h3><p>Via del Basilico, 12<br/>00100 Roma, Italia</p><button className="light-link" onClick={() => setDialog('indirizzo')}>Indicazioni <ArrowUpRight size={16}/></button></div><div><h3>Quando ci trovi</h3><p className="schedule"><span className="schedule-row"><span>Martedì – Domenica</span><span>19:00 – 23:30</span></span><span className="schedule-row"><span>Lunedì</span><span>Ci riposiamo</span></span></p></div><div><h3>Facciamo due chiacchiere</h3><button className="contact-text" onClick={() => setDialog('contatti')}>+39 06 0000 0000 <ArrowUpRight size={17}/></button><p>ciao@basilico.example</p></div></div><div className="footer-bottom"><p className="footer-copyright">© 2026. All rights reserved</p><p className="footer-demo">Progetto dimostrativo</p></div></footer>
      <dialog ref={modal} className="info-dialog" aria-label="Informazioni sul sito dimostrativo" onCancel={() => setDialog(null)}><button className="dialog-close" onClick={() => setDialog(null)} aria-label="Chiudi"><X/></button><p className="eyebrow">BASILICO · SITO DIMOSTRATIVO</p><h2>{dialog === 'privacy' ? 'La tua privacy.' : dialog === 'indirizzo' ? 'Il nostro indirizzo.' : 'Parliamone.'}</h2><p>{dialog === 'privacy' ? 'Questa pagina non contiene moduli di raccolta dati, account o acquisti. L’informativa completa dovrà essere definita dal gestore prima della pubblicazione del sito reale.' : dialog === 'indirizzo' ? 'Via del Basilico, 12 — Roma è un indirizzo di esempio. Non abbiamo aperto una mappa per evitare di indirizzarti a un luogo non verificato.' : 'Telefono ed email sono dati di esempio, non contatti attivi.'}</p><button className="button primary" onClick={() => setDialog(null)}>Ho capito <ArrowRight size={17}/></button></dialog>
    </>
  );
}