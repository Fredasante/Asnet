import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Image src={"/logo.svg"} alt="asnet logo" width={20} height={20} />
      <p className="font-medium text-[25px]">asnet</p>
    </div>
  );
};

export default Logo;
