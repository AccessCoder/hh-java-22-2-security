import React, {useState} from 'react';
import './App.css';
import axios from "axios";

function App() {

  const [welcomeMessage, setWelcomeMessage] = useState("")

  function fetchWelcomeMessage () {
      axios.get("/api/hello")
          .then(response => response.data)
          .then(data => setWelcomeMessage(data))
  }

  return (
    <div className="App">
      <header className="App-header">

          <p>{welcomeMessage}</p>
          <button onClick={fetchWelcomeMessage}>Say Hello!</button>

      </header>
    </div>
  );
}

export default App;
