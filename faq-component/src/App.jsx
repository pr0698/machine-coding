import { useState } from 'react'
import './App.css'
import data from './assets/data'
import FaqComponent from './component/FaqComponent'

function App() {


  return (
    <div>
         <FaqComponent data = {data}/>
    </div>
  )
}

export default App
