import React, { useState } from "react";

function Counter() {
  
  let [count, setCount] = useState(0);

  
const handleinc=()=>{
    setCount(count + 1); 
    
}

const handledec=()=>{
    setCount(count-1);
}
const handlereset=()=>{
    setCount(0);
}

  return (
    <div style={{textAlign:"center"}}>
      <p>{count}</p>
      <button onClick={handleinc} style={{border:"1px solid white",backgroundColor:"red",borderRadius:"10px",textAlign:"center"}}>
        inc
      </button>
      <button onClick={handledec}style={{border:"1px solid white",backgroundColor:"red",borderRadius:"10px",textAlign:"center"}}>
        des
      </button>
       <button onClick={handlereset}style={{border:"1px solid white",backgroundColor:"red",borderRadius:"10px",textAlign:"center"}}>
        res
      </button>

      
      
    </div>
  );
}

export default Counter;