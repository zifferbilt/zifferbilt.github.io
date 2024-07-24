import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('/')
      .then(response => response.text())
      .then(data => console.log(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Zifferbilt</h1>
      </header>
    </div>
  );
}

export default App;

