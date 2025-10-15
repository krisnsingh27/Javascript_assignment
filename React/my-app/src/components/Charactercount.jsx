import React, { useState } from 'react';

function CharacterCounter() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial' }}>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
        rows={5}
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      <div style={{ textAlign: 'right', marginTop: '5px', color: '#555' }}>
        Character Count: {text.length}
      </div>
    </div>
  );
}

export default CharacterCounter;
