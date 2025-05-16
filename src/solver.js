export function getDistanceOfRoute(graph, route) {
  let total = 0;
  for (let i = 0; i < route.length - 1; i++) {
    const current = route[i];
    const next = route[i + 1];
    const neighbor = graph.getNeighbors(current).find((e) => e.to === next);
    if (!neighbor) return "NO SUCH ROUTE";
    total += neighbor.dist;
  }
  return total;
}

export function countTripsWithMaxStops(graph, start, end, maxStops) {
  let count = 0;
  function dfs(city, stops) {
    if (stops > maxStops) return;
    if (city === end && stops > 0) count++;
    for (const { to } of graph.getNeighbors(city)) dfs(to, stops + 1);
  }
  dfs(start, 0);
  return count;
}

export function countTripsWithExactStops(graph, start, end, exactStops) {
  let count = 0;
  function dfs(city, stops) {
    if (stops > exactStops) return;
    if (city === end && stops === exactStops) count++;
    for (const { to } of graph.getNeighbors(city)) dfs(to, stops + 1);
  }
  dfs(start, 0);
  return count;
}

export function findShortestDistance(graph, start, end) {
  let shortest = Infinity;

  function dfs(city, total, visited) {
    if (total >= shortest) return;

    if (city === end && total > 0) {
      shortest = total;
    }

    for (const { to, dist } of graph.getNeighbors(city)) {
      if (!visited.includes(`${city}->${to}`)) {
        dfs(to, total + dist, [...visited, `${city}->${to}`]);
      }
    }
  }

  dfs(start, 0, []);
  return shortest === Infinity ? "NO SUCH ROUTE" : shortest;
}

export function countRoutesWithinDistance(graph, start, end, maxDistance) {
  let count = 0;

  function dfs(city, total) {
    if (total >= maxDistance) return;

    if (city === end && total > 0) {
      count++;
    }

    for (const { to, dist } of graph.getNeighbors(city)) {
      dfs(to, total + dist);
    }
  }

  dfs(start, 0);
  return count;
}
