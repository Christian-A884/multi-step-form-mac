import { useContext, useState } from "react";
import { addOns } from "../../data";
import { SwitchContext } from "../../providers/switch.provider";

const AddOn = () => {
  const [checkedState, setCheckedState] = useState({});
  const [userOption, setUserOption] = useState({});
  const { isSelected } = useContext(SwitchContext);
  console.log(userOption)
  const handleCheck = (e) => {
    const { name, checked } = e.target;
    setCheckedState({ ...checkedState, [name]: checked });
  };
  const handleOption = (opt, title, price, priceYear) => {
    setUserOption({...addOns[opt], title, price, priceYear });
  console.log(addOns[opt])

  };
 
  return addOns.map((opt, add) => (
    <div key={add} onChange={ handleOption(opt.title)} className="flex flex-col gap-3">
      <div 
        className={`flex w-[e295px] h-[62px] items-center  px-4 py-3 border rounded-lg ${
          checkedState[opt.title] ? "border-purple bg-very_light_grey" : ""
        }`}
      >
        <input
          name={opt.title}
          type="checkbox"
          checked={checkedState[opt.title] || false}
          onChange={(e) => {
            handleCheck(e)
           
          }
        }

         
          className="w-4 h-4 mr-[16px]"
        />
        <div   className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <span className="text-sm text-denim font-medium">
              {opt.title}
            </span>
            <span className="text-xs text-light_grey font-light">
              {opt.details}
            </span>
          </div>
          <div className="flex">
            <span className="text-xs text-purple">
              {!isSelected ? `${opt.price}` : `${opt.priceYear}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default AddOn;
