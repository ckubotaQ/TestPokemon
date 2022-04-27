import { useState, useEffect } from "react";
import "./styles.css";
//Api
//https://pokeapi.co/
//
// Consume API "https://pokeapi.co/" to get the json response, you will only need the "stats" and "sprites" properties. done
// 2. Replace, the value of the image by the value of "front_default" of the response. done
// 3. create a component that receives the stats name and its base_stat, iterate it to show all the stats in the table.
// 4. When clicking on "Value", sort them in ascending order,
// 5. when clicking on "Value" again, if it is in ascending order, sort them in descending order.
// 6. In the input "Search" enter the name of a pokemon and make a response to the api with that pokemon, that replaces the previous data with the new pokemon.

function App() {
  const getPokemon = async () => {  ;
  console.log(pokemon.body);h(`https://pokeapi.co/api/v2/pokemon/35`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });

    let pokemon = {
      sprites: pokemonRequest.sprites,
      stats: pokemonRequest.stats
    };
    setpokemonInf(pokemon);
    ////return pokem
  };

  const handleCli
  useEffect()

  console.log("answer of function", getPokemon());

  let pokemon = getPokemon();
  const [count, setCount] = useState(0);
  console.log("sprites", pokemon.sprites);//var numbers = [4, 2, 5, 1, 3];
//numbers.sort(function(a, b) {
//  return a - ""
//});front_dornt
// console.log(numbers);
  }

  var values = pokemonInf?.stats?.map(el => {
    console.log(el.base_stat)
  })

  useEffect(() => {
    getPokemon();
    console.logc={pokemonInf?.sprites?.front_default} alt="pikachu"></img>
      <inp{
            asd.map(el => {
              return <td> {el} </td>
            })
          }
          ut type="text" placeholder="Search Pokemon"></input>
      <button className="button">Search</button>
      <h2>Table stats of "Pikachu"</h2>
      <table className="table-wrapper">
        <thead>
          <tr>
            <th>Name Stat</th>
            <th>
              <button onClick={handleClick}> Value </button>
              </th>
          </tr>
        </thead>
        <tbody>
          {pokemonInf?.stats?.map((e, i) => (
            <tr key={i}>
              <td>{e?.stat?.name}</td>
              <td>{e.base_stat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



export default App;
