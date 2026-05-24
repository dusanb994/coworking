# Hub Coworking

Statički sajt za coworking space — čist HTML, CSS i JavaScript, bez frameworka i build alata.

## Stranice

| Stranica | Fajl | Opis |
|----------|------|------|
| Početna | `index.html` | Hero, uvod, sadržaji, galerija, preview cenovnika |
| Cenovnik | `cenovnik.html` | 3 paketa + tabela poređenja |
| O nama | `o-nama.html` | Priča, vrednosti, prostor, statistike |
| Kontakt | `kontakt.html` | Kontakt forma, info, mapa |

## Pokretanje

**Najjednostavnije:** otvorite `index.html` duplim klikom u browseru.

**Sa lokalnim serverom** (preporučeno za testiranje):

```bash
npx serve .
```

Zatim otvorite `http://localhost:3000`.

## Struktura

```
coworking/
├── index.html
├── cenovnik.html
├── o-nama.html
├── kontakt.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    └── images/
```

## Prilagođavanje

### Brend i kontakt podaci

Zamenite placeholder podatke u svakom HTML fajlu:

- **Ime:** Hub Coworking
- **Adresa:** Bulevar Mihajla Pupina 10ž, YU Biznis Centar, Novi Beograd
- **Email:** info@hubcoworking.rs
- **Telefon:** +381 11 123 4567

### Cene

Cene se nalaze u `cenovnik.html` i `index.html` (pricing preview sekcija):

- Fiksno radno mesto: 250€/mesec
- Klizno radno mesto: 200€/mesec
- Dnevni pristup: 15€/dan

### Slike

Slike koriste Unsplash URL-ove. Za produkciju, preuzmite slike u `assets/images/` i ažurirajte `src` atribute.

### Boje i fontovi

Dizajn tokeni su u `css/styles.css` na vrhu (`:root`):

- Akcent boja: `#C4704A`
- Pozadina: `#FAF8F5`
- Fontovi: DM Sans + Fraunces (Google Fonts)

## Funkcionalnosti (JS)

- Responsive hamburger meni
- Sticky header sa senkom na scroll
- Fade-in animacije sekcija (IntersectionObserver)
- Validacija kontakt forme (client-side, bez backend-a)
