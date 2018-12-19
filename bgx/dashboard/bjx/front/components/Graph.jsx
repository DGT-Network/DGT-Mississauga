import React from 'react'
import {ForceGraph, ForceGraphNode, ForceGraphLink} from 'react-vis-force';
import axios from 'axios';
import * as d3 from "d3";
import $ from 'jquery';
import colorbrewer from 'colorbrewer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import cloneDeep from 'lodash/cloneDeep';

import { connect } from 'react-redux'

import humanize from '../helpers/humanize';

import LineSegment from '../helpers/LineSegment'

import ReactAutocomplete from 'react-autocomplete'

import Legend from './Legend'
import Filters from './Filters'
import Card from './Card'


class Graph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {collapsedNodes: [],
                  hiddenNodes: []}

    this.selected    = {}
    this.highlighted = null
    this.collapsed = null
    this.graphh       = {}
  }

  drawGraph() {
    $(`#${this.props.id}`).empty();

    let that = this;

    let graph = this.graphh;

    let config = {
    "title" : "Les Miserables characters",
    "graph" : {
        "linkDistance" : 60,
        "charge"       : -400,
        "height"       : 400,
        "numColors"    : 12,
        "labelPadding" : {
            "left"   : 3,
            "right"  : 3,
            "top"    : 2,
            "bottom" : 2
        },
        "labelMargin" : {
            "left"   : 3,
            "right"  : 3,
            "top"    : 2,
            "bottom" : 2
        },
        "ticksWithoutCollisions" : 50
    },
    "types" : {
        "group0" : {
            "short" : "Group 0",
            "long"  : "Group 0 long name for docs"
        },
        "group1" : {
            "short" : "Group 1",
            "long"  : "Group 1 long name for docs"
        },
        "group2" : {
            "short" : "Group 2",
            "long"  : "Group 2 long name for docs"
        },
        "group3" : {
            "short" : "Group 3",
            "long"  : "Group 3 long name for docs"
        },
        "group4" : {
            "short" : "Group 4",
            "long"  : "Group 4 long name for docs"
        },
        "group5" : {
            "short" : "Group 5",
            "long"  : "Group 5 long name for docs"
        },
        "group6" : {
            "short" : "Group 6",
            "long"  : "Group 6 long name for docs"
        },
        "group7" : {
            "short" : "Group 7",
            "long"  : "Group 7 long name for docs"
        },
        "group8" : {
            "short" : "Group 8",
            "long"  : "Group 8 long name for docs"
        },
        "group9" : {
            "short" : "Group 9",
            "long"  : "Group 9 long name for docs"
        },
        "group10" : {
            "short" : "Group 10",
            "long"  : "Group 10 long name for docs"
        }
    },
    "constraints" : [
        {
            "has"    : { "type" : "group1" },
            "type"   : "position",
            "x"      : 0.2,
            "y"      : 0.2,
            "weight" : 0.7
        }, {
            "has"    : { "type" : "group2" },
            "type"   : "position",
            "x"      : 0.8,
            "y"      : 0.2,
            "weight" : 0.7
        }, {
            "has"    : { "type" : "group3" },
            "type"   : "position",
            "x"      : 0.2,
            "y"      : 0.5,
            "weight" : 0.7
        }, {
            "has"    : { "type" : "group4" },
            "type"   : "position",
            "x"      : 0.8,
            "y"      : 0.5,
            "weight" : 0.7
        }, {
            "has"    : { "type" : "group5" },
            "type"   : "position",
            "x"      : 0.2,
            "y"      : 0.8,
            "weight" : 0.7
        }, {
            "has"    : { "type" : "group8" },
            "type"   : "position",
            "x"      : 0.8,
            "y"      : 0.8,
            "weight" : 0.7
        }
    ]
}

graph.data = cloneDeep(this.props.data);

    graph.margin = {
        top    : 20,
        right  : 20,
        bottom : 20,
        left   : 20
    };

    var display = $(`#${this.props.id}`).css('display');
    $(`#${this.props.id}`)
        .css('display', 'block')
        .css('height', this.props.size.height + 'px');
    graph.width  = this.props.size.width  - graph.margin.left - graph.margin.right;
    graph.height = this.props.size.height - graph.margin.top  - graph.margin.bottom;
    $(`#${this.props.id}`).css('display', display);


    var div = d3.select(`#${this.props.id}`).append("div")
    .attr("class", "tooltip")
    .attr("id", `${this.props.id}-tooltip`)
    .style("opacity", 0)
    .style("position", "absolute");

    for (var name in graph.data) {
        var obj = graph.data[name];
        obj.positionConstraints = [];
        obj.linkStrength        = 1;

        config.constraints.forEach(function(c) {
            for (var k in c.has) {
                if (c.has[k] !== obj[k]) {
                    return true;
                }
            }

            switch (c.type) {
                case 'position':
                    obj.positionConstraints.push({
                        weight : c.weight,
                        x      : c.x * graph.width,
                        y      : c.y * graph.height
                    });
                    break;

                case 'linkStrength':
                    obj.linkStrength *= c.strength;
                    break;
            }
        });
    }

    graph.links = [];
    for (var name in graph.data) {
        var obj = graph.data[name];
        obj.depends.forEach((depends) => {
            var link = {
                source : graph.data.find(function r(i){return i.IP === depends}),
                target : obj
            };
            link.strength = (link.source.linkStrength || 1)
                          * (link.target.linkStrength || 1);
            graph.links.push(link);
        });
    }

    graph.categories = {};
    for (var name in graph.data) {
        var obj = graph.data[name],
            key = obj.type + ':' + (obj.group || ''),
            cat = graph.categories[key];

        obj.categoryKey = key;
        if (!cat) {
            cat = graph.categories[key] = {
                key      : key,
                type     : obj.type,
                typeName : (config.types[obj.type]
                            ? config.types[obj.type].short
                            : obj.type),
                group    : obj.group,
                count    : 0
            };
        }
        cat.count++;
    }
    graph.categoryKeys = d3.keys(graph.categories);

    graph.colors = colorbrewer.Set3[config.graph.numColors];

    function getColorScale(darkness) {
        return d3.scale.ordinal()
            .domain(graph.categoryKeys)
            .range(graph.colors.map(function(c) {
                return d3.hsl(c).darker(darkness).toString();
            }));
    }

    graph.strokeColor = getColorScale( 0.1);
    graph.strokeColorActive = getColorScale( 0.8);
    graph.fillColorActive   = getColorScale(-0.1);
        graph.fillColor   = getColorScale(-0.3);

    graph.nodeValues = d3.values(graph.data);

    graph.force = d3.layout.force()
        .nodes(graph.nodeValues)
        .links(graph.links)
        .linkStrength(function(d) { return d.strength; })
        .size([graph.width, graph.height])
        .linkDistance(config.graph.linkDistance)
        .charge(config.graph.charge)
        .on('tick', tick)


   function tick(e) {
        graph.numTicks++;

        for (var name in graph.data) {
            var obj = graph.data[name];

            obj.positionConstraints.forEach(function(c) {
                var w = c.weight * e.alpha;
                if (!isNaN(c.x)) {
                    obj.x = (c.x * w + obj.x * (1 - w));
                }
                if (!isNaN(c.y)) {
                    obj.y = (c.y * w + obj.y * (1 - w));
                }
            });
        }

        if (graph.preventCollisions) {
            //that.preventCollisions();
        }

        graph.line
            .attr('x1', function(d) {
                return d.source.x;
            })
            .attr('y1', function(d) {
                return d.source.y;
            })
            .each(function(d) {
                var x    = d.target.x,
                    y    = d.target.y,
                    line = new LineSegment(d.source.x, d.source.y, x, y);

                 for (var e in d.target.edge) {
                     var ix = line.intersect(d.target.edge[e].offset(x, y));
                    if (ix.in1 && ix.in2) {
                        x = ix.x;
                        y = ix.y;
                        break;
                    }
                 }

                d3.select(this)
                    .attr('x2', x)
                    .attr('y2', y);
            });

        graph.node
            .attr('transform', function(d) {
                return 'translate(' + d.x + ',' + d.y + ')';
});
    }

    graph.svg = d3.select(`#${this.props.id}`).append('svg')
        .attr('width' , this.props.size.width)//graph.width + graph.margin.right  + graph.margin.left)
        .attr('height', this.props.size.height-40)//graph.height + graph.margin.top  + graph.margin.bottom)
      .append('g')
        .attr('transform', 'translate(' + graph.margin.left + ',' + graph.margin.top + ')');

    // graph.svg.append('defs').selectAll('marker')
    //     .data(['end'])
    //   .enter().append('marker')
    //     .attr('id'          , String)
    //     .attr('viewBox'     , '0 -5 10 10')
    //     .attr('refX'        , 10)
    //     .attr('refY'        , 0)
    //     .attr('markerWidth' , 6)
    //     .attr('markerHeight', 6)
    //     .attr('orient'      , 'auto')
    //   .append('path')
    //     .attr('d', 'M0,-5L10,0L0,5');

    // adapted from http://stackoverflow.com/questions/9630008
    // and http://stackoverflow.com/questions/17883655

    // var glow = graph.svg.append('filter')
    //     .attr('x'     , '-50%')
    //     .attr('y'     , '-50%')
    //     .attr('width' , '200%')
    //     .attr('height', '200%')
    //     .attr('id'    , 'blue-glow');

    // glow.append('feColorMatrix')
    //     .attr('type'  , 'matrix')
    //     .attr('values', '0 0 0 0  0 '
    //                   + '0 0 0 0  0 '
    //                   + '0 0 0 0  .7 '
    //                   + '0 0 0 1  0 ');

    // glow.append('feGaussianBlur')
    //     .attr('stdDeviation', 6)
    //     .attr('result'      , 'coloredBlur');

    // glow.append('feMerge').selectAll('feMergeNode')
    //     .data(['coloredBlur', 'SourceGraphic'])
    //   .enter().append('feMergeNode')
    //     .attr('in', String);

    /*graph.legend = graph.svg.append('g')
        .attr('class', 'legend')
        .attr('x', 0)
        .attr('y', 0)
      .selectAll('.category')
        .data(d3.values(graph.categories))
      .enter().append('g')
        .attr('class', 'category');

    graph.legendConfig = {
        rectWidth   : 12,
        rectHeight  : 12,
        xOffset     : -10,
        yOffset     : 30,
        xOffsetText : 20,
        yOffsetText : 10,
        lineHeight  : 15
    };
    graph.legendConfig.xOffsetText += graph.legendConfig.xOffset;
    graph.legendConfig.yOffsetText += graph.legendConfig.yOffset;

    graph.legend.append('rect')
        .attr('x', graph.legendConfig.xOffset)
        .attr('y', function(d, i) {
            return graph.legendConfig.yOffset + i * graph.legendConfig.lineHeight;
        })
        .attr('height', graph.legendConfig.rectHeight)
        .attr('width' , graph.legendConfig.rectWidth)
        .attr('fill'  , function(d) {
            return graph.fillColor(d.key);
        })
        .attr('stroke', function(d) {
            return graph.strokeColor(d.key);
        });

    graph.legend.append('text')
        .attr('x', graph.legendConfig.xOffsetText)
        .attr('y', function(d, i) {
            return graph.legendConfig.yOffsetText + i * graph.legendConfig.lineHeight;
        })
        .text(function(d) {
            return d.typeName + (d.group ? ': ' + d.group : '');
        });



    $('#graph-container').on('scroll', function() {
        graph.legend.attr('transform', 'translate(0,' + $(this).scrollTop() + ')');
    });
    */


    graph.draggedThreshold = d3.scale.linear()
        .domain([0, 0.1])
        .range([5, 20])
        .clamp(true);

    function dragged(d) {
        var threshold = graph.draggedThreshold(graph.force.alpha()),
            dx        = d.oldX - d.px,
            dy        = d.oldY - d.py;
        if (Math.abs(dx) >= threshold || Math.abs(dy) >= threshold) {
            d.dragged = true;
        }
        return d.dragged;
    }

    graph.drag = d3.behavior.drag()
        .origin(function(d) { return d; })
        .on('dragstart', function(d) {
            d.oldX    = d.x;
            d.oldY    = d.y;
            d.dragged = false;
            d.fixed |= 2;
        })
        .on('drag', function(d) {
            d.px = d3.event.x;
            d.py = d3.event.y;
            if (dragged(d)) {
                if (!graph.force.alpha()) {
                    graph.force.alpha(.025);
                }
            }
        })
        .on('dragend', function(d) {
            if (!dragged(d)) {
                that.selectObject(d, this);
            }
            d.fixed &= ~6;
        });

    graph.line = graph.svg.append('g').selectAll('.link')
        .data(graph.force.links())
        .enter().append('line')
        .attr('class', 'link');

    graph.node = graph.svg.selectAll('.node')
      .data(graph.force.nodes())
      .enter().append('g')
      .attr('class', 'node')
      .call(graph.drag)
      .on('mouseover', function(d) {
            if (!that.selected.obj) {
                if (graph.mouseoutTimeout) {
                    clearTimeout(graph.mouseoutTimeout);
                    graph.mouseoutTimeout = null;
                }
                that.showTooltip(d);
                that.highlightObject(d);
            }
        })
      .on('mouseout', function() {
          if (!that.selected.obj) {
              if (graph.mouseoutTimeout) {
                  clearTimeout(graph.mouseoutTimeout);
                  graph.mouseoutTimeout = null;
              }
              graph.mouseoutTimeout = setTimeout(function() {
                  that.hideTooltip();
                  that.highlightObject(null);
              }, 100);
          }
      })
      .on('click', function(d) {
        that.selectObject(d)
      })
      .on('dblclick', function(d) {
          that.highlightObject2(d);
      })

        //add line to graph object


      graph.nodeRect = graph.node.append('rect')
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('width' , 2)
        .attr('height', 2);


      let collapse = graph.node.append('g')
        .attr('class', 'collapse-points')

      for (let i = 0; i < 3; i++){
        collapse.append('circle')
          .attr('cx', i*4)
          .attr('cy', 0)
          .attr('r' , 1)
          .attr('fill', '#212529')
      }


      let extradata = graph.node.append('g')
        .attr('class', 'extra-data')
        .attr('display', 'none')
        .attr('transform','translate(-35,-22)')

      extradata.append('circle')
        .attr('class', 'extra-active')
        .attr('cx', 4)
        .attr('cy', 4)
        .attr('r' , 4)
        .attr('fill', '#ffffb3')
        .attr('stroke', '#b3b37d')


        graph.node.each(function(d) {
        if (that.state.hiddenNodes.includes(d.IP))
          return;

        if (d.IP == that.props.selectedPeerIP)
            that.selectObject(d)

        var node  = d3.select(this),
            rect  = node.select('rect'),
            lines = [d.name],
            ddy   = 1.1,
            dy    = -ddy * lines.length / 2 + .5;

        lines.forEach(function(line) {
            var text = node.append('text')
                .text(function(d) {
                   return that.state.collapsedNodes.indexOf(d.IP) == -1 ? d.name : `${d.name}...`;
                })
                .attr('dy', dy + 'em');
            dy += ddy;
        });
      });

      graph.numTicks = 0;
      graph.preventCollisions = false;
      graph.force.start();

        for (var i = 0; i < 50; i++) {
            graph.force.tick();
        }
        graph.preventCollisions = true;


    setTimeout(this.updateGraph());
}

    wrap(text) {
      let maxLineChars = 10;
      let wrapChars = ' /_-.'.split('');
    if (text.length <= maxLineChars) {
        return [text];
    } else {
        for (var k = 0; k < wrapChars.length; k++) {
            var c = wrapChars[k];
            for (var i = maxLineChars; i >= 0; i--) {
                if (text.charAt(i) === c) {
                    var line = text.substring(0, i + 1);
                    return [line].concat(this.wrap(text.substring(i + 1)));
                }
            }
        }
        return [text.substring(0, maxLineChars)]
            .concat(this.wrap(text.substring(maxLineChars)));
    }
}

  updateGraph(){
    let graph = this.graphh;
    let that = this;

    $(`#${this.props.id}-container`).off('click').on('click', function(e) {
      if (!$(e.target).closest('.node').length) {
        that.deselectObject();
      }
    });


    graph.line.each(function(d) {
      d3.select(this).attr('display', function(d){
        return that.checkNodeHidden(d.target.IP) ? 'none' : 'block'
      })
    });

    graph.node.each(function(d) {
      var node   = d3.select(this),
      rect  = node.select('rect'),
      text   = node.selectAll('text'),
      collapsePoints = node.selectAll('.collapse-points'),
      extra = node.selectAll('.extra-data'),
      bounds = {}

      if (!text[0].length) return;

      text
        .each(function() {
          var box = {
            x : -25,
            y: -5,
            width: 50,
            height: 8
            }
          try {
            box = this.getBBox();
          }
          catch(e){
          }

          bounds.x1 = box.x;
          bounds.y1 = box.y;
          bounds.x2 = box.x + box.width;
          bounds.y2 = box.y + box.height;

        })
      .attr('text-anchor', 'middle')
      .attr('display',  function(d){
        return that.checkNodeHidden(d.IP) ? 'none' : 'block'
      })


      text.classed('inactive', d.node_state !== 'active')
        .classed('filter-disable', function(d){
          return that.checkNodeFiltered(d)
        })
        .classed('filter-enable', function(d){
          return !that.checkNodeFiltered(d)
        })

      var padding  = {
          left: 5,
          right: 5,
          top: 5,
          bottom: 5,
        },
      margin   = {
          left: 1,
          right:1,
          top: 0,
          bottom: 0,
        }//config.graph.labelMargin,

      //oldWidth = bounds.x2 - bounds.x1;

      //bounds.x1 -= oldWidth/2;
      //bounds.x2 -= oldWidth/2;

      bounds.x1 -= (that.checkNodeFiltered(d) ? 1 : 3) * padding.left;
      bounds.y1 -= (that.checkNodeFiltered(d) ? 1 : 2) * padding.top;
      bounds.x2 += (that.checkNodeFiltered(d) ? 1 : 3) * padding.left;
      bounds.y2 += (that.checkNodeFiltered(d) ? 1 : 2) * padding.bottom;

      d.extent = {
        left   : bounds.x1 - margin.left,
        right  : bounds.x2 + margin.left + margin.right,
        top    : bounds.y1 - margin.top,
        bottom : bounds.y2 + margin.top  + margin.bottom
      };

      d.edge = {
        left   : new LineSegment(bounds.x1, bounds.y1, bounds.x1, bounds.y2),
        right  : new LineSegment(bounds.x2, bounds.y1, bounds.x2, bounds.y2),
        top    : new LineSegment(bounds.x1, bounds.y1, bounds.x2, bounds.y1),
        bottom : new LineSegment(bounds.x1, bounds.y2, bounds.x2, bounds.y2)
      };

      rect.classed('filter-disable', function(d){
          return that.checkNodeFiltered(d)
        })
        .classed('filter-enable', function(d){
          return !that.checkNodeFiltered(d)
        })
        .attr('display',  function(d){
          return that.checkNodeHidden(d.IP) ? 'none' : 'block'
        })
        .attr('stroke', function(d) {
          return  that.colorForDarker(d)
        })
        .attr('fill', function(d) {
          return that.colorFor(d);
        })
        .attr('x', function(d) {
          return  bounds.x1 //that.checkNodeFiltered(d) ? -40 : -43
        })
        .attr('y', function(d) {
          return bounds.y1 //that.checkNodeFiltered(d) ? -13 : -16
        })
        .attr('width' , function(d) {
          return bounds.x2 - bounds.x1 //that.checkNodeFiltered(d) ? 80 : 86
        })
        .attr('height', function(d) {
          return bounds.y2 - bounds.y1 //that.checkNodeFiltered(d) ? 20 : 26
        });

      collapsePoints
        .attr('transform',`translate(${bounds.x2-10}, ${bounds.y2+6})`)
        .attr('display',  function(d){
          return that.checkNodeHidden(d.IP) || that.checkNodeIsCollapsed(d.IP) ? 'none' : 'block'
        })

      extra
        .attr('transform',`translate(${bounds.x1}, ${bounds.y1-12})`)
        .attr('display',  function(d){
          return d.node_state != undefined && !that.checkNodeHidden(d.IP) ?  'block' : 'none'
        })
        .each(function(d) {
          d3.select(this).selectAll('.extra-active')
          .attr('fill',  d.node_state == 'active' ? '#ffffb3' : '#8dd3c7' )
          .attr('stroke',  d.node_state == 'active' ? '#b3b37d' : '#63948b' )
        })
    });

    for (var i = 0; i < 50; i++) {
        graph.force.tick();
    }
  }

  checkNodeIsCollapsed(ip){
    return this.state.collapsedNodes.indexOf(ip) == -1
  }

  checkNodeHidden(ip){
    return this.state.hiddenNodes.includes(ip)
  }

  checkNodeFiltered(d){
    const { selectedFilters, filters } = this.props;

    if (null == selectedFilters || Object.keys(selectedFilters).length == 0 )
        return true;

    const key = Object.keys(selectedFilters)[0]

    return d[key] != selectedFilters[key];
  }

