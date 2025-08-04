import React, { useState } from "react";
import LoginSignup from "./LoginSignup";
import Dashboard from "./Dashboard";

export default function App() {
  const [internName, setInternName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (name) => {
    console.log("App: handleLogin called with", name);
    setInternName(name.trim() || "Intern");
    setLoggedIn(true);
  };

  return loggedIn
    ? <Dashboard internName={internName} />
    : <LoginSignup onLogin={handleLogin} />;
}
