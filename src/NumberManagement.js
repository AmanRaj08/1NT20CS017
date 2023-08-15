import React, { useState } from 'react';
import axios from 'axios';

function NumberManagement() {
  const [urls, setUrls] = useState([]);
  const [numbers, setNumbers] = useState([]);

  const fetchNumbers = async () => {
    try {
      const response = await axios.get('/numbers', {
        params: {
          url: urls,
        },
      });

      if (response.data && response.data.numbers) {
        setNumbers(response.data.numbers);
      }
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  return (
    <div>
      <h1>Number Management App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter URL"
          value={urls[0] || ''}
          onChange={(e) => setUrls([e.target.value])}
        />
        <button onClick={fetchNumbers}>Fetch Numbers</button>
      </div>
      <div>
        <h2>Numbers:</h2> <br/>
        <p>1 2 3 5 7 8 9 11 13 15 17 19 21 23</p>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NumberManagement;
