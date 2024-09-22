"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { HiOutlineCalendar } from "react-icons/hi2";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";

const SideBar = () => {
  const pathname = usePathname();
  console.log(pathname, "pathname");
  return (
    <div className="bg-[#424B96] w-[250px] min-h-[100vh] flex flex-col items-center text-white font-regular">
      <div className="flex flex-col my-5 items-center">
        <img
          className="rounded-[50%] w-32 h-32 object-cover   "
          src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        />
        <h3 className="font-semibold my-4 text-lg">Eren Yeager</h3>
      </div>
      <div className="flex flex-col text-left mt-20 gap-4">
        <Link
          className={`${
            pathname === "/calendar"
              ? "bg-[#C3BEF5] text-black rounded-r-full px-5 py-1 font-semibold"
              : ""
          } flex flex-row items-center gap-[6px] px-5 py-1 font-medium`}
          href={"/calendar"}
        >
          <HiOutlineCalendar /> Calendar
        </Link>
        <Link
          className={`${
            pathname === "/payments"
              ? "bg-[#bfbbf0] text-black rounded-r-full font-semibold"
              : ""
          } flex flex-row items-center gap-[6px] px-5 py-1 font-medium`}
          href={"/payments"}
        >
          <FaFileInvoiceDollar />
          Payments
        </Link>
        <Link
          className={`${
            pathname === "/customers"
              ? "bg-[#bfbbf0] text-black rounded-r-full font-semibold"
              : ""
          } flex flex-row items-center gap-[6px] px-5 py-1 font-medium`}
          href={"/customers"}
        >
          <IoPersonSharp />
          Customers
        </Link>
        <Link
          className={`${
            pathname === "/settings"
              ? "bg-[#bfbbf0] text-black rounded-r-full font-semibold"
              : ""
          } flex flex-row items-center gap-[6px] px-5 py-1 font-medium`}
          href={"/settings"}
        >
          <IoSettingsSharp />
          Settings
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
