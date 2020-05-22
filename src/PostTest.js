import React from 'react';

function App() {
  console.log('DFLKJDSF');
  fetch('/api/createpost', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ caption: 'Hello', userId: 1 }),
  });

  return <div></div>;
}

export default App;
