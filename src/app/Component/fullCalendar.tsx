"use client"
import FullCalendar from '@fullcalendar/react'
import {DatePicker} from "@nextui-org/date-picker";
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { useEffect, useRef, useState } from 'react'
import moment from 'moment';
import DateCarousel from './DateCrousel';

const courts = [
  { name: 'Table 1' },
  { name: 'Table 2' },
  { name: 'Table 3' }
];

const fullCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const calendarRef = useRef<FullCalendar>(null);

  const events = courts.map((court, index) => ({
    title: court.name,
    start: new Date(), // Replace with the actual start date
    end: new Date(), // Replace with the actual end date
    resourceId: `court-${index}`
  }));


  const resources = courts.map((court, index) => ({
    id: `court-${index}`,
    title: court.name
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

  const handleDateChange = (e:any)=>{
       console.log(e,'anyyyyy')
  }


  return (
    <div className='calendar-container'>
    <DateCarousel selectedDate={currentDate} setSelectedDate={setCurrentDate}/>
      <FullCalendar
      ref={calendarRef}
       plugins={[resourceTimeGridPlugin, timeGridPlugin, interactionPlugin]}
       initialView="resourceTimeGridDay"
       resources={resources}
       resourceAreaWidth="100%"
       slotMinTime="08:00:00"
       slotMaxTime="20:00:00"
       headerToolbar={{
         left: '',
         center: 'title',
         right: ''
       }}
       select={(event:any)=>console.log(event,'select')}
       eventClick={(event:any)=>console.log(event,'events')}
       nowIndicator={true}
      //  editable={true}
       selectable={true}
       selectMirror={true}
       allDaySlot={false}
       events={events}
      />
    </div>
  )
}

export default fullCalendar