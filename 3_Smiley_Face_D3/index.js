import { select, arc } from 'd3'

const svg = select('svg');
svg.style('background-color', '#96fab1');



const height = svg.attr('height');
const width = svg.attr('width');
const eyeSpacing = 100;
const eyeOffset = 80;
const mouthOffset = 50;
const noseOffset = 20;
const eyebrowWidth = 80;
const eyebrowHeight = 15;
const eyebrowOffset = -70;

const g = svg.append('g')
	.attr('transform', `translate(${width/2},${height/2})`);


const circle = g.append('circle')
  .attr('r', height / 2)
	.attr('fill','yellow')
	.attr('stroke','black')
	.attr('stroke-width','5px');

const eyesG = g
	.append('g')
		.attr('transform', `translate(0,${-eyeOffset})`)

const leftEye = eyesG
	.append('circle')
    .attr('r', 40)
    .attr('cx', - eyeSpacing);


const rightEye = eyesG
	.append('circle')
    .attr('r', 40)
    .attr('cx', eyeSpacing);

const eyebrowsG = eyesG
	.append('g')
		.attr('transform',`translate(0,${eyebrowOffset})`);

eyebrowsG
	.transition().duration(2000)
		.attr('transform',`translate(0,${eyebrowOffset - 50})`)
	.transition().duration(2000)
		.attr('transform',`translate(0,${eyebrowOffset})`)

const leftEyebrow = eyebrowsG
	.append('rect')
    .attr('width', eyebrowWidth)
    .attr('height',eyebrowHeight)
    .attr('x', -eyeSpacing - eyebrowWidth/2);

const rightEyebrow = eyebrowsG
	.append('rect')
    .attr('width', eyebrowWidth)
    .attr('height',eyebrowHeight)
    .attr('x', eyeSpacing - eyebrowWidth/2)
;

const mouth = g
	.append('path')
    .attr('d', arc()({
      innerRadius: 160,
      outerRadius: 170,
      startAngle: Math.PI/2,
      endAngle: Math.PI * 1.5
    }));

const noseG = svg
	.append('g')
    .attr('transform', `translate(${width/2},${height/2 + noseOffset})`)

const nose = noseG
	.append('path')
    .attr('d', arc()({
      innerRadius: 30,
      outerRadius: 40,
      startAngle: 0,
      endAngle: Math.PI * 0.8
    }));



