preventCollisions() {
    var quadtree = d3.geom.quadtree(graph.nodeValues);

    for (var name in graph.data) {
        var obj = graph.data[name],
            ox1 = obj.x + obj.extent.left,
            ox2 = obj.x + obj.extent.right,
            oy1 = obj.y + obj.extent.top,
            oy2 = obj.y + obj.extent.bottom;

        quadtree.visit(function(quad, x1, y1, x2, y2) {
            if (quad.point && quad.point !== obj) {
                // Check if the rectangles intersect
                var p   = quad.point,
                    px1 = p.x + p.extent.left,
                    px2 = p.x + p.extent.right,
                    py1 = p.y + p.extent.top,
                    py2 = p.y + p.extent.bottom,
                    ix  = (px1 <= ox2 && ox1 <= px2 && py1 <= oy2 && oy1 <= py2);
                if (ix) {
                    var xa1 = ox2 - px1, // shift obj left , p right
                        xa2 = px2 - ox1, // shift obj right, p left
                        ya1 = oy2 - py1, // shift obj up   , p down
                        ya2 = py2 - oy1, // shift obj down , p up
                        adj = Math.min(xa1, xa2, ya1, ya2);

                    if (adj == xa1) {
                        obj.x -= adj / 2;
                        p.x   += adj / 2;
                    } else if (adj == xa2) {
                        obj.x += adj / 2;
                        p.x   -= adj / 2;
                    } else if (adj == ya1) {
                        obj.y -= adj / 2;
                        p.y   += adj / 2;
                    } else if (adj == ya2) {
                        obj.y += adj / 2;
                        p.y   -= adj / 2;
                    }
                }
                return ix;
            }
        });
    }
}

  colorFor(d) {
    const { selectedFilters, filters, selectedPeerIP } = this.props;

    if (d.IP == selectedPeerIP)
      return '#ffc107'

    else if (null == selectedFilters || Object.keys(selectedFilters).length == 0 )
      return '#17a2b8';

    const key = Object.keys(selectedFilters)[0]

    const list = filters.filter((f) => {return f.field == key })[0].list

    return list[d[key]];
  }

  colorForDarker(d) {
      const color = this.colorFor(d)
      const percent = -0.3

      var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
      return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
  }

  hideChildren(array, IP) {
      let graph = this.graphh;
      let el = graph.data.find((g) => {return g.IP == IP})
      el.dependedOnBy.forEach((ip) => {
          this.hideChildren(array,ip)
      })
      array.push(IP)
  }


