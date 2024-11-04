import MultiStepForm from "./components/MultiStepForm.jsx";
import { SwitchContext } from "./providers/switch.provider.jsx";
import VerticalSideBar from "./components/VerticalSideBar/VerticalSideBar.jsx";
import { useEffect, useState } from "react";
import { addOns, plans } from "./data.js";
import { useForm } from "react-hook-form";

function App() {
  // step (view-ul afisat/pasul din form)
  const [step, setStep] = useState(0);
  // perioada pentru care se face achizitia (monthly/yearly)
  const [period, setPeriod] = useState("monthly");
  // planul selectat de utilizator
  const [userPlan, setUserPlan] = useState(plans[0]);
  // aici stocam care sunt addon-urile selectate (true daca este selectat/false daca nu este)
  const [addonOptions, setAddonOptions] = useState({
    "Online service": false,
    "Larger storage": false,
    "Customizable profile": false,
  });
  // aici stocam preturile addon-urilor in functie de perioada selectata (daca este anual sau lunar)
  const [selectedAddonsWithPrice, setSelectedAddonsWithPrice] = useState([]);
  // pretul total al achizitiei (in functie de plan, perioada, addon-uri)
  const [totalPrice, setTotalPrice] = useState(0);

  // formularul din step1

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  useEffect(() => {
    const addonArray = [];
    // iteram prin addOnOptions (unde inregistram addon-urile selectate)
    for (const key in addonOptions) {
      // pentru primul addon, key = 'Online service'
      // aici cautam pretul de la fiecare addon din addonOptions, folosindu-ne de addOns din data.js
      const addonPrice = addOns.find((el) => el.title === key).monthlyPrice;
      // daca addon-ul e selectat, adaug un obiect in array sub forma {name: -nume addon-, price: -pret addon, care, in situatia in care period e yearly, este inmultit cu 10 -}
      if (addonOptions[key] === true) {
        if (period === "monthly") {
          addonArray.push({ name: key, price: addonPrice });
        } else {
          addonArray.push({ name: key, price: addonPrice * 10 });
        }
      }
    }

    setSelectedAddonsWithPrice(addonArray);

    const planPrice = period === "monthly" ? userPlan.monthlyPrice : userPlan.monthlyPrice * 10;

    let addOnsTotalPrice = 0;
    addonArray.forEach((el) => (addOnsTotalPrice += el.price));

    const totalPrice = planPrice + addOnsTotalPrice;

    setTotalPrice(totalPrice);
  }, [period, userPlan, addonOptions]);

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <section className="sm:flex flex-col relative h-[695px] w-[375px] bg-body_bg_color font-ubuntu md:h-[810px] md:w-[1440px]  md:flex-row md:absolute md:left-0">
      <SwitchContext.Provider
        value={{
          period,
          setPeriod,
          step,
          setStep,
          userPlan,
          setUserPlan,
          addonOptions,
          setAddonOptions,
          selectedAddonsWithPrice,
          setSelectedAddonsWithPrice,
          totalPrice,
          register,
          handleSubmit,
          errors,
        }}
      >
        <VerticalSideBar />

        <div className="flex flex-col absolute top-[102px] px-6 py-8 mx-4 gap-4 bg-[white] w-[343px] h-auto shadow-md rounded-xl md:h-[600px] md:w-[940px] md:pl-[400px] md:pr-[100px] md:py-14 md:left-[250px]">
          <MultiStepForm />
        </div>
        <div className="flex absolute items-center bottom-0 h-[72px] w-[375px] justify-between px-4 bg-[white] md:left-[660px] md:bottom-[135px] md:w-[450px]">
          {step > 0 && step < 4 ? (
            <button className="text-grey text-sm" onClick={() => setStep(step - 1)}>
              Go back
            </button>
          ) : (
            <div></div>
          )}
          {step === 0 && (
            <button className="text-[white] text-sm bg-denim w-[97] h-10 px-4 rounded-md" type="submit" form="step1form">
              Next step
            </button>
          )}

          {step < 4 && step > 0 ? (
            <button className={`text-sm text-[white] ${step === 3 ? "bg-purple" : "bg-denim"}  h-10 w-[97] px-4 rounded-md`} onClick={handleNextStep}>
              {step === 3 ? "Confirm" : "Next step"}
            </button>
          ) : null}
        </div>
      </SwitchContext.Provider>
    </section>
  );
}

export default App;
