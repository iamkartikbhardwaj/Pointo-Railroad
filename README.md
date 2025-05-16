Absolutely! Below is the full `README.md` content that you can copy-paste **as-is** into your `README.md` file:

---

````markdown
# 🚆 Pointo Railroad Route Solver

This project solves **Problem Statement 1** from the POINTO Coding Assignment using **modern JavaScript (ES Modules)**. It reads a directed, weighted graph of train routes and answers a series of route-related questions using clean, modular logic and depth-first search (DFS).

---

## 📌 Problem Summary

You're given a graph where:

- **Nodes** = Cities (e.g., A, B, C)
- **Edges** = One-way routes with distances (e.g., `AB5` = 5 units from A to B)

You're asked to:

- Calculate distances of specific routes
- Count the number of valid trips under constraints
- Determine the shortest route between cities
- Count cycles within a distance limit

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pointo-railroad.git
   cd pointo-railroad
   ```
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Ensure Node version is 18 or later**

   ```bash
   node -v
   ```

---

## ▶️ Run the Application

To calculate and print all 10 outputs:

```bash
npm start
```

✅ This will run `src/index.js` using the graph defined in `input.txt` and print answers to all questions.

---

## 🧪 Run Unit Tests

Jest is configured to work with ES modules using the experimental VM module flag.

```bash
npm test
```

If needed, run manually:

```bash
node --experimental-vm-modules node_modules/jest/bin/jest.js
```

Tests include:

- Route distance checks
- Trip count validation with stops
- Shortest path resolution
- Cycle count below distance thresholds

---

## ✨ Sample Output

```
Output #1: 9
Output #2: 5
Output #3: 13
Output #4: 22
Output #5: NO SUCH ROUTE
Output #6: 2
Output #7: 3
Output #8: 9
Output #9: 9
Output #10: 7
```

---

## ✏️ Modify Input

You can modify `input.txt` to test custom graphs:

```
AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7
```

---

## 🧠 Algorithms Used

- **DFS (Depth First Search)** for exploring all paths
- Path pruning to avoid infinite recursion on cyclic routes
- Basic edge/path validation
- Shortest path search with depth tracking

---

## 📦 Tech Stack

- Node.js
- ES Modules
- Jest (for testing)

---

## 👨‍💻 Author

Built by \Kartik Bhardwaj as part of the **POINTO Coding Assignment – Problem Statement 1**.

---

## 📝 License

This project is open-source and free to use.

```

```
