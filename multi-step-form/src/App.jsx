import MultiStepForm from "./components/MultiStepForm.jsx";
import { SwitchContext } from "./providers/switch.provider.jsx";
import VerticalSideBar from "./components/VerticalSideBar/VerticalSideBar.jsx";
import { MultiStepContext } from "./providers/multistep.jsx";
import { useState } from "react";
import { UserPlanContext } from "./providers/userplan.jsx";

function App() {
  const [step, setStep] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [userPlan, setUserPlan] = useState({})

  // const [userData, setUserData] = useState([])

  // useEffect (()=>{
  // }, [])



  return (
    // * Body-ul initial
    
    <section className="flex flex-col relative h-[695px] w-[375px] bg-body_bg_color font-ubuntu">
      <SwitchContext.Provider value={{isSelected, setIsSelected }}>
      <MultiStepContext.Provider value={{step, setStep}}>
      <UserPlanContext.Provider value={{userPlan, setUserPlan}}> 
        <VerticalSideBar />

      <div className="flex flex-col absolute top-[102px] px-6 py-8 mx-4 gap-4 bg-[white] w-[343px] h-auto shadow-md rounded-xl">
      
          <MultiStepForm/>
       
      </div>
      <div className="flex absolute items-center bottom-0 h-[72px] w-[375px] justify-between px-4 bg-[white]">
        {step > 0 && step <4 ? (
          <button
            className="text-grey text-sm"
            onClick={() => setStep(step - 1)}
          >
            Go back
          </button>
        ) : (
          <div></div>
        )}
        {step < 3?
        (<button
          className="text-[white] text-sm bg-denim w-[97] h-10 px-4 rounded-md"
          onClick={() => setStep(step + 1)}
        >
          Next step
        </button>) : null}  {step >= 3 && step<4 ? 
        (<button className="text-sm text-[white] bg-purple h-10 w-[97] px-4 rounded-md" onClick={() => setStep(step + 1)}>
          Confirm
        </button>) : null}
        
      </div>
      </UserPlanContext.Provider> 
      </MultiStepContext.Provider>
      </SwitchContext.Provider>
    </section>
  );
}

export default App;
