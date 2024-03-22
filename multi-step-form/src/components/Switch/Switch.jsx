import classNames from "classnames";
import { useContext } from "react";
import { SwitchContext } from "../../providers/switch.provider";

function Switch() {
  const {isSelected, setIsSelected} = useContext(SwitchContext);
  return (
    <div
      onClick={() => setIsSelected(!isSelected)}
      className="flex w-11 h-6 bg-denim rounded-full"
    >
      <span
        className={classNames("h-4 w-4 mt-1 ml-1 bg-white rounded-full transition-all duration-500 shadow-2xl", {
          "ml-6": isSelected,
        })}
      ></span>
    </div>
  );
}

export default Switch;
