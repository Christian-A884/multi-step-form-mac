import Switch from "../Switch/Switch";
import { useContext } from "react";
import { SwitchContext } from "../../providers/switch.provider";
import PlanCard from "../PlanCard/PlanCard";

const Step2 = () => {
  const { period } = useContext(SwitchContext);

  return (
    <div className="flex-col w-full gap-[24px] md:h-[371px] md:w-[450px] md:gap-[32px]">
      <div className="flex flex-col gap-[9px] mb-[22px]">
        <h1 className="text-2xl font-bold text-denim">Select your plan</h1>
        <p className="text-base text-grey">You have the option of monthly or yearly billing.</p>
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:mt-6">
        <PlanCard />
      </div>

      <div className="flex items-center justify-center w-full h-12 gap-6 bg-very_light_grey mt-[24px] md:mt-8">
        <span className={period === "monthly" ? "text-sm text-denim" : "text-sm text-grey"}>Monthly</span>
        <Switch />
        <span className={period === "yearly" ? "text-sm text-denim" : "text-sm text-grey"}>Yearly</span>
      </div>
    </div>
  );
};

export default Step2;
