import React from 'react';
import img_src from './components/louis-hansel-DEYK2ecXLUg-unsplash.jpg'
import './RecipeApp.css';
import Recipe from "./components/recipe";

function RecipeApp() {
  return (
    <div className="App">
      <Recipe
          title="pasta"
          ingredients={["flour","water"]}
          img={img_src}
          instructions="Mix Ingredients"
      />
    </div>
  );
}

export default RecipeApp;
