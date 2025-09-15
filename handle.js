import React from 'react';

function ClickHandler() {
  const handleClick = () => {
    alert('Button was clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ClickHandler;
