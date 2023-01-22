import React, { useState } from 'react';

import './App.css'

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    })
      .then(res => res.json())
      .then(data => setResponse(data.message))
  }

  return (
    <div className="App p-3">
      <h2>Najathi Chat App</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          placeholder="Ask najathi anything"
          onChange={(e) => setMessage(e.target.value)}
        >
        </textarea>
        <br />
        <button type='submit'>Submit</button>
      </form>
      {response && <div className='p-3'>Najathi: {response}</div>}
    </div>
  );
}

export default App;
