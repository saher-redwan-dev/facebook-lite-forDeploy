import React from "react";
import RegistrationButtons from "./RegistrationButtons";
import Logo from "./Logo";
import LoadingOfPreparingFilesComponent from "../basic-items/LoadingOfPreparingFilesComponent";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10">
      <div className="h-[52px] px-6 md:px-9 flex justify-between items-center custom-background">
        {/* LoadingOfPreparingFilesComponent */}
        <LoadingOfPreparingFilesComponent />
        {/* LOGO */}
        <Logo />
        <div className="flex items-center gap-5">
          <RegistrationButtons />
        </div>
      </div>
    </div>
  );
}
