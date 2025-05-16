export class Graph {
  constructor(input) {
    this.adjList = {};
    input.split(", ").forEach((route) => {
      const [from, to, ...dist] = route.trim();
      const distance = parseInt(dist.join(""), 10);
      if (!this.adjList[from]) this.adjList[from] = [];
      this.adjList[from].push({ to, dist: distance });
    });
  }

  getNeighbors(city) {
    return this.adjList[city] || [];
  }
}
