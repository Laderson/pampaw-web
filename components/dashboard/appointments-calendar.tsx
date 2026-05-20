"use client";

import {
  Calendar,
  momentLocalizer,
} from "react-big-calendar";

import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function AppointmentsCalendar({
  appointments,
}: any) {
  const events = appointments.map(
    (appointment: any) => ({
      title: `${appointment.petName} - ${appointment.service.name}`,

      start: new Date(appointment.appointment),

      end: new Date(
        new Date(appointment.appointment).getTime() +
          (appointment.service?.duration || 60) * 60 * 1000
      ),
    })
  );

  return (
    <div className="h-[700px] rounded-3xl border border-neutral-200 p-6">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
}