import fs from "fs";
import { Graph } from "./graph.js";
import {
  getDistanceOfRoute,
  countTripsWithMaxStops,
  countTripsWithExactStops,
  findShortestDistance,
  countRoutesWithinDistance,
} from "./solver.js";

const input = fs.readFileSync("input.txt", "utf-8").trim();
const graph = new Graph(input);

console.log("Output #1:", getDistanceOfRoute(graph, ["A", "B", "C"]));
console.log("Output #2:", getDistanceOfRoute(graph, ["A", "D"]));
console.log("Output #3:", getDistanceOfRoute(graph, ["A", "D", "C"]));
console.log("Output #4:", getDistanceOfRoute(graph, ["A", "E", "B", "C", "D"]));
console.log("Output #5:", getDistanceOfRoute(graph, ["A", "E", "D"]));
console.log("Output #6:", countTripsWithMaxStops(graph, "C", "C", 3));
console.log("Output #7:", countTripsWithExactStops(graph, "A", "C", 4));
console.log("Output #8:", findShortestDistance(graph, "A", "C"));
console.log("Output #9:", findShortestDistance(graph, "B", "B"));
console.log("Output #10:", countRoutesWithinDistance(graph, "C", "C", 30));
