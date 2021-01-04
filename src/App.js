import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const APP_ID = "831b3738";
  const APP_KEY = "3dcdb327919fcba4fde08cb6bd58e67f";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  /*
      useState is a hook from react

      What is a hook?
      A hook is a special function that let's you 'hook' into react freatures

      useState sets the initial state (value) of our variable
  */
  
  /*
    useEffect

    Code block executes on first render
    [] - Prevents effect from executing anytime the page rerenders
    [counter] - Effect will run when [counter] state is changed
  */
  useEffect(() => {
    getReceipes();
  }, [query]);

  /*
    Synchronous programming model - Things happen one at a time
    Asynchronous model means multiple things can happen at the same time
      When you call an event the program continues to run 
      When the event is finished the program is informed an accessess the result

    await - Requesting data from an API from a third party can take time
      Await waits for the api to return a response before executing

    fetch - Provides a generic request and response object (things involved with network request)
      fetch expects a promise
      fetch won't reject http error status
      fetch can recieve cross-site cookies
      fetch won't sent cookies
  */
  const getReceipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text"
          value={search} 
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
          key={""}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
