import Switch from "../Switch/Switch";
import { useState } from "react";
import { planCards } from '../../data'
import { SwitchContext } from "../../providers/switch.provider";

const Step2 = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (title) => {
    setSelectedPlan(title);
  };

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
          <div
            onClick={() => handleClick("Arcade")}
            className={
              selectedPlan === "Arcade"
                ? "flex items-center gap-4 w-[295px] h-[77px] pl-4 bg-very_light_grey border border-purple rounded-lg"
                : "flex items-center gap-4 w-[295px] h-[77px] pl-4  border border-ligh_grey rounded-lg"
            }
          >
            <div>
              <img src={planCards[0].image} />
            </div>
            <div className="flex flex-col">
              <span className="text-base text-denim ">
                {planCards[0].title}
              </span>
              <span className="text-sm text-grey">
                {!isSelected ? `${planCards[0].price}` : "$90/yr"}
              </span>
              <span className={isSelected ? "text-xs text-denim" : "hidden"}>
                2 months free
              </span>
            </div>
          </div>
          <div
            onClick={() => handleClick("Advanced")}
            className={
              selectedPlan === "Advanced"
                ? "flex items-center gap-4 w-[295px] h-[77px] pl-4 bg-very_light_grey border border-purple rounded-lg"
                : "flex items-center gap-4 w-[295px] h-[77px] pl-4  border border-ligh_grey rounded-lg"
            }
          >
            <div>
              <img src={planCards[1].image} alt="" />
            </div>
            <div className="flex flex-col">
              <span className="text-base text-denim ">Advanced</span>
              <span className="text-sm text-grey">
                {!isSelected ? "$12/mo" : "$120/yr"}
              </span>
              <span className={isSelected ? "text-xs text-denim" : "hidden"}>
                2 months free
              </span>
            </div>
          </div>
          <div
            onClick={() => handleClick("Pro")}
            className={
              selectedPlan === "Pro"
                ? "flex items-center gap-4 w-[295px] h-[77px] pl-4 bg-very_light_grey border border-purple rounded-lg"
                : "flex items-center gap-4 w-[295px] h-[77px] pl-4  border border-ligh_grey rounded-lg"
            }
          >
            <div>
              <img src={planCards[2].image} alt="" />
            </div>
            <div className="flex flex-col">
              <span className="text-base text-denim ">
                {planCards[2].title}
              </span>
              <span className="text-sm text-grey">
                {!isSelected ? `${planCards[0].price}` : "$150/yr"}
              </span>
              <span className={isSelected ? "text-xs text-denim" : "hidden"}>
                2 months free
              </span>
            </div>
          </div>
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
