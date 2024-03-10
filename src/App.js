import { useState } from 'react';
import './App.css';
import calculateTime from './CalculateTime';

function App() {

  const [userInput, setUserInput] = useState("");
  const [time, setTime] = useState("");

  function showResultToUser(userInput) {
    const answer = calculateTime(userInput);
    //setTime(answer);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://cdn.mos.cms.futurecdn.net/HjrVVsTBP8FfZoErpbWn4F-650-80.jpeg.webp" alt="time" />
      </header>
      <div className='Container'>
        <p>Given the angle of the hour hand, we can calculate the time the time for you!</p>
        <p>Enter a number</p>
        <input type='text' id='tb1' onChange={(e) => setUserInput(e.target.value)} />
        <div className='Button-Wrapper'>
          <button onClick={showResultToUser("hello")}>Calculate Time</button>
        </div>
        <p>your time is : {time}</p>
      </div>
    </div>
  );
}

export default App;
