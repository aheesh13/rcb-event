// TimeSlots.js
import React, { useEffect, useState } from "react";
import "../CustomCss/TimeSlots.css";

const TimeSlots = ({ selectedDate, onSlotChange }) => {
  // Example time slots (you can replace this with your own data)
  const timeSlots = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"];
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    // Pass the selected slot to parent when it changes
    if (onSlotChange) {
      onSlotChange(selectedSlot);
    }
  }, [selectedSlot, onSlotChange]);

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot === selectedSlot ? null : slot);
  };

  return (
    <div className="time-slots">
      <h3>Available Time Slots for {selectedDate.toLocaleDateString()}</h3>
      <div className="slots-container">
        {timeSlots.map((slot, index) => (
          <div
            key={index}
            className={
              selectedSlot === slot ? "time-slot selected" : "time-slot"
            }
            onClick={() => handleSlotClick(slot)}
          >
            {slot}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlots;
