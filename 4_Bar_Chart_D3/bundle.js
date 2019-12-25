(function (d3) {
  'use strict';

  const svg = d3.select('svg');


  const height = +svg.attr('height');
  const width = +svg.attr('width');

  const render = data => {
    const xValue = d => d.population;
    const yValue = d => d.country;
    const margin = {top: 70, right: 50, bottom: 60, left: 190};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    const xScale = d3.scaleLinear()
    	.domain([0, d3.max(data, xValue)])
    	.range([0, innerWidth]);
    
    const yScale = d3.scaleBand()
    	.domain(data.map(yValue))
    	.range([0,innerHeight])
    	.padding(0.1);
    	

    
  	const g = svg.append('g')
    	.attr('transform',`translate(${margin.left},${margin.top})`);
    
  const xAxisTickFormat = number => 
  	d3.format('.3s')(number)
  		.replace('G','B');

    
  const xAxis = d3.axisBottom(xScale)
  	.tickFormat(xAxisTickFormat)
  	.tickSize(-innerHeight);

  g.append('g')
    .call(d3.axisLeft(yScale))
    .selectAll('.domain, .tick line')
    	.remove();
    
  const xAxisG = g.append('g').call(xAxis)
    .attr('transform',`translate(0,${innerHeight})`);

  xAxisG.selectAll('.domain').remove();
  xAxisG.append('text')
    	.attr('class','axis-label')
    	.attr('y',45)
    	.attr('x',innerWidth/2)
    	.attr('fill','black')
    	.text('Population');
    
  	g.selectAll('rect').data(data)
    	.enter().append('rect')
    		.attr('y', d => yScale(yValue(d)))
    		.attr('width', d => xScale(xValue(d)))
    		.attr('height', yScale.bandwidth());
    
    g.append('text')
    	.attr('class','title')
    	.attr('y',-10)
    	.text('Top 10 Most Populus Countries');

  };

  d3.csv('data.csv').then(data => {
    data.forEach(d => {
      d.population = +d.population * 1000;
  	});
  	render(data);
  });

}(d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFxuICBcdFx0XHRzZWxlY3QsIFxuICAgICAgICBjc3YsIFxuICAgICAgICBzY2FsZUxpbmVhciwgXG4gICAgICAgIG1heCwgXG4gICAgICAgIHNjYWxlQmFuZCwgXG4gICAgICAgIGF4aXNMZWZ0LFxuICBcdFx0XHRheGlzQm90dG9tLFxuICBcdFx0XHRmb3JtYXRcbn0gZnJvbSAnZDMnXG5cbmNvbnN0IHN2ZyA9IHNlbGVjdCgnc3ZnJyk7XG5cblxuY29uc3QgaGVpZ2h0ID0gK3N2Zy5hdHRyKCdoZWlnaHQnKTtcbmNvbnN0IHdpZHRoID0gK3N2Zy5hdHRyKCd3aWR0aCcpO1xuXG5jb25zdCByZW5kZXIgPSBkYXRhID0+IHtcbiAgY29uc3QgeFZhbHVlID0gZCA9PiBkLnBvcHVsYXRpb247XG4gIGNvbnN0IHlWYWx1ZSA9IGQgPT4gZC5jb3VudHJ5O1xuICBjb25zdCBtYXJnaW4gPSB7dG9wOiA3MCwgcmlnaHQ6IDUwLCBib3R0b206IDYwLCBsZWZ0OiAxOTB9XG4gIGNvbnN0IGlubmVyV2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICBjb25zdCBpbm5lckhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuICBcbiAgY29uc3QgeFNjYWxlID0gc2NhbGVMaW5lYXIoKVxuICBcdC5kb21haW4oWzAsIG1heChkYXRhLCB4VmFsdWUpXSlcbiAgXHQucmFuZ2UoWzAsIGlubmVyV2lkdGhdKTtcbiAgXG4gIGNvbnN0IHlTY2FsZSA9IHNjYWxlQmFuZCgpXG4gIFx0LmRvbWFpbihkYXRhLm1hcCh5VmFsdWUpKVxuICBcdC5yYW5nZShbMCxpbm5lckhlaWdodF0pXG4gIFx0LnBhZGRpbmcoMC4xKTtcbiAgXHRcblxuICBcblx0Y29uc3QgZyA9IHN2Zy5hcHBlbmQoJ2cnKVxuICBcdC5hdHRyKCd0cmFuc2Zvcm0nLGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHttYXJnaW4udG9wfSlgKTtcbiAgXG5jb25zdCB4QXhpc1RpY2tGb3JtYXQgPSBudW1iZXIgPT4gXG5cdGZvcm1hdCgnLjNzJykobnVtYmVyKVxuXHRcdC5yZXBsYWNlKCdHJywnQicpO1xuXG4gIFxuY29uc3QgeEF4aXMgPSBheGlzQm90dG9tKHhTY2FsZSlcblx0LnRpY2tGb3JtYXQoeEF4aXNUaWNrRm9ybWF0KVxuXHQudGlja1NpemUoLWlubmVySGVpZ2h0KTtcblxuZy5hcHBlbmQoJ2cnKVxuICAuY2FsbChheGlzTGVmdCh5U2NhbGUpKVxuICAuc2VsZWN0QWxsKCcuZG9tYWluLCAudGljayBsaW5lJylcbiAgXHQucmVtb3ZlKCk7XG4gIFxuY29uc3QgeEF4aXNHID0gZy5hcHBlbmQoJ2cnKS5jYWxsKHhBeGlzKVxuICAuYXR0cigndHJhbnNmb3JtJyxgdHJhbnNsYXRlKDAsJHtpbm5lckhlaWdodH0pYClcblxueEF4aXNHLnNlbGVjdEFsbCgnLmRvbWFpbicpLnJlbW92ZSgpO1xueEF4aXNHLmFwcGVuZCgndGV4dCcpXG4gIFx0LmF0dHIoJ2NsYXNzJywnYXhpcy1sYWJlbCcpXG4gIFx0LmF0dHIoJ3knLDQ1KVxuICBcdC5hdHRyKCd4Jyxpbm5lcldpZHRoLzIpXG4gIFx0LmF0dHIoJ2ZpbGwnLCdibGFjaycpXG4gIFx0LnRleHQoJ1BvcHVsYXRpb24nKTtcbiAgXG5cdGcuc2VsZWN0QWxsKCdyZWN0JykuZGF0YShkYXRhKVxuICBcdC5lbnRlcigpLmFwcGVuZCgncmVjdCcpXG4gIFx0XHQuYXR0cigneScsIGQgPT4geVNjYWxlKHlWYWx1ZShkKSkpXG4gIFx0XHQuYXR0cignd2lkdGgnLCBkID0+IHhTY2FsZSh4VmFsdWUoZCkpKVxuICBcdFx0LmF0dHIoJ2hlaWdodCcsIHlTY2FsZS5iYW5kd2lkdGgoKSlcbiAgXG4gIGcuYXBwZW5kKCd0ZXh0JylcbiAgXHQuYXR0cignY2xhc3MnLCd0aXRsZScpXG4gIFx0LmF0dHIoJ3knLC0xMClcbiAgXHQudGV4dCgnVG9wIDEwIE1vc3QgUG9wdWx1cyBDb3VudHJpZXMnKTtcblxufTtcblxuY3N2KCdkYXRhLmNzdicpLnRoZW4oZGF0YSA9PiB7XG4gIGRhdGEuZm9yRWFjaChkID0+IHtcbiAgICBkLnBvcHVsYXRpb24gPSArZC5wb3B1bGF0aW9uICogMTAwMDtcblx0fSlcblx0cmVuZGVyKGRhdGEpXG59KTsiXSwibmFtZXMiOlsic2VsZWN0Iiwic2NhbGVMaW5lYXIiLCJtYXgiLCJzY2FsZUJhbmQiLCJmb3JtYXQiLCJheGlzQm90dG9tIiwiYXhpc0xlZnQiLCJjc3YiXSwibWFwcGluZ3MiOiI7OztFQVdBLE1BQU0sR0FBRyxHQUFHQSxTQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7OztFQUcxQixNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7RUFDbkMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztFQUVqQyxNQUFNLE1BQU0sR0FBRyxJQUFJLElBQUk7SUFDckIsTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDakMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDOUIsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDO0lBQzFELE1BQU0sVUFBVSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDdEQsTUFBTSxXQUFXLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQzs7SUFFeEQsTUFBTSxNQUFNLEdBQUdDLGNBQVcsRUFBRTtNQUMxQixNQUFNLENBQUMsQ0FBQyxDQUFD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