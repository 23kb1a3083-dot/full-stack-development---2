import React, { useState } from 'react';

function ConditionalRender() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Message
      </button>
      {isVisible && <p>This message is conditionally rendered.</p>}
    </div>
  );
}

export default ConditionalRender;
