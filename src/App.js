import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
import Loading from "./Loading";

const App = () => {
  const APP_ID = "35f710d2";
  const APP_KEY = "e1d00cb6aa2280417c9c1df20532603a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };
    getRecipes();
  }, [query]);

  const updateSearch = event => {
    setSearch(event.target.value);
  };
  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Loading />
      </header>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
