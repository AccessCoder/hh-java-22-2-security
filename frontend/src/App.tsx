import React, {useState} from 'react';
import './App.css';
import axios from "axios";

function App() {

  const [welcomeMessage, setWelcomeMessage] = useState("")

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [me, setMe] = useState("")

    const [newUsername, setNewUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")

  function fetchWelcomeMessage () {
      axios.get("/api/hello")
          .then(response => response.data)
          .then(data => setWelcomeMessage(data))
  }

  function handleLogin(){
      // log in (get session) with username and password
      axios.get("api/user/login", {auth: {username, password}})
          .then(response => response.data)
          .then((data) => setMe(data))
          .then(() => setUsername(""))
          .then(() => setPassword(""))
          .catch(() => alert("Sorry, User oder Passwort war falsch!"))
  }

  function handleLogout(){
      axios.get("api/user/logout")
          .then(() => setMe(""))
  }

  function handleRegister(){
      axios.post("api/user/register", {
              username: newUsername,
              password: newPassword
          })
          .then(() => setNewUsername(""))
          .then(() => setNewPassword(""))
  }

  return (
    <div className="App">
      <header className="App-header">

          {!me &&
              <>
                  <h3>Login</h3>
                  <input value={username} onChange={event => setUsername(event.target.value)}/>
                  <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                  <button onClick={handleLogin}>Login</button>

                  <h3>Sign Up</h3>
                  <input value={newUsername} onChange={event => setNewUsername(event.target.value)} />
                  <input type="password" value={newPassword} onChange={event => setNewPassword(event.target.value)} />
                  <button onClick={handleRegister}>Sign Up</button>
              </>
          }
          {me && <>
                  <p>Angemeldet als: {me}</p>
                  <button onClick={handleLogout}>Logout</button>

                  <p>{welcomeMessage}</p>
                  <button onClick={fetchWelcomeMessage}>Say Hello!</button>
              </>
          }

      </header>
    </div>
  );
}

export default App;
