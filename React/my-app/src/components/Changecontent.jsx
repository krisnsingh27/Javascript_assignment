import React, { useState } from 'react'


function Changecontent() {
  const [message,SetMessage]=useState('')
  const clicked=()=>{
    SetMessage("button was clicked!")
    
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={clicked}>click me!</button>
    </div>
  )
}

export default Changecontent

