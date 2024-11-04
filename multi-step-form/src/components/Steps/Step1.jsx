import { useContext } from "react";
import { SwitchContext } from "../../providers/switch.provider";

const Step1 = () => {
  const { register, handleSubmit, errors, setStep } = useContext(SwitchContext);

  const onSubmit = () => {
    setStep((prev) => prev + 1);
  };

  const onError = () => {};

  return (
    <form id="step1form" onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="flex flex-col md:gap-3">
        <h1 className="text-2xl font-bold text-denim">Personal info</h1>
        <p className="text-base text-grey">Please provide your name, email address and phone number</p>
      </div>
      <div className="flex flex-col gap-4 md:mt-10 md:gap-6">
        <div className="flex flex-col md:gap-1">
          <div className="flex justify-between">
            <label className="text-xs font-normal text-denim" htmlFor="name">
              Name
            </label>

            {errors.name && <span className="text-red-600 text-xs">{errors.name.message}</span>}
          </div>

          <input
            className="border rounded border-light_grey h-10 placeholder-grey-400 p-4 text-sm"
            name="name"
            placeholder="e.g Stephen King"
            type="text"
            {...register("name", {
              required: "Please enter your name",
              minLength: { value: 4, message: "Numele tau e prea scurt" },
            })}
          />
        </div>
        <div className="flex flex-col md:gap-1">
          <div className="flex justify-between">
            <label className="text-xs font-normal text-denim" htmlFor="email">
              Email address
            </label>

            {errors.email && <span className="text-red-600 text-xs">{errors.email.message}</span>}
          </div>
          <input
            className="border rounded border-light_grey h-10 placeholder-grey-400 p-4 text-sm"
            name="email"
            placeholder="e.g stephenking@lorem.com"
            {...register("email", {
              required: "Adresa de email este invalida",
            })}
          />
        </div>

        <div className="flex flex-col md:gap-1">
          <div className="flex justify-between">
            <label className="text-xs font-normal text-denim" htmlFor="phone">
              Phone number
            </label>

            {errors.phone && <span className="text-red-600 text-xs">{errors.phone.message}</span>}
          </div>
          <input
            className="border rounded border-light_grey h-10 placeholder-grey-40 px-4 text-sm"
            name="phone"
            placeholder="e.g. +1 234 5678 90"
            type="text"
            {...register("phone", {
              required: {
                value: true,
                message: "Introdu numarul tau de telefon",
              },
            })}
          />
        </div>
      </div>
    </form>
  );
};

export default Step1;
