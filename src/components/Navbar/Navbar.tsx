import React from "react";
import Logo from "./Logo";
import { NavigationItems } from "./NavigationItems";
import Sales from "./Sales";
import Login from "./Login";
import NavButton from "./NavButton";
import { MobileSheet } from "./MobileSheet";

const Navbar = () => {
  return (
    <header className="px-5 md:px-14 xl:px-20 2xl:px-[300px] py-2 flex items-center w-full fixed top-0 bg-white">
      <div className="flex w-full h-full">
        <Logo />
        <div className="hidden xl:flex ml-10">
          <NavigationItems />
        </div>

        <div className="hidden md:flex items-center gap-8 ml-auto">
          <Sales />
          <Login />
        </div>

        <div className="ml-auto md:ml-8">
          <NavButton />
        </div>

        <div className="xl:hidden ml-4 flex items-center">
          <MobileSheet />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
