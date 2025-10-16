import React, { useState } from 'react'

function Loginstatus() {
    const [islogin,setisLogin]=useState(false)
    const handleclick=()=>{
       if(!islogin){
        setisLogin(true)
       }else{
        setisLogin(false)
       }
    }

    
  return (
    <div>
        
      <button onClick={handleclick}>{islogin ? 'welcome back!' : 'please Login'}</button>
    </div>
  )
}

export default Loginstatus
