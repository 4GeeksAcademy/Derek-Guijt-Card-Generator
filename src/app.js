/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let values = ["2", "3", "4", "5", "6", "7",8,9,10,j,q,k,a];
let suits = ["♠", "♥", "♣", "♦"];

let randomValue = () => {
  return Math.floor(Math.random()*values.length);
}

let randomSuits = () => {
  return Math.floor(Math.random()*suits.length);
}

(window.onload = function() {
  let suitIndex = randomSuits();
  let suit = suits[suitIndex];

  let vauleIndex = values[randomValue()];
  console.log(suit+vauleIndex+suit);
})

