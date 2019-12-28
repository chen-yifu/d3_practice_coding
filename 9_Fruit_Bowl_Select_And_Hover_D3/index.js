import { select, range } from 'd3';
import { fruitBowl } from './fruitBowl';

const svg = select('svg');

const makeFruit = type => ({
  type,
  id: Math.random()
});
let fruits = range(5)
  .map(() => makeFruit('apple'));

let selectedFruit = null;
let clickedFruit = null;
 
const setSelectedFruit = id => {
	selectedFruit = id;
  render();
};
 
const setClickedFruit = id => {
	clickedFruit = id;
  render();

};

const render = () => {
  fruitBowl(svg, {
    fruits,
    height: +svg.attr('height'),
    setSelectedFruit,
    selectedFruit,
    setClickedFruit,
    clickedFruit
  });
};

render();

// Eat an apple.
setTimeout(() => {
  fruits.pop();
  render();
}, 1000);

// Replacing an apple with a lemon.
setTimeout(() => {
  fruits[2].type = 'lemon';
  render();
}, 2000);

// Eat an apple.
setTimeout(() => {
  fruits = fruits.filter((d, i) => i !== 1);
  render();
}, 3000);