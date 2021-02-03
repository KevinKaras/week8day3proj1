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
    for(let key in this.adjList){
      if(!(answer.includes(key))) {
        answer.push(key);
      }
      for(let i = 0; i < this.adjList[key].length; i++) {
        if(!(answer.includes(this.adjList[key][i]))) {
          answer.push(this.adjList[key][i]);
        }
      }
    }
    console.log(answer);
    return answer;
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

}
// const edges =
// [['a', 'b'],
// ['a', 'c'],
// ['a', 'd'],
// ['d', 'g'],
// ['b', 'c'],
// ['b', 'e'],
// ['c', 'f'],
// ['c', 'g'],
// ['f', 'g'],
// ['h']]
// let g = new Graph();
// console.log(g.buildGraph(edges));

module.exports = {
  Graph
};
