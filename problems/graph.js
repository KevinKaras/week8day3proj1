
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
    
  }

  breadthFirstTraversal(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

}

module.exports = {
  Graph
};









