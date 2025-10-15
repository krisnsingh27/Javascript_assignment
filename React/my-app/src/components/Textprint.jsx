import React, { useState } from 'react'

function Textprint() {

  const [text,setText]=useState("")
  const str="welcome to Dom";
  const handleclick = () => {
   
    let i = 0
    const id = setInterval(() => {
      if (i < str.length-1) {
        setText(prev => prev + str[i])
        i++;
      } else {
        clearInterval(id);
      }
    }, 500)
  }
  return (
    <div>
       <button onClick={handleclick} style={{color:"white",backgroundColor:"black",borderRadius:"5px"}}>start</button>
       <p>{text}</p>
    </div>
  )
}

export default Textprint
