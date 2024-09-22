import React, { ReactNode } from "react";
import SideBar from "../Component/SideBar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-w-full min-h-full flex flex-row">
      <SideBar />
      <div className="grow bg-[#EEEFF5] min-h-full">{children}</div>
    </div>
  );
};

export default layout;
