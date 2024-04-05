import AddOn from '../AddOn/AddOn'
const Step3 = () => {
  
  
  return (
    <div className="flex flex-col w-full gap-[24px]">
      <div className="flex flex-col gap-[9px]">
        <h1 className="text-2xl font-bold text-denim">Pick add-ons</h1>
        <p className="text-base text-grey">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <AddOn/>
    </div>
  );
};
export default Step3;
