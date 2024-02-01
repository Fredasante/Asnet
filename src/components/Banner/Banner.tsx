import React from "react";
import CustomButtonOne from "../CustomButtonOne";
import CustomButtonTwo from "../CustomButtonTwo";

const Banner = () => {
  return (
    <section className="w-full md:h-[40vh] px-10 py-2 pt-[100px] md:pt-[270px]">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-3xl md:text-[43px] lg:text-[53px] 2xl:text-[64px] mb-10 text-center">
          A smarter way to work
        </h1>
        <p className="w-full md:w-[70%] lg:w-[40%]  2xl:w-[25%] text-center mb-10 leading-5 md:leading-7 text-sm md:text-[17px]">
          With Asnet, you can drive clarity and impact at scale by connecting
          work and workflows to company-wide goals.
        </p>

        <div className="flex flex-col md:flex-row md:gap-3 w-full md:w-fit gap-4">
          <CustomButtonOne />
          <CustomButtonTwo title="View Demo" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
