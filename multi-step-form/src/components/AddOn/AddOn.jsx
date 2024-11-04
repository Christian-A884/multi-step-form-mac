import { useContext } from "react";
import { addOns } from "../../data";
import { SwitchContext } from "../../providers/switch.provider";

const AddOn = () => {
  const { period, addonOptions, setAddonOptions } = useContext(SwitchContext);

  const handleCheck = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;
    setAddonOptions({ ...addonOptions, [name]: checked });
  };

  return addOns.map((opt, add) => (
    <div key={add} className="flex flex-col gap-3">
      <div
        className={`flex w-[e295px] h-[62px] items-center  px-4 py-3 border rounded-lg ${
          addonOptions[opt.title] ? "border-purple bg-very_light_grey" : ""
        }`}
      >
        <input
          name={opt.title}
          type="checkbox"
          checked={addonOptions[opt.title] || false}
          onChange={(e) => {
            handleCheck(e);
          }}
          className="w-4 h-4 mr-[16px]"
        />
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <span className="text-sm text-denim font-medium">{opt.title}</span>
            <span className="text-xs text-light_grey font-light">{opt.details}</span>
          </div>
          <div className="flex">
            <span className="text-xs text-purple">{`+$${period === "monthly" ? opt.monthlyPrice + "/mo" : opt.monthlyPrice * 10 + "/yr"}`}</span>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default AddOn;
