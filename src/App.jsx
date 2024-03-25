import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import "./App.css";

function App() {
  return (
    <>
    <div className="App">
      <NavBar id="NavBar" />
      <div className="grid">
      <UserProfile id="UserProfile" />
      <Posts />
      <Contacts />
      </div>
      </div> 
    </>
  )
}

export default App;
