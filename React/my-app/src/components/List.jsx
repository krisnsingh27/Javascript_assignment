
import React, { useState } from 'react';

function List() {
  const [interns, setInterns] = useState(['Existing Intern']);

  const addIntern = () => {
    setInterns([...interns, 'Intern 1']);
  };

  return (
    <div>
      <ul id="internList">
        {interns.map((intern, index) => (
          <li key={index}>{intern}</li>
        ))}
      </ul>
      <button onClick={addIntern}>Add Intern</button>
    </div>
  );
}

export default List;