highlightObject2(obj) {
  let graph = this.graphh;

  if (this.state.collapsedNodes.indexOf(obj.IP) === -1 ){
    this.setState({collapsedNodes: this.state.collapsedNodes.concat([obj.IP]) })
  }
  else {
    this.setState({collapsedNodes: this.state.collapsedNodes.filter((ip) => {return ip != obj.IP})})
  }

  let forHide  = [];

  this.state.collapsedNodes.forEach((ip) => {
      this.hideChildren(forHide,ip)
      forHide.pop();
    });

    this.setState({hiddenNodes: forHide})
    this.forceUpdate();
}

highlightObject(obj) {
  let graph = this.graphh;
    if (obj) {
        if (obj !== this.highlighted) {
            graph.node.classed('inactive', function(d) {
                return (obj !== d
                     && d.depends.indexOf(obj.name) == -1
                     && d.dependedOnBy.indexOf(obj.name) == -1);
            });
            graph.line.classed('inactive', function(d) {
                return (obj !== d.source && obj !== d.target);
            });
        }
        this.highlighted = obj;
    } else {
        if (this.highlighted) {
            graph.node.classed('inactive', false);
            graph.line.classed('inactive', false);
        }
        this.highlighted = null;
    }
}

hideTooltip(){
    var div = d3.select(`#${this.props.id}-tooltip`)
    div.style("opacity", 0)
        .style("left", "-100px")
        .style("top", "-100px");
  }

