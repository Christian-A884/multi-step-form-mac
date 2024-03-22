import Switch from "./components/Switch/Switch";
import { SwitchContext } from "./providers/switch.provider";
import { useEffect, useState } from "react";
import { planCards } from "./data.js";
function App() {
  // const [step, setStep] = useState(0)
  // const [userData, setUserData] = useState([])
  const [isSelected, setIsSelected] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  // useEffect (()=>{
  // }, [])
  const handleClick = (title) => {
    setSelectedPlan(title);
  };

  return (
    // * Body-ul initial
    <section className="flex flex-col relative h-[695px] w-[375px] bg-body_bg_color font-ubuntu">
      {/* Sidebar ul */}

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

      <div className="flex flex-col absolute top-[102px] px-6 py-8 mx-4 gap-4 bg-[white] w-[343px] h-auto shadow-md">
        {/*Step 1 */}

        <div className="hidden">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-denim">Personal info</h1>
            <p className="text-base text-grey">
              Please provide your name, email address and phone number
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-xs font-normal text-denim" htmlFor="name">
                Name
              </label>
              <input
                className="border rounded border-light_grey h-10 placeholder-grey-400 p-4 text-sm"
                name="name"
                placeholder="e.g Stephen King"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-normal text-denim" htmlFor="email">
                Email Address
              </label>
              <input
                className="border rounded border-light_grey h-10 placeholder-grey-400 p-4 text-sm"
                name="email"
                placeholder="e.g stephenking@lorem.com"
                type="email"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-normal text-denim" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="border rounded border-light_grey h-10 placeholder-grey-40 px-4 text-sm"
                name="phone"
                placeholder="e.g. +1 234 5678 90"
                type="text"
              />
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <SwitchContext.Provider value={{ isSelected, setIsSelected }}>
          <div className="hidden flex-col w-full gap-[24px]">
            <div className="flex flex-col gap-[9px]">
              <h1 className="text-2xl font-bold text-denim">
                Select your plan
              </h1>
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
                  <span
                    className={isSelected ? "text-xs text-denim" : "hidden"}
                  >
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
                  <span
                    className={isSelected ? "text-xs text-denim" : "hidden"}
                  >
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
                  <span
                    className={isSelected ? "text-xs text-denim" : "hidden"}
                  >
                    2 months free
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full h-12 gap-6 bg-very_light_grey">
              <span
                className={
                  !isSelected ? "text-sm text-denim" : "text-sm text-grey"
                }
              >
                Monthly
              </span>
              <Switch />
              <span
                className={
                  isSelected ? "text-sm text-denim" : "text-sm text-grey"
                }
              >
                Yearly
              </span>
            </div>
          </div>
        </SwitchContext.Provider>
        <div className="flex flex-col w-full gap-[24px]">
          <div className="flex flex-col gap-[9px]">
            <h1 className="text-2xl font-bold text-denim">Pick add-ons</h1>
            <p className="text-base text-grey">
              Add-ons help enhance your gaming experience.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex w-[295px] h-[62px] justify-start items-center border rounded-lg px-4 py-3" >
              <input className="w-4 h-4 mr-[16px] " type="checkbox" />
              <div className="flex">
                <div className="flex flex-col mr-[29px] ">
                  <span className="text-sm text-denim font-medium">Online service</span>
                  <span className="text-xs text-light_grey font-light">Acces to multiplayer games</span>
                </div>
                <div>
                  <span className="text-xs text-purple">+$1/mo</span>
                </div>
              </div>
            </div>
            <div className="flex w-[295px] h-[62px] justify-start items-center border rounded-lg px-4 py-3">
              <input className="w-4 h-4 mr-[16px] " type="checkbox" />
              <div className="flex">
                <div className="flex flex-col justify-between mr-[65px] ">
                  <span className="text-sm text-denim font-medium">Larger storage</span>
                  <span className="text-xs text-light_grey font-light">Extra 1TB cloud save</span>
                </div>
                <div>
                  <span className="text-xs text-purple">+$2/mo</span>
                </div>
              </div>
            </div>
            <div className="flex w-[295px] h-[62px] justify-start items-center border rounded-lg px-4 py-3">
              <input className="w-4 h-4 mr-[16px]" type="checkbox" />
              <div className="flex">
                <div className="flex flex-col mr-[20px] ">
                  <span className="text-sm text-denim font-medium">Customizable profile</span>
                  <span className="text-xs text-light_grey font-light">Custom theme on your profile</span>
                </div>
                <div>
                  <span className="text-xs text-purple">+$2/mo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex absolute items-center bottom-0 h-[72px] w-[375px] justify-between px-4 bg-[white]">
        <button className="text-grey text-sm">Go back</button>
        <button className="text-[white] text-sm bg-denim w-[97] h-10 px-4 rounded-md">
          Next step
        </button>
        <button className=" hidden text-sm text-[white] bg-purple h-10 w-[97] px-4 rounded-md">
          Confirm
        </button>
      </div>

      {/* <VerticalSideBar/>
      // <MultistepContext.Provider value={{step, setStep, userData, setUserData}}>
      //  <Multistep/>
        
      //  </MultistepContext.Provider> */}
    </section>
  );
}

export default App;
