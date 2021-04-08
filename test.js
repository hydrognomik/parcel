// @flow strict-local

// type TEdgeType = number;

// function addEdge(type: TEdgeType = 0): void {
//   return;
// }

// class Graph<TEdgeType: number = 0> {
//   addEdge(type: TEdgeType = 0) {
//     return;
//   }

// }

class Graph<TEdgeType: number = 0> {
  addEdge(type: TEdgeType): TEdgeType {
    return type;
  }
}

const graph = new Graph();
graph.addEdge(10);

