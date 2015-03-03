function plotGraphThree() {
                var lineData = [{x:0 , y: 0}, {x:1 , y: 221125000}, {x:2 , y: 92500000}, {x:3 , y: 3607664440}, {x:4 , y: 138256000}, {x:5 , y: 699772134}, {x:6 , y: 34209000}, {x:7 , y: 44966798}, {x:8 , y: 873740000}, {x:9 , y: 5929050}, {x:10 , y: 4697703200}, {x:11 , y: 0}];
                var vis = d3.select('#money'),
                WIDTH = 650,
                HEIGHT = 500,
                MARGINS = {
                  top: 40,
                  right: 40,
                  bottom: 40,
                  left: 150
                },
                xRange = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([d3.min(lineData, function(d) {
                  return d.x;
                }), d3.max(lineData, function(d) {
                  return d.x;
                })]),
                yRange = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([d3.min(lineData, function(d) {
                  return d.y;
                }), d3.max(lineData, function(d) {
                  return d.y;
                })]),
                xAxis = d3.svg.axis()
                  .scale(xRange)
                  .tickSize(5)
                  .tickSubdivide(true),
                yAxis = d3.svg.axis()
                  .scale(yRange)
                  .tickSize(5)
                  .orient('left')
                  .tickSubdivide(true);
             
            vis.append('svg:g')
              .attr('class', 'x axis')
              .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
              .call(xAxis);
             
            vis.append('svg:g')
              .attr('class', 'y axis')
              .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
              .call(yAxis); 

            var lineFunc = d3.svg.line()
              .x(function(d) {
                return xRange(d.x);
              })
              .y(function(d) {
                return yRange(d.y);
              })
              .interpolate('linear');

            vis.append('svg:path')
          .attr('d', lineFunc(lineData))
          .attr('stroke', 'blue')
          .attr('stroke-width', 2)
          .attr('fill', 'none');
        }