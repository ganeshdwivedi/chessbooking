"use client";
import AirDatepicker from 'air-datepicker';
import React, { useEffect, useRef } from 'react';
import localeEn from 'air-datepicker/locale/en';
import moment from 'moment';

interface SingleDateSelProps {
    selectedDays: Date;
    setSelectedDate: (date: Date) => void;
}

const SingleDateSel: React.FC<SingleDateSelProps> = ({ selectedDays, setSelectedDate }) => {
    const calendarRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const hell = new AirDatepicker(calendarRef.current, {
            locale: localeEn,
            multipleDatesSeparator: " - ",
            selectedDates: selectedDays,
            onSelect: ({ date }:{date:Date}) => {
                setSelectedDate(date);
            },
        });

        // Cleanup function to destroy the calendar instance on component unmount
        // return () => {
        //     hell.destroy();
        // };
    }, [selectedDays, setSelectedDate]);

   

    return (
        <div>
            <div id='calendar' ref={calendarRef}></div>
        </div>
    );
};

export default SingleDateSel;
