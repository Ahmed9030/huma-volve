# Huma Volve

A React + Vite frontend app. The current entry point is the Vite starter screen; feature UI lives under `src/pages` and `src/components`.

## Project structure

```
huma-volve/
├── public/                     # Static files (favicon, icons)
├── src/
│   ├── assets/                 # Images and logos
│   ├── components/
│   │   ├── common/             # Shared UI (e.g. EmptyState)
│   │   ├── layout/             # Navbar, Footer
│   │   ├── providers/          # App-level providers
│   │   ├── skeleton/           # Loading placeholders
│   │   └── ui/                 # Base controls (Button, Input)
│   ├── hooks/                  # Custom React hooks
│   ├── pages/                  # Page views (Home, About)
│   ├── App.jsx                 # Root component
│   ├── App.css
│   ├── main.jsx                # App bootstrap
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

| Path | Role |
| --- | --- |
| `src/main.jsx` | Mounts the React app on `#root` |
| `src/App.jsx` | Root UI currently rendered |
| `src/pages/` | Screen-level views |
| `src/components/` | Reusable layout, UI, and helpers |
| `src/hooks/` | Shared hooks such as `useDebounce` |

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes with Node.js)

## Setup and run

Install dependencies:

```bash
npm install
```

Start the development server (hot reload):

```bash
npm run dev
```

Open the URL Vite prints in the terminal (usually `http://localhost:5173`).

## Other commands

| Command | What it does |
| --- | --- |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

Edit files under `src/` and save — Vite will refresh the browser automatically.
