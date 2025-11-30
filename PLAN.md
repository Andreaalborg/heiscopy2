# Prosjektplan - IMEM Lifts Norway AS Nettside

## Oppsummering fra kundemøte

**Dato:** November 2025  
**Kontaktinfo:**
- Telefon: 21418103
- E-post: post@imemnorway.no

### Kundens ønsker
- Enkel og strukturert nettside
- Ingen åpningstider spesifisert
- Ingen kontaktskjema - kun telefon og e-post
- Ingen "Om oss"-side eller personlig info
- Link mest mulig til IMEM hovedside (https://imem.com/en/)
- Fokus på at de er totallerandør (nyinstallasjon, modernisering, service)
- Vise at de er erfarne fagfolk innen heis
- Sentral godkjenning skal vises naturlig
- Farger skal matche IMEM hovedside

---

## Sidestruktur (Forenklet)

### Sider som BEHOLDES og ENDRES:
1. **Hjemmeside** (`/`) - Forenkles
2. **Kontakt** (`/kontakt`) - Forenkles betydelig
3. **Produkter** (`/produkter`) - NY side (erstatter tjenester)

### Sider som SLETTES:
- ❌ `/om-oss` - Kunden vil ikke ha personlig info
- ❌ `/prosjekter` - Ikke nødvendig i første fase
- ❌ `/tjenester` - Erstattes av `/produkter`

---

## Detaljert Plan - Step by Step

### FASE 1: Opprydding (Fjerne unødvendige filer)

#### 1.1 Slett sider
- [ ] Slett `/app/om-oss/page.tsx`
- [ ] Slett `/app/prosjekter/page.tsx`
- [ ] Slett `/app/tjenester/page.tsx`

#### 1.2 Slett komponenter som ikke trengs
- [ ] Slett `AboutHero.tsx`
- [ ] Slett `Team.tsx`
- [ ] Slett `Timeline.tsx`
- [ ] Slett `ProjectsGallery.tsx`
- [ ] Slett `ProjectsHero.tsx`
- [ ] Slett `ProjectStats.tsx`
- [ ] Slett `ContactForm.tsx` (ingen kontaktskjema)
- [ ] Slett `ServicesHero.tsx`
- [ ] Slett `ServicesList.tsx`
- [ ] Slett `ServiceProcess.tsx`

---

### FASE 2: Oppdater Header/Navigasjon

#### 2.1 Ny navigasjonsstruktur
```
- Hjem (/)
- Produkter (/produkter) → Linker hovedsaklig til imem.com
- Kontakt (/kontakt)
```

#### 2.2 Header endringer
- [ ] Oppdater navigasjonslenker
- [ ] Legg til IMEM logo (fra prosjektmappen)
- [ ] Fjern lenker til slettede sider

---

### FASE 3: Oppdater Hjemmeside (`/`)

#### 3.1 Hero-seksjon
- [ ] Behold, men oppdater tekst
- [ ] Fokus på "Totallerandør innen heis"
- [ ] CTA: "Kontakt oss" og "Se produkter på IMEM.com"
- [ ] Kort om at de er erfarne fagfolk

#### 3.2 Tjenester/Services-seksjon
- [ ] Forenkle til 3-4 hovedtjenester:
  - Nyinstallasjon
  - Modernisering
  - Service & vedlikehold
  - 24/7 nødservice
- [ ] Hver tjeneste linker til relevant side på imem.com

#### 3.3 WhyChooseUs-seksjon
- [ ] Behold, men forenkle
- [ ] Fokus på:
  - Autorisert IMEM-partner
  - Erfarne fagfolk
  - Sentral godkjenning
  - Totallerandør

#### 3.4 CTA-seksjon
- [ ] Forenkle
- [ ] Kun telefon og e-post
- [ ] Link til imem.com for mer info

#### 3.5 Ny seksjon: Om IMEM (kort)
- [ ] Kort tekst om IMEM fra Spania
- [ ] Link til imem.com/en/about
- [ ] Nevn at IMEM Lifts Norway drives av erfarne heisfolk

---

### FASE 4: Opprett Produkter-side (`/produkter`)

#### 4.1 Sidestruktur
- [ ] Opprett `/app/produkter/page.tsx`
- [ ] Hero med "IMEM Produkter"
- [ ] Kort intro om at produktinfo finnes på imem.com

#### 4.2 Produktkategorier (linker til imem.com)
- [ ] Personheiser → https://imem.com/en/lifts/
- [ ] Vareheiser → https://imem.com/en/lifts/
- [ ] Tilgjengelighetsheiser → https://imem.com/en/lifts/
- [ ] Rulletrapper → https://imem.com/en/escalators/
- [ ] Rullende fortau → https://imem.com/en/moving-walks/

#### 4.3 IMEM Connectivity
- [ ] Seksjon om IMEM Connectivity (smart heis-teknologi)
- [ ] Link til https://imem.com/en/connectivity/

---

### FASE 5: Forenkle Kontakt-side (`/kontakt`)

#### 5.1 Fjern
- [ ] Fjern kontaktskjema
- [ ] Fjern åpningstider
- [ ] Fjern kart

#### 5.2 Behold/Legg til
- [ ] Enkel hero med "Kontakt oss"
- [ ] Telefon: 21418103
- [ ] E-post: post@imemnorway.no
- [ ] Eventuelt LinkedIn-lenke
- [ ] Sentral godkjenning badge/info

---

### FASE 6: Footer

#### 6.1 Oppdater Footer
- [ ] Kontaktinfo (telefon, e-post)
- [ ] Navigasjonslenker
- [ ] Link til imem.com
- [ ] Sentral godkjenning logo/badge
- [ ] Copyright

---

### FASE 7: Assets og Bilder

#### 7.1 Kopier logoer til public/images
- [ ] IMEM logo (Imem logo.PNG)
- [ ] Sentral godkjenning logo (SG_GULL_HVITBOKS.png)
- [ ] LinkedIn banner (for referanse)

---

### FASE 8: SEO og Metadata

#### 8.1 Oppdater metadata
- [ ] Tittel: "IMEM Lifts Norway AS - Totallerandør innen heis"
- [ ] Beskrivelse med nøkkelord
- [ ] OpenGraph tags
- [ ] Favicon

---

### FASE 9: Testing og Kvalitetssikring

#### 9.1 Testing
- [ ] Test på mobil
- [ ] Test på desktop
- [ ] Sjekk alle lenker (spesielt til imem.com)
- [ ] Lighthouse-test for ytelse
- [ ] Sjekk at farger matcher imem.com

---

## Filstruktur etter endringer

```
app/
├── page.tsx          # Hjemmeside
├── kontakt/
│   └── page.tsx      # Kontaktside (forenklet)
├── produkter/
│   └── page.tsx      # NY - Produkter med lenker til imem.com
├── layout.tsx
├── globals.css
└── favicon.ico

components/
├── features/
│   ├── Hero.tsx           # Oppdatert
│   ├── Services.tsx       # Oppdatert (tjenester)
│   ├── WhyChooseUs.tsx    # Oppdatert
│   ├── CTA.tsx            # Oppdatert
│   ├── ContactHero.tsx    # Oppdatert
│   ├── ContactInfo.tsx    # Oppdatert (forenklet)
│   ├── Certifications.tsx # Beholdes for sentral godkjenning
│   └── ProductsHero.tsx   # NY
├── layout/
│   ├── Header.tsx         # Oppdatert navigasjon
│   └── Footer.tsx         # Oppdatert
└── ui/
    ├── Button.tsx
    └── Card.tsx

public/images/
├── imem-logo.png
├── sentral-godkjenning.png
└── imem-logo.jpg (eksisterende)
```

---

## Viktige lenker til imem.com

| Kategori | URL |
|----------|-----|
| Hovedside | https://imem.com/en/ |
| Om IMEM | https://imem.com/en/about/ |
| Heiser | https://imem.com/en/lifts/ |
| Rulletrapper | https://imem.com/en/escalators/ |
| Rullende fortau | https://imem.com/en/moving-walks/ |
| Connectivity | https://imem.com/en/connectivity/ |
| Kontakt (hovedkontor) | https://imem.com/en/contact/ |

---

## Prioritert rekkefølge

1. **Høy prioritet:** Opprydding og sletting av unødvendige sider/komponenter
2. **Høy prioritet:** Oppdatere Header med ny navigasjon
3. **Høy prioritet:** Forenkle Kontakt-siden
4. **Medium prioritet:** Oppdatere Hjemmeside-seksjonene
5. **Medium prioritet:** Opprette Produkter-side
6. **Lav prioritet:** Oppdatere Footer
7. **Lav prioritet:** Kopiere logoer og assets
8. **Siste:** SEO og testing

---

## Estimert tidsbruk

| Fase | Estimert tid |
|------|--------------|
| Fase 1: Opprydding | 15 min |
| Fase 2: Header | 20 min |
| Fase 3: Hjemmeside | 45 min |
| Fase 4: Produkter-side | 30 min |
| Fase 5: Kontakt-side | 15 min |
| Fase 6: Footer | 15 min |
| Fase 7: Assets | 10 min |
| Fase 8: SEO | 15 min |
| Fase 9: Testing | 20 min |
| **Totalt** | **~3 timer** |

---

## Klar til å starte?

Når du er klar, starter vi med **Fase 1: Opprydding** - å slette de sidene og komponentene vi ikke trenger.

