import {scaleOrdinal } from 'd3';


  
const colorScale = scaleOrdinal()
	.domain(['apple','orange'])
	.range(['#c11d1d', 'orange']);

const sizeScale = scaleOrdinal()
	.domain(['apple','orange'])
	.range([50, 40]);
  

const xPosition = (d, i) => i * 120 + 60;

export const fruitBowl = (selection, props) => {
  const {fruits, height} = props;
  const groups = selection.selectAll('g')
  	.data(fruits, d=>d.id);
  
const bowl = selection.selectAll('rect')
    .data([null])
    .enter().append('rect')
      .attr('y', 110)
      .attr('width', 920)
      .attr('height', 300)
      .attr('rx', 300 / 2)
			.attr('fill', '#bafff1'); 
  
  const groupsEnter =	groups.enter().append('g');
  groupsEnter
    .merge(groups)
      .attr('transform', (d,i) => 
          `translate(${i * 120 + 60}, ${height/2})`);



 	const circles = groups.select('circle'); 
  
	groupsEnter.append('circle')
  		.attr('r',0)
  	.merge(groups.select('circle'))
    	.transition().duration(1000)
      	.attr('fill', d => colorScale(d.type)) // put changing attr after merge() call
      	.attr('r', d => sizeScale(d.type));

	const text = selection.selectAll('text')
  	.data(fruits);
  
	groupsEnter.append('text')
  	.merge(text)
    	.text(d=>d.type)

 
  groups.exit().remove();
};





















