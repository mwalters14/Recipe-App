import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients, id }) => {
  return (
    <Router>
    <li className={style.img__wrap}>
      <img className={style.food_photo}  src={image} alt="" />
      <div className={style.img__description_layer}>
      <Link to={ '/details' }><h1 className={style.img__title}>{title}</h1></Link>
      </div>
    </li>
    <Switch>
          <Route path="/details/">
            <Details />
          </Route>
        </Switch>
    </Router>
  );
};

function Details(id) {
  return <h2>Details</h2>
}
function roundCalories(calories) {
    let roundOff = (num, places) => { const x = Math.pow(10,places); return Math.round(num * x) / x; } 
    return(roundOff(calories, 2));
}

export default Recipe;
