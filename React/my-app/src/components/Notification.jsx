import React, { useState } from 'react'

function Notification() {

  const [notification,setNotification]=useState("")  

  const handleclick=()=>{
      setNotification("This is notification")
      setTimeout(()=>{
         setNotification(" ")
      },5000)
  }
  
  return (
    <div>
      <button onClick={handleclick}>start</button>
      {notification && <div>{notification}</div>}
       
    </div>
  )
}

export default Notification
