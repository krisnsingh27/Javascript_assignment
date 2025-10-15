import React, { useState } from 'react';

function SignupForm() {
  const [username, setUsername] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (username.trim() === '') {
      setErrorMsg('Username is required');
    } else {
      setErrorMsg('Form submitted');
     
      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="username"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Submit</button>
      <p style={{ color: 'red' }}>{errorMsg}</p>
    </form>
  );
}

export default SignupForm;
