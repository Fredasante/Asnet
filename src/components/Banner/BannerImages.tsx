import Image from "next/image";
import React from "react";

const BannerImages = () => {
  return (
    <section className="md:mt-36 lg:mt-44 xl:mt-44 mb-5 md:mb-10 xl:mb-20 flex gap-8 items-center mt-0 justify-center w-full xl:h-[90vh] h-[40vh] p-3 md:p-0">
      <div className="gap-3 hidden md:inline-block">
        <Image
          src={"/images/product-3.webp"}
          alt="product image one"
          width={200}
          height={200}
          className="object-cover rounded-lg shadow-md"
        />
        <Image
          src={"/images/product-4.webp"}
          alt="product image one"
          width={300}
          height={300}
          className="object-cover rounded-lg shadow-md mt-8"
        />
      </div>

      <div className="relative w-full h-full rounded-lg">
        <Image
          src={"/images/product-plan-1.webp"}
          fill
          alt="product image one"
          className="md:object-cover object-contain rounded-lg shadow-md"
        />
      </div>

      <div className="gap-5 hidden md:inline-block">
        <Image
          src={"/images/product-1.webp"}
          alt="product image one"
          width={300}
          height={300}
          className="object-cover rounded-lg shadow-md"
        />
        <Image
          src={"/images/product-2.webp"}
          alt="product image one"
          width={300}
          height={300}
          className="object-cover rounded-lg shadow-md mt-8"
        />
      </div>
    </section>
  );
};

export default BannerImages;
