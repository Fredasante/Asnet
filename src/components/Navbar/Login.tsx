import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div>
      <Link href={"#"}>
        <p className="text-gray-500 text-[15px] font-medium">Log In</p>
      </Link>
    </div>
  );
};

export default Login;
