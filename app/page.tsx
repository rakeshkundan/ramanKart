"use client";

import Header from "./components/Header";
import Heading from "./components/Heading";
import Dropdown from "./components/Dropdown";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { useState } from "react";
import SideBar from "./components/SideBar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

export default function Home() {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <Header />
      <main className="mx-4 sm:mx-16">
        <Heading />
        <hr />
        <div className="grid grid-cols-2 my-4">
          <div className="flex items-center gap-8">
            <p>3425 ITEMS</p>
            <button
              onClick={() => setIsShow(!isShow)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-500"
            >
              {isShow ? (
                <>
                  <KeyboardArrowLeftOutlinedIcon />
                  HIDE FILTER
                </>
              ) : (
                <>
                  <KeyboardArrowRightOutlinedIcon />
                  SHOW FILTER
                </>
              )}
            </button>
          </div>
          <div className="flex justify-end items-center">
            <Dropdown />
          </div>
        </div>
        <hr />
        <div className="flex">
          <SideBar isShow={isShow} />
          <ProductCard />
        </div>
      </main>

      <Footer />
    </>
  );
}
