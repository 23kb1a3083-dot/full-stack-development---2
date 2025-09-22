import React from "react";

function App() {
  const name = "ChatGPT";
  const greeting = `Hello, welcome to ${name}!`;

  return (
    <div>
      <h1>{greeting}</h1>
      <p>{`This is a simple React app using string literals.`}</p>
    </div>
  );
}

export default App;
