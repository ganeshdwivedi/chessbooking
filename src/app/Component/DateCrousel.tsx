import React, { useEffect, useState } from "react";
import moment from "moment";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const DateCarousel = ({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: any;
  setSelectedDate: any;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewPort, setView] = useState(false);
  const today = moment();

  // Generate an array of dates for the current year
  const [yearDates, setYearDates] = useState<any>([]);

  useEffect(() => {
    const generateYearDates = () => {
      const dates = [];
      let currentDate = today.clone();
      for (let i = 0; i < 365; i++) {
        dates.push(currentDate.clone());
        currentDate.add(1, "day");
      }
      return dates;
    };
    setYearDates(generateYearDates());
  }, []);

  useEffect(() => {
    if (yearDates.length > 0) {
      setActiveIndex(0); // Set the activeIndex to 0, which is the start
    }
  }, [yearDates]);

  // Calculate the index to display the current date in the middle
  useEffect(() => {
    if (selectedDate) {
      const selectedIndex = yearDates.findIndex((date: any) =>
        date.isSame(selectedDate, "day")
      );
      if (selectedIndex !== -1) {
        setActiveIndex(selectedIndex);
      }
    }
  }, [yearDates]);

  const handleClick = (direction: string) => {
    setActiveIndex((prevIndex) => {
      const maxIndex = yearDates.length - 4; // Maximum index to prevent overflow
      if (direction === "next" && prevIndex < maxIndex) {
        const nextDate = moment(selectedDate).add(1, "day").toDate();
        setSelectedDate(nextDate);
        return prevIndex + 1;
      }

      if (direction === "prev" && prevIndex > 0) {
        const nextDate = moment(selectedDate).subtract(1, "day").toDate();
        setSelectedDate(nextDate);
        return prevIndex - 1;
      }
      return prevIndex;
    });
  };

  const handleDayClick = (day: any) => {
    if (selectedDate) {
      setSelectedDate(day.toDate());
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (
        window.matchMedia("(min-width: 300px) and (max-width: 600px)").matches
      ) {
        setView(true);
      } else {
        setView(false);
      }
    };

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!selectedDate) return null;

  return (
    <div className="flex flex-row items-center justify-between gap-[9px] relative overflow-scroll pb-2 sm:pb-0 sm:overflow-hidden md:overflow-visible mx-2 sm:mx-0 my-2">
      <button
        className="w-[0px] sm:w-[23px] py-[2px] md:px-[7px] pointer-events-none md:pointer-events-auto md:opacity-100 opacity-0"
        onClick={() => handleClick("prev")}
        disabled={activeIndex === 0}
      >
        <FaAngleLeft style={{ color: "#22356D" }} />
      </button>
      {yearDates
        .slice(activeIndex, activeIndex + (viewPort ? yearDates.length : 5))
        .map((date: any, i: number) => {
          const isSelected = date.isSame(selectedDate, "day");
          const buttonStyles = {
            color: isSelected ? "#22356D" : "inherit",
            backgroundColor: isSelected ? "#fff" : "inherit",
            border: "none",
            "&:hover": { border: "none" },
          };
          const dayName = date.format("ddd");
          const dayOfMonth = date.format("D");
          // console.log(dayOfMonth)
          const monthName = date.format("MMM");
          return (
            <button
              key={i}
              onClick={() => handleDayClick(date)}
              className={`py-[4px] shadow-btn leading-4 flex flex-col justify-center items-center px-[16px] rounded-[7px] text-[14px] ${
                isSelected ? `bg-[#C3BEF5] text-white` : `bg-white`
              } font-medium`}
            >
              <p>{dayName}</p>
              <p className="font-semibold leading !text-[1rem]">{dayOfMonth}</p>
              <p>{monthName}</p>
            </button>
          );
        })}
      <button
        className="w-[23px] py-[2px] md:px-[7px] pointer-events-none md:pointer-events-auto md:opacity-100 opacity-0"
        // style={{ minWidth: "fit-content", width: "23px !important", padding:"2px 8px"}}
        onClick={() => handleClick("next")}
        disabled={activeIndex === yearDates.length - 4}
      >
        <FaAngleRight style={{ color: "#22356D" }} />
      </button>
    </div>
  );
};

export default DateCarousel;
