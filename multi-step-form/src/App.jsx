import VerticalSideBar from './components/VerticalSideBar/VerticalSideBar'
import './App.css'
import Multistep from './components/Multistep/Multistep'
import { MultistepContext } from './providers/multistep.provider'
import { useState } from 'react'
function App() {

  const [step, setStep] = useState(0)
  const [userData, setUserData] = useState([])

  return (
    <section className='form-main-bg'>

      <VerticalSideBar/>
      <MultistepContext.Provider value={{step, setStep, userData, setUserData}}>
       <Multistep/>
        
       </MultistepContext.Provider>
     
    </section>
  )
 } 


export default App
