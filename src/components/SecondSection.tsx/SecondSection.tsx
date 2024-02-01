import React from "react";
import Tabs from "./Tabs";

const SecondSection = () => {
  return (
    <section className="bg-[#f8f9f8] px-7 md:px-14 lg:px-20 2xl:px-[300px] py-8 md:py-10 2xl:py-20 md:mt-12 xl:mt-16">
      <h3 className="text-2xl md:text-[36px] lg:text-[45px] 2xl:text-[55px] mb-10 md:w-[60%] xl:w-[50%] leading-tight">
        See how different departments use Asnet
      </h3>

      <Tabs />
    </section>
  );
};

export default SecondSection;
