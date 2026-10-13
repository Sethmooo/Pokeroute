import { useState, useEffect } from 'react'
import routesData from './routes.json';
import './App.css'

function App() {

  const [selectedRoute, setSelectedRoute] = useState(null);
  const [pokemonWithSprites, setPokemonWithSprites] = useState([]);
  const [loading, setLoading] = useState(false);


useEffect(() => {
    if (!selectedRoute) return;

    async function fetchSprites() {
      setLoading(true);
      try {
        const updatedPokemon = await Promise.all(
          selectedRoute.pokemon.map(async (poke) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name.toLowerCase()}`);
            const data = await response.json();
            return {
              ...poke,
              sprite: data.sprites.front_default,
            };
          })
        );
        setPokemonWithSprites(updatedPokemon);
      } catch (error) {
        console.error("Error fetching Pokémon sprites:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSprites();
  }, [selectedRoute]);


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
                {loading ? (
                  <p>loading sprites...</p>
                ) : ( 
                <ul>
                  {pokemonWithSprites.map((poke, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px'}} >
                      {poke.sprite && <img src={poke.sprite} alt={poke.name} width="48" height="48" />}
                      <span>{poke.name} - {poke.encounterPct}%</span>
                    </li>
                  ))}
                </ul>
                )}
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
