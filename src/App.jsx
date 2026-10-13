import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
   <div className="app-container">
      <header>
          <h1>Kanto Route Guide (MVP)</h1>
      </header>

      <main className="dashboard-grid">

          <section className="routes-section">
            <h2>Select a Route</h2>
            <div className="routes-tiles-grid">
              <div className="route-title">Route 1</div>
              <div className="route-title">Route 2</div>
              <div className="route-title">Route 3</div>
            </div>
          </section>

          <section className="encounter-section">
            <h2>Encounter Rates</h2>
            <p>Click a route on the left to see a wild POKEMON!</p>
          </section>
      </main>
    </div>

  );
}

export default App;
