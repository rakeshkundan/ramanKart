"use client";

import { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CheckIcon from "@mui/icons-material/Check";

<ul className="w-40">
  <li className="px-4 py-2 hover:bg-gray-100 text-right flex justify-end items-center gap-2">
    <span>Option 1</span>
    <CheckIcon fontSize="small" />
  </li>
  <li className="px-4 py-2 hover:bg-gray-100 text-right flex justify-end items-center gap-2">
    <span>Option 2</span>
    <CheckIcon fontSize="small" />
  </li>
  <li className="px-4 py-2 hover:bg-gray-100 text-right flex justify-end items-center gap-2">
    <span>Option 3</span>
    <CheckIcon fontSize="small" />
  </li>
</ul>;

const list = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE:HIGH TO LOW",
  "PRICE:LOW TO HIGH",
];

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [selectedText, setSelectedText] = useState("RECOMMENDED");

  return (
    <div
      className="relative hidden sm:flex items-center gap-1 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <span>{selectedText}</span>
      <KeyboardArrowDownOutlinedIcon />

      {open && (
        <div className="absolute top-full mt-2 bg-white border rounded shadow-md min-w-max">
          <ul className="text-sm text-gray-700">
            {list.map((item, index) => {
              return (
                <li
                  className="px-4 py-2 text-right hover:bg-gray-100"
                  onClick={() => {
                    setSelectedText(item);
                  }}
                  //   index={index}
                >
                  {selectedText == item && <CheckIcon />}
                  {item}
                </li>
              );
            })}

            {/* <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>
            <li className="px-4 py-2 hover:bg-gray-100">Option 3</li> */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
