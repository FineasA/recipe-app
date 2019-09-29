import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol className={style.ol}>
        {ingredients.map(ingredient => (
          <li className={style.li}>{ingredient.text}</li>
        ))} 
      </ol>
      <p>{calories.toFixed()} cal</p>
      <img className={style.image} src={image} alt=""></img>
    </div>
  );
};

export default Recipe;
