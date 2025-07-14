import React from 'react';
import './App.css';
import TodoApp from './TodoApp';

// PUBLIC_INTERFACE
function App() {
  // Wrapper for future global logic (e.g., theming)
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
