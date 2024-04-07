import { useContext } from "react";
import { SwitchContext } from "../../providers/switch.provider";

const FinalStep = () => {
  const { userPlan, period, selectedAddonsWithPrice, totalPrice } =
    useContext(SwitchContext);

  return (
    <div className="flex flex-col w-full gap-[24px]">
      <div className="flex flex-col gap-[9px]">
        <h1 className="text-2xl font-bold text-denim">Finishing up</h1>
        <p className="text-base text-grey">
          Double-check everithing looks OK before confirming.
        </p>
      </div>
      <div className="flex flex-col h-auto w-full ">
        <div className="flex flex-col bg-very_light_grey px-[24px] rounded-lg py-4">
          <div className="flex justify-between items-center border-b border-light_grey">
            <div className="flex flex-col justify-start items-start">
              <p className="text-sm text-denim">
                {userPlan.title}{" "}
                {period === "monthly" ? "(Monthly)" : "(Yearly)"}
              </p>
              <button className="text-sm text-grey underline pb-2 leading-5 ">
                Change
              </button>
            </div>
            <div>
              <span className="text-sm text-denim font-bold ">
                {" "}
                {`
                                +$${
                                  period === "monthly"
                                    ? userPlan.monthlyPrice
                                    : userPlan.monthlyPrice * 10
                                }/${period === "monthly" ? "mo" : "yr"}
                                `}
              </span>
            </div>
          </div>

          {selectedAddonsWithPrice.length > 0 &&
            selectedAddonsWithPrice.map((el, index) => (
              <div key={index} className="flex flex-col pt-3">
                <div className="flex justify-between">
                  <span className="text-sm text-grey leading-5 font-light ">
                    {el.name}
                  </span>
                  <span className="text-sm text-denim font-light">
                    {`+$${el.price}${period === "monthly" ? "/mo" : "/yr"}`}
                  </span>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-between px-4 pt-[24px] ">
          <span className="text-sm text-grey leading-5 font-light ">
            Total (per {period === "monthly" ? "month" : "year"})
          </span>
          <span className="text-md text-purple font-bold">
            {`
			 +$${totalPrice}/${period === "monthly" ? "mo" : "yr"}
			 `}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FinalStep;
