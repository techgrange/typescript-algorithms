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

  // Iterative DFS
  depthFirstSearchIterative(start: GraphVertex) {
    const result: GraphVertex[] = [];
    const visited: Record<GraphVertex, boolean> = {} as Record<GraphVertex, boolean>;
    const adjacencyList = this.adjacencyList;
    const stack: GraphVertex[] = [start];

    while (stack.length) {
      const vertex = stack.pop();
      if (!vertex) continue;

      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  breadthFirstSearch(start: GraphVertex) {
    const result: GraphVertex[] = [];
    const visited: Record<GraphVertex, boolean> = {} as Record<GraphVertex, boolean>;
    const adjacencyList = this.adjacencyList;

    // Mark the start vertex as visited immediately
    visited[start] = true;
    result.push(start);

    (function bfs(vertices: GraphVertex[]) {
      if (!vertices.length) return;

      const nextLevel: GraphVertex[] = [];

      // Process all vertices at the current level
      for (const vertex of vertices) {
        // Add all unvisited neighbors to the next level
        adjacencyList[vertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            result.push(neighbor);
            nextLevel.push(neighbor);
          }
        });
      }

      // Recursively process the next level
      if (nextLevel.length) {
        bfs(nextLevel);
      }
    })([start]);

    return result;
  }

  // Iterative BFS
  breadthFirstSearchIterative(start: GraphVertex) {
    const result: GraphVertex[] = [];
    const visited: Record<GraphVertex, boolean> = {} as Record<GraphVertex, boolean>;
    const adjacencyList = this.adjacencyList;
    const queue: GraphVertex[] = [start];

    while (queue.length) {
      const vertex = queue.shift();
      if (!vertex) continue;

      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}