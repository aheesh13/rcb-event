// Booking.js
import React, { useState } from "react";
import Calendar from "./Calendar"; // Import your Calendar component
import "./Booking.css";
import image1 from "../public/image.png";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState("");

  // Handler for date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Handler for number of persons selection
  const handleNumberOfPersonsChange = (event) => {
    setNumberOfPersons(parseInt(event.target.value));
  };

  const handleOccasionChange = (e) => {
    setSelectedOccasion(e.target.value);
  };

  return (
    <div className="booking-container">
      <div className="image-container">
        <img src={image1} alt="Your Image" />
      </div>
      <div className="booking-details">
        <h2>Booking Details</h2>
        {/* Calendar component */}
        <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} />
        {/* Number of persons selection */}
        <div class="number=of=person">
          <label htmlFor="numberOfPersons">Number of Persons:</label>
          <input
            type="number"
            id="numberOfPersons"
            name="numberOfPersons"
            min={1}
            value={numberOfPersons}
            onChange={handleNumberOfPersonsChange}
          />
        </div>
        <div className="occasion-select">
          <label>Please select your occasion:</label>
          <div>
            <input
              type="radio"
              id="birthday"
              name="occasion"
              value="Birthday"
              checked={selectedOccasion === "Birthday"}
              onChange={handleOccasionChange}
            />
            <label htmlFor="birthday">Birthday</label>
          </div>
          <div>
            <input
              type="radio"
              id="bride2be"
              name="occasion"
              value="Bride2Be"
              checked={selectedOccasion === "Bride2Be"}
              onChange={handleOccasionChange}
            />
            <label htmlFor="bride2be">Bride2Be</label>
          </div>
          <div>
            <input
              type="radio"
              id="anniversary"
              name="occasion"
              value="Anniversary"
              checked={selectedOccasion === "Anniversary"}
              onChange={handleOccasionChange}
            />
            <label htmlFor="anniversary">Anniversary</label>
          </div>
          <div>
            <input
              type="radio"
              id="farewell"
              name="occasion"
              value="Farewell"
              checked={selectedOccasion === "Farewell"}
              onChange={handleOccasionChange}
            />
            <label htmlFor="farewell">Farewell</label>
          </div>
          <div>
            <input
              type="radio"
              id="movie-time"
              name="occasion"
              value="Movie Time"
              checked={selectedOccasion === "Movie Time"}
              onChange={handleOccasionChange}
            />
            <label htmlFor="movie-time">Movie Time</label>
          </div>
          {/* Add radio inputs for other occasions */}
        </div>
        {/* Additional booking details */}
        {/* Add any other booking details or components here */}
      </div>
    </div>
  );
};

export default Booking;
