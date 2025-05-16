# 🚆 Pointo Railroad Route Solver

This project solves **Problem Statement 1** from the POINTO Coding Assignment. It is built using **modern JavaScript (ES modules)**, follows clean coding practices, and includes comprehensive unit tests.

---

## 📌 Problem Summary

You're given a **directed, weighted graph** where:

- **Nodes** = Cities (e.g. A, B, C)
- **Edges** = One-way routes with distances (e.g. `AB5` = 5 units from A to B)

You are required to answer 10 questions:

1. Calculate the distance of specific routes
2. Count trips with stop constraints
3. Find the shortest routes between cities
4. Count cycles within a distance constraint

---

## 📂 Project Structure

pointo-railroad/
├── input.txt # Graph input (e.g., AB5, BC4...)
├── jest.config.js # Jest config for ESM
├── package.json # NPM metadata and scripts
├── README.md # This documentation
├── src/
│ ├── graph.js # Graph parser and class
│ ├── solver.js # Core algorithms (DFS-based)
│ └── index.js # Main entry point for the app
└── test/
└── solver.test.js # Full test coverage using Jest

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pointo-railroad.git
   cd pointo-railroad
   Install dependencies
   ```

bash
Copy
Edit
npm install
Ensure Node version is 18+

bash
Copy
Edit
node -v
▶️ Run the Application
To calculate all 10 answers:

bash
Copy
Edit
npm start
✅ This will run src/index.js using the graph defined in input.txt and output the results.

🧪 Run Unit Tests
Jest is configured to support ES modules via Node's experimental flags.

bash
Copy
Edit
npm test
If needed, run tests with:

bash
Copy
Edit
node --experimental-vm-modules node_modules/jest/bin/jest.js
All major functions are unit tested:

Route distance

Trip count (with stop constraints)

Shortest path

Path count below a distance

✨ Sample Output (with given input.txt)
nginx
Copy
Edit
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
✏️ Modify Input
Edit the input.txt file to define your own graph:

Copy
Edit
AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7
🧠 Algorithms Used
DFS (Depth First Search) with backtracking and constraint checking

Visited path tracking to avoid infinite recursion in cyclic graphs

Manual shortest-path evaluation for small graphs (Dijkstra not required here)
