import React from 'react'
import Welcome from './components/sectionB/Welcome'
import Student from './components/sectionB/Student'
import Counter from './components/sectionB/Counter'
import ColorChange from './components/sectionB/ColorChange'
import Loginstatus from './components/sectionB/Loginstatus'
import Fruitlist from './components/sectionB/Fruitlist'
import Todo from './components/sectionC/Todo'
import Dashboard from './components/sectionC/Dashboard'
import Togglemessage from './components/Togglemessage'

function App() {
  return (
    <div>
      <Welcome/>
      <Student name="Raj" course="Reactfundamental"/>
      <Counter/>
      <ColorChange/>
      <Loginstatus/>
      <Fruitlist/>
      <Todo/>
      <Dashboard/>
      <Togglemessage/>
      
    </div>
  )
}

export default App
