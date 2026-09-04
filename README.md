# Kurhe Estates — Infinia Website (MERN)

A futuristic-editorial marketing site for **Kurhe Estates**' *Infinia* project
(3 BHK luxury flats, Amravati), built as a full MERN stack app:

- **client/** — React 18 + Vite, no CSS framework (hand-built design system in `src/index.css`)
- **server/** — Express + Mongoose REST API (enquiry form leads + property data)

Design direction: dark charcoal ground, gold/copper accents lifted from your
brochure, Playfair Display + Jost + JetBrains Mono type system, and a
signature scroll-progress mark built from the Kurhe skyline logo.

A ready-to-open static preview of the same design (no build step) is in
`../preview/index.html` if you just want to look at it in a browser first.

## 1. Prerequisites

- Node.js 18+
- A MongoDB database — either [MongoDB Atlas](https://www.mongodb.com/atlas) (free tier is fine) or a local `mongod`

## 2. Server setup

```bash
cd server
cp .env.example .env      # then edit MONGO_URI with your connection string
npm install
npm run seed               # loads the Infinia property document into MongoDB
npm run dev                 # starts the API on http://localhost:5000
```

## 3. Client setup

```bash
cd client
cp .env.example .env
npm install
npm run dev                 # starts the site on http://localhost:5173
```

The Vite dev server proxies `/api/*` to `http://localhost:5000`, so the
enquiry form on the Contact section will post straight to your Express API
and land in the `inquiries` collection.

## 4. Project structure

```
kurhe-estates/
├── client/
│   ├── public/assets/        # logo + brochure imagery, extracted at full res
│   └── src/
│       ├── components/       # Nav, Footer, ProgressMark (signature element)
│       ├── sections/         # Hero, Residences, Specifications, Amenities...
│       ├── data/infinia.js   # content mirror of the seeded Property doc
│       ├── hooks/useReveal.js
│       └── api/inquiries.js
└── server/
    ├── models/                # Inquiry.js, Property.js
    ├── routes/                # /api/inquiries, /api/properties
    ├── seed/seedInfinia.js
    └── server.js
```

## 5. API reference

| Method | Route                  | Purpose                                   |
|--------|-------------------------|--------------------------------------------|
| GET    | `/api/health`           | Liveness check                             |
| GET    | `/api/properties`       | List all properties                        |
| GET    | `/api/properties/:name` | Fetch one property (e.g. `Infinia`)        |
| POST   | `/api/inquiries`        | Create a lead from the enquiry form        |
| GET    | `/api/inquiries`        | List leads (admin use)                     |
| PATCH  | `/api/inquiries/:id`    | Update a lead's status (admin use)         |

## 6. Deploying

- **Client**: `npm run build` in `client/` produces static files in `client/dist` —
  deploy to Vercel, Netlify, or serve them from Express with `express.static`.
- **Server**: deploy to Render, Railway, or any Node host; set `MONGO_URI`,
  `CLIENT_ORIGIN` and `PORT` as environment variables.
- Point `VITE_API_BASE` in the client's `.env` at your deployed API URL before building.

## 7. Content source

All copy, dimensions, specifications and imagery are taken directly from the
Infinia brochure you provided (Architect: Ar. Girish Nagpure; RCC Consultant:
Pankaj Deshmukh; Legal Advisor: Adv. Vaibhav Kakarde). Update
`server/seed/seedInfinia.js` and `client/src/data/infinia.js` together if
project details change.