showTooltip(d){
  var div = d3.select(`#${this.props.id}-tooltip`)
  div.style("opacity", .9)
    .html(
        Object.keys(d.tooltip).map(key => {
            let s = isNaN(Number(key))  ?  `${key}: ` : ''
            return s + humanize(d.tooltip[key])
        }).reverse().join('<br/>'))


   .style("left", d.x + 15 + "px")
   .style("top", d.y - div.node().getBoundingClientRect().height + 65 +"px")
}

selectObject(obj) {

  this.props.onSelect(obj.IP)

  //store.dispatch(selectP(obj.IP))
  // let graph = this.graphh;
  //   var node;
  //   if (el) {
  //       node = d3.select(el);
  //   } else {
  //       graph.node.each(function(d) {
  //           if (d === obj) {
  //               node = d3.select(el = this);
  //           }
  //       });
  //   }
  //   if (!node) return;

  //   if (node.classed('selected')) {
  //       this.deselectObject();
  //       return;
  //   }

  //   this.selected = {
  //       obj : obj,
  //       el  : el
  //   };

  //   this.highlightObject(obj);

  //   node.classed('selected', true);
  //   $('#docs').html(obj.docs);
  //   $('#docs-container').scrollTop(0);

  //   var $graph   = $(`#${this.props.id}-container`),
  //       nodeRect = {
  //           left   : obj.x + obj.extent.left + graph.margin.left,
  //           top    : obj.y + obj.extent.top  + graph.margin.top,
  //           width  : obj.extent.right  - obj.extent.left,
  //           height : obj.extent.bottom - obj.extent.top
  //       },
  //       graphRect = {
  //           left   : $graph.scrollLeft(),
  //           top    : $graph.scrollTop(),
  //           width  : $graph.width(),
  //           height : $graph.height()
  //       };

  //   const offset = 20;

  //   if (nodeRect.left + nodeRect.width/2 < graphRect.left + graphRect.width/2 - offset ||
  //       nodeRect.left + nodeRect.width/2 > graphRect.left + graphRect.width/2 + offset ||
  //       nodeRect.top + nodeRect.height/2 < graphRect.top + graphRect.height/2 - offset ||
  //       nodeRect.top + nodeRect.height/2 > graphRect.top + graphRect.height/2 + offset) {


  //       $graph.animate({
  //           scrollLeft : nodeRect.left + nodeRect.width  / 2 - graphRect.width  / 2,
  //           scrollTop  : nodeRect.top  + nodeRect.height / 2 - graphRect.height / 2
  //       }, 500);
  //   }
}

