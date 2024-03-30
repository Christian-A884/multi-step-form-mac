import "./VerticalSideBar.css";

const VerticalSideBar = () => {
  return (
    <div className="flex justify-center bg-cover bg-[url('assets/images/bg-sidebar-mobile.svg')] w-[375px] h-[172px] gap-4 py-8">
      <div>
        <div className="flex items-center justify-center border-2 border-solid border-[white] rounded-full  text-[white] text-sm w-[33px] h-[33px] ">
          1
        </div>
        <div className="hidden">
          <span>Step 1</span>
          <p>Your info</p>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center border-2 border-solid border-[white] rounded-full  text-[white] text-sm w-[33px] h-[33px] ">
          2
        </div>
        <div className="hidden">
          <span>Step 2</span>
          <p>Select plan</p>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center border-2 border-solid border-[white] rounded-full  text-[white] text-sm w-[33px] h-[33px] ">
          3
        </div>
        <div className="hidden">
          <span>Step 3</span>
          <p>Add-ons</p>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center border-2 border-solid border-[white] rounded-full  text-[white] text-sm w-[33px] h-[33px] ">
          4
        </div>
        <div className="hidden">
          <span>Step 4</span>
          <p>Summary</p>
        </div>
      </div>
    </div>
  );
};

export default VerticalSideBar;
