import { useState } from "react";
import { addOns } from "../../data";

const AddOn = () => {
  const [checkedState, setCheckedState] = useState({});
  const handleCheck = (e) => {
    const { name, checked } = e.target;
    setCheckedState({ ...checkedState, [name]: checked });
  };

  return (
   addOns.map((addOn,add) =>
   
   <div key={add} className="flex flex-col gap-3">
    <div
      className= {`flex w-[e295px] h-[62px] justify-start items-center  px-4 py-3 border rounded-lg ${checkedState[addOn.title] ? "border-purple bg-very_light_grey" : ""}`}
    >
      <input
        name={addOn.title}
        type="checkbox"
        checked={checkedState[addOn.title] || false}
        onChange={handleCheck}
        className="w-4 h-4 mr-[16px]"
      />
      <div className="flex">
        <div className="flex flex-col mr-[35px] ">
          <span className="text-sm text-denim font-medium">
            {addOn.title}
          </span>
          <span className="text-xs text-light_grey font-light">
            {addOn.details}
          </span>
        </div>
        <div>
          <span className="text-xs text-purple">{addOn.price}</span>
        </div>
      </div>
    </div>
    </div> 
   ))}
   
   export default AddOn;