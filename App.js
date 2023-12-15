// src/App.js
import React, { useState } from 'react';
import './App.css'; // You may have to create this file

const CaseListing = () => {
  const cases = [
    { id: 1, name: 'Case A', priority: 'High' },
    { id: 2, name: 'Case B', priority: 'Medium' },
    { id: 3, name: 'Case C', priority: 'Low' },
  ];

  const [sortedCases, setSortedCases] = useState([...cases]);

  const prioritizeCases = () => {
    const sorted = [...cases].sort((a, b) => {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    setSortedCases(sorted);
  };

  return (
    <div>
      <h1>Case Listing</h1>
      <button onClick={prioritizeCases}>Prioritize Cases</button>
      <ul>
        {sortedCases.map((c) => (
          <li key={c.id}>
            {c.name} - Priority: {c.priority}
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <CaseListing />
    </div>
  );
}

export default App;
