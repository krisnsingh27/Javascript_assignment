import React, { useState } from 'react';

function BackgroundColorGenerator() {
  const colors = [
    'red',
    'skyblue',
    'blue',
    'green',
    'olive',
    'yellow',
    'pink'
   
  ];

  const [bgColor, setBgColor] = useState(colors[0]);

  const generateColor = () => {
    const Index = Math.floor(Math.random() * colors.length);
    setBgColor(colors[Index]);
  };

  return (
    <>
    <h1>Background color generator</h1>
    <div
      style={{
        height: '100vh',
        backgroundColor: bgColor,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.5s ease',
        fontFamily: 'Arial',
        color: '#333333ff',
      }}
    >
      
      
    </div>
    <p>Current Color: <strong>{bgColor}</strong></p>
      <button
        onClick={generateColor}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#000',
          color: '#fff',
          cursor: 'pointer'
        }}
      >
        Change Color
      </button>
    </>
  );
}

export default BackgroundColorGenerator;
