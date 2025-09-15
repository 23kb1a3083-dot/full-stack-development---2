import React from 'react';

function StringLiteralDisplay() {
  const name = "React Developer";
  const greeting = `Hello, ${name}! Welcome to the React world.`;

  return (
    <div>
      <h2>{greeting}</h2>
    </div>
  );
}

export default StringLiteralDisplay;
