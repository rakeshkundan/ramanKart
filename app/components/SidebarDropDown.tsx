import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const options = ["Men", "Women", "Baby & Kids"];

const SidebarDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(
    options.reduce((acc, curr) => ({ ...acc, [curr]: false }), {})
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const toggleCheckbox = (label) => {
    setSelected((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const unselectAll = () => {
    setSelected(options.reduce((acc, curr) => ({ ...acc, [curr]: false }), {}));
  };

  return (
    <div className="w-64">
        <hr></hr>
      <div
        className="flex flex-col justify-between items-start cursor-pointer py-4"
        onClick={toggleDropdown}
      >
        <div className="flex justify-between items-center w-full">
          <p className="font-bold">IDEAL FOR</p>
          <KeyboardArrowDownIcon
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {!isOpen && <p>All</p>}
      </div>

      {isOpen && (
        <div className="mt-2 space-y-2">
          <p>All</p>
          <button
            className="text-sm text-gray-400 underline cursor-pointer"
            onClick={unselectAll}
          >
            Unselect all
          </button>

          <div className="space-y-2">
            {options.map((label) => (
              <label
                key={label}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selected[label]}
                  onChange={() => toggleCheckbox(label)}
                  className="w-4 h-4"
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarDropDown;
