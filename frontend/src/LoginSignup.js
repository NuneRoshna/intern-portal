import React, { useState } from "react";

export default function LoginSignup({ onLogin }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("LoginSignup: input =", input);
    if (typeof onLogin !== "function") {
      console.error("❌ onLogin is not a function!", onLogin);
      return;
    }
    onLogin(input);
  };

  return (
    <div className="container">
      <h2>Login / Signup</h2>
      <p>No real auth — enter your name:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Your name"
          autoFocus
        />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}
