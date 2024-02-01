import React from "react";

interface Props {
  title: string;
}

const CustomButtonTwo = ({ title }: Props) => {
  return (
    <button className="text-black bg-white px-8 py-4 border border-slate-900 font-semibold rounded-sm hover:bg-[#ff7381] hover:text-black transition duration-300 ease-in-out hover:border-none">
      {title}
    </button>
  );
};

export default CustomButtonTwo;
