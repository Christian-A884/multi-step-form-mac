import { useState } from "react";
import { addOns } from "../../data";

const Step3 = () => {
  const [isChecked, setIsChecked] = useState({});
  



  const handleCheck = (e) => {
    setIsChecked({ ...isChecked, [e.target.name]: e.target.checked });
  };
  return (
    <div className="flex flex-col w-full gap-[24px]">
      <div className="flex flex-col gap-[9px]">
        <h1 className="text-2xl font-bold text-denim">Pick add-ons</h1>
        <p className="text-base text-grey">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div
          className={
            !isChecked.name
              ? "flex w-[e295px] h-[62px] justify-start items-center border rounded-lg px-4 py-3"
              : "flex w-[295px] h-[62px] justify-start items-center border border-purple rounded-lg px-4 py-3"
          }
        >
          <input
            name={addOns[0].title}
            type="checkbox"
            onChange={() => handleCheck}
            checked={isChecked.name || false}
            className="w-4 h-4 mr-[16px] "
          />
          <div className="flex">
            <div className="flex flex-col mr-[35px] ">
              <span className="text-sm text-denim font-medium">
                {addOns[0].title}
              </span>
              <span className="text-xs text-light_grey font-light">
                {addOns[0].details}
              </span>
            </div>
            <div>
              <span className="text-xs text-purple">{addOns[0].price}</span>
            </div>
          </div>
        </div>
        <div
          className={
            isChecked
              ? "flex w-[295px] h-[62px] justify-start items-center border rounded-lg px-4 py-3"
              : "flex w-[295px] h-[62px] justify-start items-center border border-purple rounded-lg px-4 py-3"
          }
        >
          <input
            name={addOns[1].title}
            type="checkbox"
            onChange={handleCheck}
            checked={isChecked.name || false}
            className="w-4 h-4 mr-[16px] "
          />
          <div className="flex">
            <div className="flex flex-col justify-between mr-[70px] ">
              <span className="text-sm text-denim font-medium">
                {addOns[1].title}
              </span>
              <span className="text-xs text-light_grey font-light">
                {addOns[1].details}
              </span>
            </div>
            <div>
              <span className="text-xs text-purple">{addOns[1].price}</span>
            </div>
          </div>
        </div>
        <div
          className={
            isChecked
              ? "flex w-[295px] h-[62px] justify-start items-center border rounded-lg px-4 py-3"
              : "flex w-[295px] h-[62px] justify-start items-center border border-purple rounded-lg px-4 py-3"
          }
        >
          <input
            name=""
            type="checkbox"
            onChange={handleCheck}
            checked={isChecked.name || false}
            className="w-4 h-4 mr-[16px] "
          />
          <div className="flex">
            <div className="flex flex-col mr-[20px] ">
              <span className="text-sm text-denim font-medium">
                {addOns[2].title}
              </span>
              <span className="text-xs text-light_grey font-light">
                {addOns[2].details}
              </span>
            </div>
            <div>
              <span className="text-xs text-purple">{addOns[2].price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
