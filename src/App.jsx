import { useState } from 'react'
import routesData from './routes.json';
import './App.css'

function App() {

  const [selectedRoute, setSelectedRoute] = useState(null);


  return (
   <div className="app-container">
      <header>
          <h1>Kanto Route Guide (MVP)</h1>
      </header>

      <main className="dashboard-grid">

          <section className="routes-section">
            <h2>Select a Route</h2>
              <div className="route-tiles-grid">
                {routesData.map((route) => (   /* this line is the loop it's what map() is doing */
                  <div /* everything in this div is the event this is where we can click on the routes*/
                    key={routesData.id}
                    className="route-tile"
                    onClick={() => setSelectedRoute(route)}
                  >
                {route.route}
                </div>
                ))}
                </div>
          </section>

          <section className="encounter-section">
            <h2>Encounter Rates</h2>
            {selectedRoute ? (
              <div>
                <h3>{selectedRoute.route} Encounters</h3>
                <ul>
                  {selectedRoute.pokemon.map((poke, index) => (
                    <li key={index}>
                      {poke.name} - {poke.encounterPct}%
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>Click a route on the left to see wild Pokémon!</p>
            )}
          </section>
      </main>
    </div>

  );
}

export default App;
