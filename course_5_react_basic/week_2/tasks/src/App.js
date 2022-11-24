// import logo from './logo.svg';
import React from 'react';

import './App.css';
import Fruits from './components/Fruits';
import FruitsCounter from './components/FruitsCounter';

function App() {
  function handleClick() {
        let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        let userInput = prompt('type a number');
        alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
      }

    const [fruits] = React.useState([
      {fruitName: 'apple', id: 1},
      {fruitName: 'apple', id: 2},
      {fruitName: 'plum', id: 3},
    ]);
    
      return (
        <div>
          <h1>Task: Add a button and handle a click event</h1>
          <button onClick={handleClick}>Guess the number between 1 and 3</button>
        
        <div>
          <h1>Where should the state go?</h1>
          <Fruits fruits={fruits} />
          <FruitsCounter fruits={fruits} />
        </div>
        </div> 


      );
}

export default App;
