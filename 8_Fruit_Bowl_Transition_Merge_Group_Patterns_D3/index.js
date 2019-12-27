import { select, range, scaleOrdinal } from 'd3';
import { fruitBowl } from './fruitBowl';

const svg = select('svg');
svg.style('background-color', '#fdffe3');


const render = () => {
	fruitBowl(svg, {
    fruits,
    height:+svg.attr('height')
  })
};

const makeFruit = type => ({ 
  type,
	id: Math.random()});

let fruits = range(5).map(() => makeFruit('apple'));

render();


// eats an apple
setTimeout(() => {
  fruits.pop();
  render();
}, 1000);


// replaces an apple with orange
setTimeout(() => {
  fruits[2].type = 'orange';
  render();
}, 2000);


// eats an apple
setTimeout(() => {
  fruits = fruits.filter((d,i) => i !== 1); // leave out apple at index 1
  render();
}, 3000);




