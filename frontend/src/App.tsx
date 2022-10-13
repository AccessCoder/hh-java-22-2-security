import React, {useState} from 'react';
import './App.css';
import axios from "axios";

function App() {

  const [welcomeMessage, setWelcomeMessage] = useState("")

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  function fetchWelcomeMessage () {
      axios.get("/api/hello")
          .then(response => response.data)
          .then(data => setWelcomeMessage(data))
  }

  function handleLogin(){
      // log in (get session) with username and password
      axios.get("api/user/login", {auth: {username, password}})

  }

  return (
    <div className="App">
      <header className="App-header">

          <h3>Login</h3>
          <input value={username} onChange={event => setUsername(event.target.value)} />
          <input value={password} onChange={event => setPassword(event.target.value)} />
          <button onClick={handleLogin}>Login</button>

          <p>{welcomeMessage}</p>
          <button onClick={fetchWelcomeMessage}>Say Hello!</button>

      </header>
    </div>
  );
}

export default App;
