export class Graph<GraphVertex extends string | number | symbol> {
  adjacencyList: Record<GraphVertex, GraphVertex[]>;

  constructor() {
    this.adjacencyList = {} as Record<GraphVertex, GraphVertex[]>;
  }

  addVertex(vertex: GraphVertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1: GraphVertex, vertex2: GraphVertex) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1: GraphVertex, vertex2: GraphVertex) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
  }

  removeVertex(vertex: GraphVertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex as GraphVertex);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstSearch(start: GraphVertex) {
    const result: GraphVertex[] = [];
    const visited: Record<GraphVertex, boolean> = {} as Record<GraphVertex, boolean>;
    const adjacencyList = this.adjacencyList;

    // Recursive DFS using a helper function
    (function dfs(vertex: GraphVertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });

    })(start);

    return result;
  }

  breadthFirstSearch(start: GraphVertex) {
    const result: GraphVertex[] = [];
    const visited: Record<GraphVertex, boolean> = {} as Record<GraphVertex, boolean>;
    const adjacencyList = this.adjacencyList;

    (function bfs(queue: GraphVertex[]) {
      if (!queue.length) return null;
      const vertex = queue.shift();
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return bfs([neighbor]);
        }
      });
    })([start]);

    return result;
  }
}