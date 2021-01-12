import React from 'react';
import './App.scss';


function App() {
  return (
    <div className="App">
      <h1 className="responsive-header">Responsive With</h1>
      <h1 className="scss-container"> SCSS + </h1>
      
  <h1 className="responsive-header">{process.env.REACT_APP_VALUE}</h1>
      </div>
    
  );
}

export default App;
