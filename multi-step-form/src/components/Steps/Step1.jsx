

const Step1 = () => {
  return (
    <div className="">
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
  );
};

export default Step1;
