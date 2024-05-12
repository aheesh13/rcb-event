import React, { useState } from "react";
import Calendar from "./Calendar"; 
import "../CustomCss/Booking.css";
import image1 from "../Images/Img1.jpeg";
import { Link, useNavigate } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState("");


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
 
 
  const handleNumberOfPersonsChange = (event) => {
    setNumberOfPersons(parseInt(event.target.value));
  };

  const handleOccasionChange = (e) => {
    setSelectedOccasion(e.target.value);
  };

  const handleProceedToPayment = () => {
    console.log("State being passed:", {
      date: selectedDate,
      persons: numberOfPersons,
      occasion: selectedOccasion
    });
  
    navigate("/payment", {
      state: {
        bookingDetails: { 
          date: selectedDate,
          persons: numberOfPersons,
          occasion: selectedOccasion
        } 
      }
    });
  };
  

  return (
    <div className="booking-container">
      <div className="booking-image-container">
        <img src={image1} alt="Your Image" />
      </div>
      <div className="booking-details">
        <h2>Booking Details</h2>
  
        <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} />
        
        <div className="number-of-person">
          <label className="booking-num-person-label" htmlFor="numberOfPersons">Number of Persons:</label>
          <input
            type="number"
            id="numberOfPersons"
            name="numberOfPersons"
            min={1}
            value={numberOfPersons}
            onChange={handleNumberOfPersonsChange}
          />
        </div>
        <div className="booking-occasion-select">
          <label className="occasion-label">Please select your occasion:</label>
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
        
        </div>
        
          <button onClick={handleProceedToPayment} className="payment-proceed-button">Proceed To Payment</button>

       
      
      </div>
    </div>
  );
};

export default Booking;
