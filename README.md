# LaVadami — Laundry Service Landing Page (Frontend)

## Project Overview
LaVadami is a fictional on-demand laundry and dry cleaning startup offering wash & fold, dry cleaning, and pickup & delivery services for busy urban customers. This repository contains a React single-page landing site for LaVadami.

This project is intentionally a single-page landing (no route switching). Navigation links scroll to sections on the same page.

## What I Implemented
- Single-page landing with in-page anchors for `Home`, `About`, `Services`, `Team`, and `Contact`.
- Reusable components: `Header` and `Footer`.
- Styled with `react-bootstrap` and a Bootswatch theme.
- Dummy data for services and team stored in `src/data/dummyData.js`.
- Mobile-first responsive layout.

## Page Sections (single page)
- `#home` — Hero with brief tagline and primary CTA.
- `#about` — Short background and mission.
- `#services` — Service list and descriptions.
- `#team` — Team member bios.
- `#contact` — Contact info and placeholder form instructions.

## Dummy Data and Assets
All data used in the app is placeholder/dummy data stored under `src/data/dummyData.js` and uses consistent naming conventions.

## Visual Assets
Simple SVG assets (logo and service illustrations) are provided in `src/assets/`:
- `lavadami-logo.svg` — app logo used in the header
- `wash-fold.svg`, `dry-clean.svg`, `pickup-delivery.svg` — small illustrations used on the Services section

## Contact Info
- **Email:** `LaVadami@gmail.com`
- **Phone:** `09982923056`
- **Address:** `Bonifacio St., San Joaquin, Mabalacat City, Pampanga`


## Dependencies
- React 19
- react-scripts (Create React App)
- react-bootstrap
- bootstrap
- bootswatch

## Run locally
From the `frontend` folder, run:

```powershell
cd c:\\Users\\PC\\Downloads\\resources\\frontend
npm install
npm start
```

Open `http://localhost:3000` to view the landing page.

## Notes
- No routing is used; the site is a single static SPA landing page per requirements.
- No AI-generated designs were used. All assets are placeholders.

If you'd like, I can add a contact form handler mock or wire a simple scheduling flow next.
This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
