import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./sidebar";

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div>
        <Navbar />
        <div className="m-auto flex flex-nowrap flex-row items-start justify-center ">
          <Sidebar />
          <div className=" w-full  p-10 pt-20 mt-10 ml-64 font-kumbh ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default RootLayout;
