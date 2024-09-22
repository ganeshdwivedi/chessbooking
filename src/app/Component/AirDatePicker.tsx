"use client";
import "air-datepicker/air-datepicker.css";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { RxCross2 } from "react-icons/rx";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import SingleDateSel from "./SingleDateSelector";
import { PiCalendarFill } from "react-icons/pi";

interface AirDatepickerProps {
  selectedDays: Date;
  setSelectedDate: (date: Date) => void;
}

const AirDatepickerReact: React.FC<AirDatepickerProps> = ({
  selectedDays,
  setSelectedDate,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e: any) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const value = `${moment(selectedDays).format("DD MMMM YYYY")}`;

  return (
    <Popover isOpen={isOpen} placement="bottom">
      <div className="relative h-[30px] w-[290px]">
        <PopoverTrigger>
          <div
            className="rounded-3xl shadow-btnInset border px-2 border-[#22356D0D] border-opacity-25  flex flex-row items-center h-full gap-3"
            onClick={(e) => handleOpen(e)}
          >
            <PiCalendarFill />
            <p className="font-bold text-xl">{value}</p>
            {/* <span style={{ marginLeft: '5px' }}>
          <IoIosArrowDown style={{ color: 'rgba(34, 53, 109, 0.90)' }} />
        </span> */}
          </div>
        </PopoverTrigger>
      </div>
      <PopoverContent>
        <div className="h-[290px] overflow-hidden bg-white border border-greyShade rounded-lg shadow-lg">
          <p className="font-semibold text-active m-3 flex flex-row justify-between items-center">
            Date
            <RxCross2
              className="bg-greyShade rounded-full h-[25px] w-[25px] p-1"
              onClick={(e) => handleOpen(e)}
            />
          </p>
          <SingleDateSel
            selectedDays={selectedDays}
            setSelectedDate={setSelectedDate}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AirDatepickerReact;
