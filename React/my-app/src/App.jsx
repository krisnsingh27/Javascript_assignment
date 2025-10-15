import React from 'react'
import './App.css'
import Counter from './components/Counter'
import Backgroundcolor from './components/Backgroundcolor'
import P from './components/Props'
import Changecontent from './components/Changecontent'
import Event from './components/Event'
import Mousehover from './components/Mousehover'
import Mouseposition  from './components/Mouseposition'
import Notification  from './components/Notification'
import Charactercount from './components/Charactercount'
import BackgroundColorGenerator from './components/Backgroundcolorgenerator'
import ImageSlider from './components/Imagesilder'
import SignupForm from './components/SignupForm'
import Propsrendering from './components/Propsrendering'


function App() {
  return (
    <div>
       
      <Counter/>
      <Backgroundcolor/>
      <P name="krish" age="25"/>
      <Changecontent/>

      <Event/>
      <Mousehover/>
       <Mouseposition/>
       <Notification/>
       <Charactercount/>
       <BackgroundColorGenerator/>
       <ImageSlider/>
       <SignupForm/>
       <Propsrendering name='raj'/>
       <Propsrendering name='ujjwal'/>
       <Propsrendering name='rohit'/>

    </div>
  )
}

export default App






















