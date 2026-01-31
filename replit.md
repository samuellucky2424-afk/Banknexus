# Bank Nexus

## Overview
Bank Nexus is a React-based banking application UI built with Vite, TypeScript, and Tailwind CSS. It provides a modern, responsive interface for digital banking services.

## Tech Stack
- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (via CDN) with custom theme
- **Routing**: React Router DOM v7 (HashRouter)
- **Charts**: Recharts
- **Animations**: GSAP

## Project Structure
- `/pages/` - Page components organized by feature
  - `/auth/` - Login and signup pages
  - `/dashboard/` - User and admin dashboards
  - `/transfer/` - Money transfer flow
  - `/bills/` - Bill payment and mobile top-up
  - `/services/` - Additional services
  - `/recipients/` - Saved recipients management
  - `/scan/` - QR scan to pay
  - `/savings/` - Savings features
  - `/cards/` - Card management
  - `/activity/` - Transaction activity
  - `/hub/` - Feature hub
  - `/settings/` - User settings (personal, security, general)
  - `/notifications/` - Notifications center
- `App.tsx` - Main app component with routing
- `index.tsx` - React entry point
- `index.html` - HTML template with Tailwind config

## Development
- Run `npm run dev` to start the development server on port 5000
- The app uses HashRouter for client-side routing

## Deployment
- Static site deployment
- Build command: `npm run build`
- Output directory: `dist`

## Environment Variables
- `GEMINI_API_KEY` (optional) - Used for AI features if integrated
