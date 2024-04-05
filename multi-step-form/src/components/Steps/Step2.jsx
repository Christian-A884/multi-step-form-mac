import Switch from "../Switch/Switch";
import { useState } from "react";
// import { planCards } from "../../data";
import { SwitchContext } from "../../providers/switch.provider";
import PlanCard from "../PlanCard/PlanCard";

const Step2 = () => {

  const [isSelected, setIsSelected] = useState(false);
  
  return (
    <SwitchContext.Provider value={{ isSelected, setIsSelected }}>
      <div className="flex-col w-full gap-[24px]">
        <div className="flex flex-col gap-[9px] mb-[22px]">
          <h1 className="text-2xl font-bold text-denim">Select your plan</h1>
          <p className="text-base text-grey">
            You have the option of monthly or yearly billing.
          </p>
        </div>
        <div className="flex flex-col gap-3">
        
            <PlanCard/>
    
        </div>

        <div className="flex items-center justify-center w-full h-12 gap-6 bg-very_light_grey mt-[24px]">
          <span
            className={!isSelected ? "text-sm text-denim" : "text-sm text-grey"}
          >
            Monthly
          </span>
          <Switch />
          <span
            className={isSelected ? "text-sm text-denim" : "text-sm text-grey"}
          >
            Yearly
          </span>
        </div>
      </div>
    </SwitchContext.Provider>
  );
};

export default Step2;
