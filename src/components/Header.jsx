import React from "react";
import { MoonIcon } from "./icons";

const Header = () => {
  return (
    <header className="container mx-auto px-6 pt-11">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold uppercase tracking-[0.5em] text-white">
          Todo
        </h1>
        <button type="button" className="">
          <MoonIcon className="fill-yellow-200" />
        </button>
      </div>
    </header>
  );
};

export default Header;
