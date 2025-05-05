"use client";
import globe from "../assets/globe.svg";

import Image from "next/image";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BackpackOutlinedIcon from "@mui/icons-material/BackpackOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Header = () => {
  const navLinks = ["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"];

  return (
    <>
      <header className="mx-4 sm:mx-16 grid grid-row-2 p-2 ">
        <div className="grid grid-cols-3 gap-4 items-center justify-center">
          <div className="flex justify-around items-center p-4 sm:justify-start ">
            <div className="flex items-center justify-center sm:hidden ">
              <MenuOutlinedIcon />
            </div>
            <Image src={globe} alt="LOGO" width={50} height={50} />
          </div>
          <div className="p-4 flex items-center justify-center">
            <p className="font-bold text-3xl">LOGO</p>
          </div>
          <div className="gap-2 grid grid-flow-col auto-cols-max items-end justify-end">
            <SearchOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <BackpackOutlinedIcon />
            <div className="hidden sm:block">
              <PersonOutlineOutlinedIcon />
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <span>ENG</span>
              <KeyboardArrowDownOutlinedIcon />
            </div>
          </div>
        </div>
        <nav className="hidden sm:flex justify-center gap-x-8 font-bold">
          {navLinks.map((link, index) => (
            <a key={index} href="">{link}</a>
          ))}
        </nav>
      </header>
      <hr />
    </>
  );
};

export default Header;
