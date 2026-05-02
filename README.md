# FluidSpec

Fluid power component selector for JWF Technologies.  
**Domain:** fluidspec.tech

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (opens at http://localhost:3000)
npm start

# 3. Build for production
npm run build
```

## Project structure

```
src/
├── components/
│   ├── Layout.js          # App shell — header + nav
│   ├── FilterPanel.js     # Left sidebar filter controls
│   └── ResultsTable.js    # Parts results grouped by manufacturer
├── data/
│   └── parts.js           # ← ADD PARTS HERE (all manufacturers)
├── hooks/
│   └── usePartFilter.js   # Filter/search logic
├── pages/
│   ├── SelectorPage.js    # Main selector view
│   ├── AboutPage.js       # About / roadmap
│   └── NotFoundPage.js
└── index.css              # Global CSS variables + resets
```

## Adding parts

Edit `src/data/parts.js`. Each part follows this schema:

```js
{
  id:           'dan-mrv2-10',       // unique — mfr prefix + model slug
  mfr:          'Danfoss',           // must match MANUFACTURERS key
  model:        'MRV2-10',          // display model number
  description:  'Manual Rotary...',  // short description
  ways:         '2-Way',            // '2-Way' | '3-Way' | '4-Way'
  defaultState: 'Normally Closed',  // '' | 'Normally Open' | 'Normally Closed' | 'All ports blocked'
  actuation:    'Manual Rotary',    // see FilterPanel for valid options
  element:      'Spool',            // 'Spool' | 'Poppet'
  maxPsi:       3000,               // number
  maxGpm:       15,                 // number | null
  cavity:       'SDC10-2',          // cavity designation string
  price:        null,               // number | null — populate from distributor
  leadTimeDays: null,               // number | null
  notes:        '',                 // any extra info
}
```

## Deployment (Netlify — easiest for static React)

```bash
npm run build
# Drag the /build folder into Netlify drop zone
# Point fluidspec.tech DNS to Netlify
```

Or use Vercel:
```bash
npx vercel
```

## Roadmap
- [ ] Pricing from distributor accounts
- [ ] Lead time data
- [ ] Bucher, Sun, HAWE, Argo-Hytos, Deltrol, NACHI catalogs
- [ ] Part detail drawer / modal
- [ ] Cross-reference / equivalent finder
- [ ] PDF datasheet links
- [ ] Export filtered results to CSV
- [ ] Authentication for internal-only access
