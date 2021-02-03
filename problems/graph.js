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
    
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

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
