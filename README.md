# Crypto Realtime Dashboard

A real-time cryptocurrency dashboard built with React, TypeScript, and Vite. It fetches and displays live crypto data from the free CoinGecko API, with features like infinite scrolling, favorites, detailed coin info, and dark/light mode.

---

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Pages Description](#pages-description)
- [Recommended Technologies](#recommended-technologies)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [License](#license)

---

## Project Description

This dashboard shows real-time data of popular cryptocurrencies with live updates every 5 seconds. Users can search coins, mark favorites, and view detailed charts and stats for each coin.

---

## Features

### Home Page – Coin List

- Displays popular cryptocurrencies (e.g. Bitcoin, Ethereum)
- Infinite scrolling or pagination for loading more coins
- Each coin displays:
  - Logo and name
  - Current price in USD
  - 24-hour price change percentage
  - 24-hour trading volume
  - 7-day sparkline chart
  - Favorite button (⭐)
- Auto-refresh prices every 5 seconds
- Highlights price changes with color and arrows (green/red, ▲/▼)
- Search bar to filter coins by name
- Dark/light mode toggle with persistence

### Coin Detail Page

- Shows:
  - Current price
  - Percentage changes (1h, 24h, 7d)
  - Market cap, volume, rank
  - Large price history chart (7 or 30 days)

### Favorites List

- Favorite coins via ⭐ button
- Persist favorites in `localStorage`
- Separate tab/page for favorites

### Dark / Light Mode (Optional)

- Toggle switch for theme
- Persist theme choice in `localStorage`

---

## Pages Description

- `/` — Home page with coin list, search, and favorites
- `/detail/:id` — Detail page with full coin data and charts
- `/favorites` — Favorites list page

---

## Recommended Technologies

- **Framework:** React + TypeScript + Vite
- **Styling:** CSS (plain or framework)
- **Charts:** Chart.js
- **API:** CoinGecko API (free & public) and Mock Service Worker for development

---

## Getting Started

```bash
git clone https://github.com/cmdn-hoangnguyen/Crypto-realtime-dashboard.git
cd crypto-realtime-dashboard
npm install
npm run dev
```

---

## Usage

- View the home page to browse coins
- Use search to filter coins by name or search the whole list
- Add favorite coins
- Access favorites in the Favorites tab
- Click a coin to view details with charts
- Toggle dark/light mode with the theme switch

## License

Classmethod © 2025 Hoang nguyen
