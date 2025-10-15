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
import Textprint from './components/Textprint'
import Toggletheme from './components/Toggletheme'
import List from './components/List'
import Clickcounter from './components/Clickcounter'


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
       <Textprint/>
       <Toggletheme/>
       <List/>
       <Clickcounter/>

    </div>
  )
}

export default App






















