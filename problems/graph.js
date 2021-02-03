class Graph {
  constructor() {
    this.adjList = new Object
  }

  addVertex(vertex) {
    if(!(vertex in this.adjList)){
      this.adjList[vertex] = new Array;
    }
  }

  addEdges(srcValue, destValue) {
    this.addVertex(srcValue);
    // console.log(this.adjList[srcValue]);   // a : []
    this.addVertex(destValue);
    // console.log(destValue)

    if(!(this.adjList[srcValue].includes(destValue))){
      this.adjList[srcValue].push(destValue)
      // console.log(this.adjList[srcValue])
    }
    if(!(this.adjList[destValue].includes(srcValue))){
      this.adjList[destValue].push(srcValue)
      // console.log(this.adjList[destValue])
    }
  }

  buildGraph(edges) {
    // if(edges === []) {

    // }
    for(let i = 0; i < edges.length; i++) {
      this.addEdges(edges[i][0], edges[i][1]);
    }
    return this.adjList;
  }

  breadthFirstTraversal(startingVertex) {
    let answer = [];
    let queue = [startingVertex];
    let visited = new Set();
    while(queue.length) {
      let current = queue.shift();
      if(!(visited.has(current))) {
        answer.push(current);
        visited.add(current);
      }
      let nonVisited = this.adjList[current].filter(val => {  // [ 'a', 'c', 'e' ]
        return !(visited.has(val)) && !(queue.includes(val))
      })
      queue.push(...nonVisited);
    }
    return answer;
  }

  depthFirstTraversalIterative(startingVertex) {
    let answer = [];
    let stack = [startingVertex];     // [a, c, e]
    let visited = new Set();
    while(stack.length) {
      let current = stack.pop();
      if(!(visited.has(current))) {
        answer.push(current);
        visited.add(current);
      }
      let nonVisited = this.adjList[current].filter(val => {  // [ 'a', 'c', 'e' ]
        return !(visited.has(val)) && !(stack.includes(val))
      })
      stack.push(...nonVisited);
    }
    console.log(answer)
    return answer;
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    if(visited.has(startingVertex)){
      return;
    }
    visited.add(startingVertex);
    vertices.push(startingVertex);
    this.adjList[startingVertex].forEach(el =>{
      this.depthFirstTraversalRecursive(el, visited, vertices)
    })
    return vertices;
  }
  
        // SV: a
        // visited: (a, )
        // vertices: [a, ]
        // HfE : [ b., c, d ]
        // [ a, d, g, f, c, b, e ]

        // SV: b
        // visited: (a, b )
        // vertices: [a, b ]
        // HfE : [ a, c., e ]
        // [ a, d, g, f, c, b, e ]

        // SV: e
        // visited: (a, b, c, f, g, d, e )
        // vertices: [a, b, c, f, g, d, e]
        // HfE : [ b ]                   
        // [ a, d, g, f, c, b, e ]




        // SV: c
        // visited: (a, b, c )
        // vertices: [a, b, c ]
        // HfE : [ a, f., g ]
        // [ a, d, g, f, c, b, e ]       **

        // SV: f
        // visited: (a, b, c, f )
        // vertices: [a, b, c, f ]
        // HfE : [ c, g. ]
        // [ a, d, g, f, c, b, e ]     *

        // SV: g
        // visited: (a, b, c, f, g )
        // vertices: [a, b, c, f, g]
        // HfE : [ d., c, f ]
        // [ a, d, g, f, c, b, e ]     *

        // SV: d
        // visited: (a, b, c, f, g, d )
        // vertices: [a, b, c, f, g, d]
        // HfE : [ a, g ]                   // failure;
        // [ a, d, g, f, c, b, e ]       *


}
const edges =
[['a', 'b'],
['a', 'c'],
['a', 'd'],
['d', 'g'],
['b', 'c'],
['b', 'e'],
['c', 'f'],
['c', 'g'],
['f', 'g'],
['h']]
let g = new Graph();
g.buildGraph(edges);
console.log(g.breadthFirstTraversal('a'));

module.exports = {
  Graph
};
