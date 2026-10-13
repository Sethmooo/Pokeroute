# Kanto Route Guide (Pokémon FireRed Dashboard)

A dynamic React application for tracking wild Pokémon encounters across Kanto routes in Pokémon FireRed. Built with modern React Hooks and integrated directly with the PokéAPI. For now I wanted to keep the scope small and managable since I am still learing a lot about react and how it works with javascript. I hope this is acceptable. 

## Features
- **Interactive Route Selection:** Select different routes to dynamically view wild Pokémon encounters.
- **Dynamic API Integration:** Automatically fetches official high-res sprites from PokéAPI based on route data.
- **Asynchronous Data Handling:** Efficiently resolves multiple Pokémon sprite requests concurrently using `Promise.all`.
- **Catch Rate Visualization:** Displays encounter percentages alongside each Pokémon sprite and name.

## Tech Stack & Data Sources
- **Frontend Framework:** React + Vite
- **State & Side Effects:** React Hooks (`useState`, `useEffect`)
- **Data Sources:** 
  - Local JSON (`src/routes.json`) for route encounter logic and percentages.
  - [PokéAPI](https://pokeapi.co/) REST endpoints for fetching official sprite artwork dynamically.

## Local Setup & Development

1. **Clone the repository:**
   ```bash
   git clone <YOUR_REPOSITORY_URL>
   cd <YOUR_REPO_FOLDER>