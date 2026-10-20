# Moxie Infratech Pvt Ltd — Official EPC Website

> **Reliable. Scalable. Built to Last.**  
> Turnkey Civil Infrastructure & Electrical Engineering Contractor (11kV to 765kV)

A modern, high-performance web application designed for **Moxie Infratech Pvt Ltd**, showcasing specialized capabilities across high-voltage electrical substations, solar pooling bays, hyperscale data centre infrastructure, industrial electrification, and statutory CEIG approvals.

---

## ⚡ Core Capabilities

- **EHV Substation Civil Works (11kV to 765kV):** Transformer plinths, GIS hall superstructures, blast deflection firewalls, cable basements, and switchyard grading.
- **Electrical Turnkey & Switchyards:** AIS/GIS switchgear erection, high-voltage gantry structures, power transformers up to 100MVA, and numerical protection relay arrays.
- **Industrial Electrification & MEP:** Hyperscale data centre infrastructure, HT/LT power distribution, busduct trunking, and cleanroom MEP installations.
- **Active Fire & Life Safety:** High-velocity water deluge spray systems, nitrogen injection fire protection (NIFPS), and multi-stage fire pumping stations.
- **Statutory CEIG Approvals:** Testing, inspection liaison, drawing approvals, and statutory grid synchronization clearance with state electrical inspectorates.

---

## 🛠️ Technology Stack

- **Frontend Core:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool:** [Vite 8](https://vitejs.dev/) with Hot Module Replacement (HMR)
- **Styling:** Vanilla CSS with custom architectural design tokens (Midnight Graphite `#111820`, Moxie Blue `#1769D2` / `#3598DC`, Cool White `#F5F6F8`, Steel Grey `#C4CDD6`)
- **Iconography:** [Lucide React](https://lucide.dev/)
- **Linting:** [Oxlint](https://oxc.rs/docs/guide/usage/linter)

---

## 📁 Project Structure

```text
moxie/
├── public/
│   ├── favicon.svg             # Moxie emblem favicon
│   ├── images/                 # Genuine infrastructure photos & project assets
│   └── moxie_logo.png          # Official company logo asset
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── BrandLogo.tsx       # SVG vector logo component (light/dark themes)
│   │   ├── Header.tsx          # Navigation header with responsive drawer
│   │   ├── Footer.tsx          # Engineering footer with office contacts
│   │   ├── LoadingScreen.tsx   # Choreographed logo intro loading screen
│   │   ├── ProjectDetailModal.tsx # Full-screen project inspection modal
│   │   └── RFQModal.tsx        # Request for Quotation / tender enquiry modal
│   ├── pages/                  # Main page views
│   │   ├── HomePage.tsx        # Photographic hero, capabilities & featured projects
│   │   ├── AboutPage.tsx       # Leadership credentials, philosophy & governance
│   │   ├── ServicesPage.tsx    # Interactive capability explorer & deliverables
│   │   ├── ProjectsPage.tsx    # Filterable project portfolio with search
│   │   ├── IndustriesPage.tsx  # Sector-specific industrial applications
│   │   └── ContactPage.tsx     # Chennai HQ & Coimbatore branch with enquiry form
│   ├── data/
│   │   └── companyData.ts      # Verified projects, leadership credentials, and scopes
│   ├── App.tsx                 # Root component with routing and modal state
│   ├── main.tsx                # React DOM entry point
│   └── index.css               # Design system tokens and responsive utilities
├── index.html                  # HTML entry point with SEO metadata and font preloads
├── package.json                # Project dependencies and npm scripts
└── tsconfig.json               # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18.0.0 or higher recommended).

### Installation

Clone the repository and install the project dependencies:

```bash
git clone https://github.com/justusrobin2007/Moxie.git
cd Moxie
npm install
```

### Development Server

Start the local Vite development server with hot module replacement:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

Type-check and build the optimized production bundle:

```bash
npm run build
```

The compiled assets will be output to the `dist/` folder.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Code Linting

Run Oxlint to check code quality:

```bash
npm run lint
```

---

## 🏢 Corporate Contact & Offices

- **Corporate Head Office (Chennai):**  
  3/485, Mogappair West, Chennai — 600037, Tamil Nadu, India  
  Phone: `+91 8220223232` | Email: `moxieinfratech@gmail.com`

- **Regional Branch Office (Coimbatore):**  
  11/91, Kamatchipuram, Ondipudur, Coimbatore — 641016, Tamil Nadu, India  

---

## 📄 License & Attribution

© 2026 Moxie Infratech Pvt. Ltd. All rights reserved.  
*Moxie Infratech Pvt Ltd is an independent EPC contractor. Ingaran Power Controls Private Limited is an independent partner entity.*
