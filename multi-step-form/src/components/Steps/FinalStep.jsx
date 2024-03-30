const FinalStep = () => {
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
              <p className="text-sm text-denim">Arcade (Monthly)</p>
              <button className="text-sm text-grey underline pb-2 leading-5 ">Change</button>
            </div>
            <div>
              <span className="text-sm text-denim font-bold ">$9/mo</span>
            </div>
          </div>

          <div className="flex flex-col pt-3">
            <div className="flex justify-between">
              <span className="text-sm text-grey leading-5 font-light ">Online service</span>
              <span className="text-sm text-denim font-light">+$1/mo</span>
            </div>
            <div className="flex justify-between pt-3">
              <span className="text-sm text-grey leading-5 font-light ">Larger storage</span>
              <span className="text-sm text-denim font-light">+$2/mo</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-4 pt-[24px] ">
          <span className="text-sm text-grey leading-5 font-light ">Total (per month)</span>
          <span className="text-md text-purple font-bold">+$12/mo</span>
        </div>
      </div>
    </div>
  );
};

export default FinalStep;
