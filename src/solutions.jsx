import { useEffect, useState } from "react";
import "./styles.css";
//Api
//https://pokeapi.co/
//
// 1. Consume API "https://pokeapi.co/" to get the json response, you will only need the "stats" and "sprites" properties.
// 2. Replace, the value of the image by the value of "front_default" of the response.
// 3. create a component that receives the stats name and its base_stat, iterate it to show all the stats in the table.
// 4. When clicking on "Value", sort them in ascending order,
// 5. when clicking on "Value" again, if it is in ascending order, sort them in descending order.
// 6. In the input "Search" enter the name of a pokemon and make a response to the api with that pokemon, that replaces the previous data with the new pokemon.

function App() {
  const [pokemonPhoto, setpokemonPhoto] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  );
  const [order, setorder] = useState(false);
  const [statsPokemon, setstatsPokemon] = useState([]);
  const [namePokemon, setnamePokemon] = useState("charizard");
  const getPokemonInfo = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + namePokemon)
      .then((response) => response.json())
      .then((data) => {
        setpokemonPhoto(data?.sprites?.front_default);
        setstatsPokemon(data?.stats);
      });
  };
  useEffect(() => {
    getPokemonInfo();
  }, []);
  const handleOrder = () => {
    let getOrder = statsPokemon;
    let newOrder = order
      ? getOrder.sort(function (a, b) {
          return a.base_stat - b.base_stat;
        })
      : getOrder.sort(function (a, b) {
          return b.base_stat - a.base_stat;
        });
    setorder(!order);
    setstatsPokemon([...newOrder]);
  };
  return (
    <div className="App">
      <h1>Test Pokemon</h1>
      <img src={pokemonPhoto} alt="pikachu"></img>
      <input
        onChange={(e) => {
          setnamePokemon(e.target.value);
        }}
        type="text"
        placeholder="Search Pokemon"
      ></input>
      <button
        onClick={() => {
          getPokemonInfo();
        }}
        className="button"
      >
        Search
      </button>
      <h2>Table stats of "Pikachu"</h2>
      <table className="table-wrapper">
        <thead>
          <tr>
            <th>Name Stat</th>
            <th onClick={handleOrder}>Value</th>
          </tr>
        </thead>
        <tbody>
          {statsPokemon?.map((e, i) => (
            <tr key={i}>
              <td>{e?.stat?.name}</td>
              <td>{e?.base_stat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
