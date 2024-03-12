import { useContext } from "react"
import { MultistepContext } from "../../providers/multistep.provider"
import FirstStep from "./FirstStep/FirstStep"
import SecondStep from "./SecondStep/SecondStep"
import ThirdStep from "./ThirdStep/ThirdStep"
import FourthStep from "./FourthStep/FourthStep"
import Thankyou from "./Thankyou/Thankyou"


const Multistep = () => {
  const {step,setStep} = useContext(MultistepContext)
  const elements = [
    {Component: <FirstStep/>},
    {Component: <SecondStep/>},
    {Component: <ThirdStep/>},
    {Component: <FourthStep/>},
    {Component: <Thankyou/>}
  ]

  return (
    <>
      {elements[step].Component}
      <div className="form-button-container" >
        {step===0 ? null:(<button onClick={()=>{setStep(step-1)}}>Go Back</button>)}
        
        {step>=2 ? null:(<button className="form-button"  onClick={()=>{setStep(step+1)}}>Next Step</button>)}

        {step<4 && step===4 ? null:(<button className="form-button"  onClick={()=>{setStep(step+1)}}>Confirm</button>)}

      </div>
      
    </>
  )
}

export default Multistep