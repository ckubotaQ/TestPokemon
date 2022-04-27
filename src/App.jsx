import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
//Api
//https://pokeapi.co/
//
// Consume API "https://pokeapi.co/" to get the json response, you will only need the "stats" and "sprites" properties.
// 2. Replace, the value of the image by the value of "front_default" of the response.
// 3. create a component that receives the stats name and its base_stat, iterate it to show all the stats in the table.
// 4. When clicking on "Value", sort them in ascending order, 
// 5. when clicking on "Value" again, if it is in ascending order, sort them in descending order. 
// 6. In the input "Search" enter the name of a pokemon and make a response to the api with that pokemon, that replaces the previous data with the new pokemon.

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
    <h1>Test Pokemon</h1>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    alt="pikachu"
    ></img>
    <input type="text" placeholder="Search Pokemon"
    ></input>
    <button
    className='button'
    >Search</button>
    <h2>Table stats of "Pikachu"</h2>
    <table
    className='table-wrapper'
    >
      <thead>
        <tr>
          <th
          >Name Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr
        >
          <td>hp</td>
          <td>90</td>
        </tr>
        <tr>
          <td>attack</td>
          <td>90</td>
        </tr>
        <tr>
          <td>defense</td>
          <td>49</td>
        </tr>

      </tbody>



    </table>
  </div>
  )
}

export default App
