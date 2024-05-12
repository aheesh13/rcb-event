// Calendar.js
import React, { useState } from "react";
import "../CustomCss/Calendar.css"; // Import your CSS file for styling
import TimeSlots from "./TimeSlots";

const Calendar = ({ selectedDate, onDateChange }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleDateChange = (date) => {
    onDateChange(date); // Call the prop function to update the selected date
  };

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const renderCalendar = () => {
    const calendarDays = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i
      );
      const isCurrentDate =
        selectedDate && date.toDateString() === selectedDate.toDateString();
      const className = isCurrentDate
        ? "calendar-day selected"
        : "calendar-day";
      calendarDays.push(
        <div
          key={i}
          className={className}
          onClick={() => handleDateChange(date)}
        >
          <span className={isCurrentDate ? "selected-day" : ""}>{i}</span>
        </div>
      );
    }
    return calendarDays;
  };

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={goToPreviousMonth}>&lt;</button>
          <div>
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {currentDate.getFullYear()}
          </div>
          <button onClick={goToNextMonth}>&gt;</button>
        </div>
        <div className="calendar-days">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="calendar-day">
              <span className="day-name">{day}</span>
            </div>
          ))}
          {renderCalendar()}
        </div>
      </div>
      {selectedDate && <TimeSlots selectedDate={selectedDate} />}{" "}
      {/* Render TimeSlots component if date is selected */}
    </div>
  );
};

export default Calendar;
