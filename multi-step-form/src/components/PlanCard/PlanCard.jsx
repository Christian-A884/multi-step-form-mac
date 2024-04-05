import { planCards } from "../../data";
import { useContext, useState } from "react";
import { SwitchContext } from "../../providers/switch.provider";
const PlanCard = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
 const {isSelected} = useContext(SwitchContext)

  const handleClick = (title) => {
    setSelectedPlan(title);
   
  };
  return (
    <>
      {planCards.map((plan, card) => (
        <div key={plan} onClick={() => handleClick(planCards[card].title)}
        className={
          selectedPlan === planCards[card].title
            ? "flex items-center gap-4 w-[295px] h-[77px] pl-4 bg-very_light_grey border border-purple rounded-lg"
            : "flex items-center gap-4 w-[295px] h-[77px] pl-4  border border-ligh_grey rounded-lg"
        } >
          <div>
            <img src={planCards[card].image} />
          </div>
          <div className="flex flex-col">
            <span className="text-base text-denim ">
              {planCards[card].title}
            </span>
            <span className="text-sm text-grey">
              {!isSelected ? `${planCards[card].price}` : `${planCards[card].priceYear}` }
            </span>
            <span className={isSelected ? "text-xs text-denim" : "hidden"}>
              2 months free
            </span>
          </div>
        </div>
      ))}
    </>  
  );
};

export default PlanCard;