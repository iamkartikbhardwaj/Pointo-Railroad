import { Graph } from "../src/graph.js";
import {
  getDistanceOfRoute,
  countTripsWithMaxStops,
  countTripsWithExactStops,
  findShortestDistance,
  countRoutesWithinDistance,
} from "../src/solver.js";

const graph = new Graph("AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7");

test("Distance of route A-B-C", () => {
  expect(getDistanceOfRoute(graph, ["A", "B", "C"])).toBe(9);
});

test("Distance of route A-D", () => {
  expect(getDistanceOfRoute(graph, ["A", "D"])).toBe(5);
});

test("Distance of route A-D-C", () => {
  expect(getDistanceOfRoute(graph, ["A", "D", "C"])).toBe(13);
});

test("Distance of route A-E-B-C-D", () => {
  expect(getDistanceOfRoute(graph, ["A", "E", "B", "C", "D"])).toBe(22);
});

test("Route A-E-D should not exist", () => {
  expect(getDistanceOfRoute(graph, ["A", "E", "D"])).toBe("NO SUCH ROUTE");
});

test("Trips from C to C with max 3 stops", () => {
  expect(countTripsWithMaxStops(graph, "C", "C", 3)).toBe(2);
});

test("Trips from A to C with exactly 4 stops", () => {
  expect(countTripsWithExactStops(graph, "A", "C", 4)).toBe(3);
});

test("Shortest route from A to C", () => {
  expect(findShortestDistance(graph, "A", "C")).toBe(9);
});

test("Shortest route from B to B", () => {
  expect(findShortestDistance(graph, "B", "B")).toBe(9);
});

test("Routes from C to C with distance < 30", () => {
  expect(countRoutesWithinDistance(graph, "C", "C", 30)).toBe(7);
});
