import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {roundCalories(calories)}</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

function roundCalories(calories) {
    let roundOff = (num, places) => { const x = Math.pow(10,places); return Math.round(num * x) / x; } 
    return(roundOff(calories, 2));
}

export default Recipe;
