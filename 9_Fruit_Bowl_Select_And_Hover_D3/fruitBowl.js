import { scaleOrdinal } from 'd3';

const colorScale = scaleOrdinal()
  .domain(['apple', 'lemon'])
  .range(['#c11d1d', '#eae600']);

const radiusScale = scaleOrdinal()
  .domain(['apple', 'lemon'])
  .range([50, 30]);

const xPosition = (d, i) => i * 120 + 60;

export const fruitBowl = (selection, props) => {
  const { 
  	fruits,
   	height,
   	setSelectedFruit, 
  	selectedFruit,
    setClickedFruit,
    clickedFruit
        } = props;
  const circles = selection.selectAll('circle')
    .data(fruits, d => d.id);
  circles
    .enter().append('circle')
      .attr('cx', xPosition)
      .attr('cy', height / 2)
      .attr('r', 0)
    .merge(circles)
      .attr('fill', d => colorScale(d.type)) 
  		.attr('stroke-width', '5px')
  		.attr('stroke', d => {
  			if(d.id == selectedFruit) {
        	return 'blue';
        }
    		if(d.id == clickedFruit) {
        	return 'black';
        }
    		return 'none';
  		})
  		.on('mouseover', d => setSelectedFruit(d.id))
    	.on('mouseout', d => setSelectedFruit(null))
  		.on('click', d => setClickedFruit(d.id))
    .transition().duration(1000)
      .attr('cx', xPosition)
      .attr('r', d => radiusScale(d.type));
  circles.exit()
    .transition().duration(1000)
      .attr('r', 0)
    .remove();
}