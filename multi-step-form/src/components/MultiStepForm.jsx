import { useContext } from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import { MultiStepContext } from "../providers/multistep";
import FinalStep from "./Steps/FinalStep";
import ThankYou from "./Steps/ThankYou";

const MultiStepForm = () => {
 const {step} = useContext(MultiStepContext)
 const steps = [<Step1 />, <Step2 />, <Step3 />, <FinalStep/>, <ThankYou/>];


  return (
    <>
      {steps[step]}
      
    </>
  );
};

export default MultiStepForm;
