import { useContext } from "react";
import "./VerticalSideBar.css";
import { SwitchContext } from "../../providers/switch.provider.jsx";

const VerticalSideBar = () => {
  const { step } = useContext(SwitchContext);

  return (
    <div className="flex justify-center bg-cover bg-[url('assets/images/bg-sidebar-mobile.svg')] w-[375px] h-[172px] gap-4 py-8 md:h-[568px] md:w-[274px] md:bg-[url('assets/images/bg-sidebar-desktop.svg')] md:ml-[282px] md:z-10 md:mt-[120px] md:flex-col md:justify-start md:pl-8 md:pt-10 md:gap-8">
      <div className="md:flex md:gap-4">
        <div
          className={
            step === 0
              ? "flex items-center justify-center bg-sky_blue border-none rounded-full  text-[black] text-sm w-[33px] h-[33px]"
              : "flex items-center justify-center  border-2 border-solid border-[white] rounded-full  text-[white] text-sm w-[33px] h-[33px]"
          }
        >
          1
        </div>
        <div className="hidden md:flex md:flex-col">
          <span className="text-xs text-light_blue uppercase">Step 1</span>
          <p className="font-bold text-white text-sm uppercase tracking-widest">Your info</p>
        </div>
      </div>
      <div className="md:flex md:gap-4">
        <div
          className={
            step === 1
              ? "flex items-center justify-center bg-sky_blue border-2 border-none rounded-full  text-[white] text-sm w-[33px] h-[33px] "
              : "flex items-center justify-center  border-2 border-solid border-[white] rounded-full  text-[white] text-sm w-[33px] h-[33px] "
          }
        >
          2
        </div>
        <div className="hidden md:flex md:flex-col">
          <span className="text-xs text-light_blue uppercase">Step 2</span>
          <p className="font-bold text-white text-sm uppercase tracking-widest">Select plan</p>
        </div>
      </div>
      <div className="md:flex md:gap-4">
        <div
          className={
            step === 2
              ? "flex items-center justify-center bg-sky_blue border-none rounded-full  text-[white] text-sm w-[33px] h-[33px] "
              : "flex items-center justify-center  border-2 border-solid border-[white] rounded-full  text-[white] text-sm w-[33px] h-[33px] "
          }
        >
          3
        </div>
        <div className="hidden md:flex md:flex-col">
          <span className="text-xs text-light_blue uppercase">Step 3</span>
          <p className="font-bold text-white text-sm uppercase tracking-widest">Add-ons</p>
        </div>
      </div>
      <div className="md:flex md:gap-4">
        <div
          className={
            step >= 3
              ? "flex items-center justify-center bg-sky_blue border-none rounded-full  text-[white] text-sm w-[33px] h-[33px] "
              : "flex items-center justify-center  border-2 border-solid border-[white] rounded-full  text-[white] text-sm w-[33px] h-[33px] "
          }
        >
          4
        </div>
        <div className="hidden md:flex md:flex-col">
          <span className="text-xs text-light_blue uppercase">Step 4</span>
          <p className="font-bold text-white text-sm uppercase tracking-widest">Summary</p>
        </div>
      </div>
    </div>
  );
};

export default VerticalSideBar;
