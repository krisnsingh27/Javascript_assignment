import React, { useState } from 'react'

function Textprint() {

  let [text,setText]=useState("")
  const str="welcome to Dom";
  const handleclick = () => {
   
    let i = 0
    const id = setInterval(() => {
      if(i<=str.length-1){
      setText(prev => prev + str.charAt(i))
      console.log(str.charAt(i));
      
        i++;
      }
      else {(i == str.length-1) 
        clearInterval(id)
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
