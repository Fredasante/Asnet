import { Globe } from "lucide-react";
import Link from "next/link";
import React from "react";

const Sales = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="border-r px-3 border-gray-300">
        <Globe color="gray" />
      </div>

      <Link href={"#"}>
        <p className="text-gray-500 text-[15px] font-medium">Contact Sales</p>
      </Link>
    </div>
  );
};

export default Sales;
