"use client"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import timeGridPlugin from '@fullcalendar/timegrid'
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';

const courts = [
  { name: 'Table 1' },
  { name: 'Table 2' },
  { name: 'Table 3' }
];

const fullCalendar = () => {

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

  return (
    <div className='calendar-container'>
      <FullCalendar
      height={'680px'}
       plugins={[resourceTimeGridPlugin, timeGridPlugin, interactionPlugin]}
       initialView="resourceTimeGridDay"
       resources={resources}
       resourceAreaWidth="100%"
       slotMinTime="08:00:00"
       slotMaxTime="20:00:00"
       headerToolbar={{
         left: '',
         center: '',
         right: ''
       }}
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