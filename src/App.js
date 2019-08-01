import React from 'react';
import Demo from './Demo';
import './App.css';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Demo nestedProp={{ first: { second: 'hello world' } }} />
        </li>
        <li>
          <Demo nestedProp={{ first: {} }} />
        </li>
      </ul>
    </div>
  );
}

export default App;
