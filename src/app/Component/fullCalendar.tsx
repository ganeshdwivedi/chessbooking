"use client";
import FullCalendar from "@fullcalendar/react";
import { DatePicker } from "@nextui-org/date-picker";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import DateCarousel from "./DateCrousel";
import CustomModal from "./CustomModal";
import AirDatepicker from "air-datepicker";
import AirDatepickerReact from "./AirDatePicker";

const courts = [{ name: "Table 1" }, { name: "Table 2" }, { name: "Table 3" }];

const fullCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const calendarRef = useRef<FullCalendar>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [event, setEvent] = useState();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const updatedDate = moment(new Date()).format("YYYY-MM-DD");

  const events = courts.map((court, index) => ({
    title: court.name,
    start: moment(`08:00 ${updatedDate}`, "HH:mm YYYY-MM-DD").toDate(), // Replace with the actual start date
    end: moment(`09:00 ${updatedDate}`, "HH:mm YYYY-MM-DD").toDate(), // Replace with the actual end date
    resourceId: `court-${index}`,
    className: index === 1 ? "cancel" : "success",
  }));

  const resources = courts.map((court, index) => ({
    id: `court-${index}`,
    title: court.name,
  }));

  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();

      // Custom function to change the date
      const changeDate = (newDate: Date) => {
        calendarApi.gotoDate(newDate); // Use FullCalendar's API to change the date
      };

      // Example usage
      changeDate(currentDate);
    }
  }, [currentDate]);

  const handleDateChange = (e: any) => {
    console.log(e, "anyyyyy");
  };

  const handleSelect = (event: any) => {
    setEvent(event);
    setIsOpen((prev: boolean) => !prev);
  };

  return (
    <div className="calendar-container">
      <div className="flex flex-row justify-between items-center gap-5 mb-5">
        <AirDatepickerReact
          selectedDays={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <div>
          <DateCarousel
            selectedDate={currentDate}
            setSelectedDate={setCurrentDate}
          />
        </div>
      </div>
      <div className="">
        <FullCalendar
          ref={calendarRef}
          plugins={[resourceTimeGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="resourceTimeGridDay"
          resources={resources}
          resourceAreaWidth="100%"
          height={1300}
          // slotMinTime="08:00:00"
          // slotMaxTime="20:00:00"
          headerToolbar={{
            left: "",
            center: "",
            right: "",
          }}
          select={(event: any) => handleSelect(event)}
          eventClick={(event: any) => console.log(event, "events")}
          nowIndicator={true}
          //  editable={true}
          selectable={true}
          selectMirror={true}
          allDaySlot={false}
          events={events}
        />
        <CustomModal event={event} isOpen={isOpen} onOpenChange={setIsOpen} />
      </div>
    </div>
  );
};

export default fullCalendar;
