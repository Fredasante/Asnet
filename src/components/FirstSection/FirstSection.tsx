import Image from "next/image";
import React from "react";

const FirstSection = () => {
  return (
    <section className="w-full h-full text-center px-5 md:px-14 lg:px-20 2xl:px-[300px]">
      <h2 className="text-sm md:text-base lg:text-[20px] mb-5">
        80% of Fortune 100 companies choose Asana
      </h2>
      <div className="grid grid-cols-3 lg:grid-cols-5 md:gap-3 gap-2 justify-center items-center">
        <div className="relative lg:w-36 lg:h-36 md:w-32 md:h-24 w-20 h-20 border-r border-gray-200">
          <Image
            src={"/affiliates/Amazon.webp"}
            alt="amazon logo"
            fill
            className="object-contain p-2"
          />
        </div>
        <div className="relative lg:w-36 lg:h-36 md:w-32 md:h-24 w-20 h-20 border-r border-gray-200">
          <Image
            src={"/affiliates/McKesson.webp"}
            alt="amazon logo"
            fill
            className="object-contain p-2"
          />
        </div>

        <div className="relative lg:w-36 lg:h-36 md:w-32 md:h-24 w-20 h-20 border-r border-gray-200">
          <Image
            src={"/affiliates/Johnson.webp"}
            alt="amazon logo"
            fill
            className="object-contain p-2"
          />
        </div>

        <div className="relative lg:w-36 lg:h-36 md:w-32 md:h-24 w-20 h-20 border-r border-gray-200">
          <Image
            src={"/affiliates/Dell.webp"}
            alt="amazon logo"
            fill
            className="object-contain p-2"
          />
        </div>

        <div className="relative lg:w-36 lg:h-36 md:w-32 md:h-24 w-20 h-20">
          <Image
            src={"/affiliates/merck.webp"}
            alt="amazon logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
