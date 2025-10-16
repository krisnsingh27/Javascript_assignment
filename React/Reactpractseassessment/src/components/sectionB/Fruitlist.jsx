import React from 'react'

function Fruitlist() {
    const fruit=["Apple", "Banana", "Mango", "Orange"]

  return (
    <div>
      <ul>
         {fruit.map((fruits,index)=>(
            <li key={index}>{fruits}</li>
         )

         )}
      </ul>
    </div>
  )
}

export default Fruitlist