deselectObject(doResize) {
  this.props.onSelect(null)
  this.props.onFilter({})
}


componentDidMount() {
    this.drawGraph();
}

componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(this.props.data) !== JSON.stringify(prevProps.data)) {
        this.drawGraph();
    }
    this.updateGraph();
}

  render() {
    return(
      <Card id='node_graph' title={`${this.props.title} Graph`}>
        <div className='search-panel float-right'>
          <FontAwesomeIcon icon='search' />
          <ReactAutocomplete
            items={this.props.data}
            shouldItemRender={(item, value) => item.IP.toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={item => item.IP}
            renderItem={(item, highlighted) =>
              <div
                key={item.IP}
                style={{ backgroundColor: highlighted ? '#17a2b8' : 'transparent'}}
              >
                {item.IP}
              </div>
            }
            value={this.props.selectedPeerIP == null ? '' : this.props.selectedPeerIP}
            onChange={e => this.props.onSelect( e.target.value)}
            onSelect={value => {this.props.onSelect(value); this.setState({ value })}}
          />
          </div>

          <div className='graphLayer'>
              <div id={`${this.props.id}-container`}>
                  <div  id={this.props.id}>
                  <div id={`{${this.props.id}-tooltip}`} />
                  </div>
              </div>
          </div>
      </Card>
    );
  }
}

Graph.defaultProps = {
  size: {
    width: 780,
    height: 350,
  },
  selectedFilters: null,
  filters: [],
}

export default Graph;
