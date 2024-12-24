import React, {useState} from "react";
import "../CustomCss/OrderDetails.css";
import { useLocation } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';

const OrderDetails = ({ userDetails }) => {
  const location = useLocation();
  const bookingDetails = location.state ? location.state.bookingDetails : null;
  const [paymentStatus, setPaymentStatus] = useState(""); // State to manage payment status
  const navigate = useNavigate();
  // console.log(bookingDetails);

  const handlePayAdvance = async () => {
    if (!userDetails) {
      alert("User details are missing.");
      return;
    }

    const payload = {
      userDetails,
      bookingDetails
    };

    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.text();
        console.log(result);
        setPaymentStatus("Payment succeeded, Please Wait while We redirect You To Home Page!");
        setTimeout(() => {
          navigate('/'); 
        }, 10000);
      } else {
        setPaymentStatus("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus("Payment failed. Please try again.");
    }
  };

  
  if (!bookingDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div className="order-details">
      <h2>Your Order</h2>
      <div className="order-summary">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Theatre Max</td>
              <td>₹ 1,500</td>
            </tr>
          </tbody>
        </table>
        <div className="booking-details">
         <p>Booking Date: {bookingDetails.date.toDateString()}</p> 
        <p>Booking Slot: {bookingDetails.slot}</p>
        <p>Number Of Persons: {bookingDetails.persons}</p>
        <p>Booking Occasion: {bookingDetails.occasion}</p>
        </div>
      </div>
      <div className="order-total">
        <table>
        <tbody>
            <tr>
              <td>Subtotal</td>
              <td>₹ 1,500</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>₹ 1,500</td>
            </tr>
            <tr>
              <td>Booking Advance</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td>Balance to Pay in Person</td>
              <td>₹ 1,000</td>
            </tr>
          </tbody>
        </table>
        <div className="payment-options">
          <button onClick={handlePayAdvance}>Pay Advance</button>
          {paymentStatus && (
            <div className={paymentStatus.includes("succeeded") ? "payment-status-success" : "payment-status-error"}>
              {paymentStatus}
            </div>
          )}
          <div>
          </div>
          
        </div>
        <div className="coupon-section">
          <input type="text" placeholder="Coupon Code" />
          <button>Apply</button>
          <p>Have a coupon? Click here to enter your coupon code</p>
        </div>
        <div className="payment-provider">
          <p>PhonePe Payment Solutions</p>
          <p>
            All UPI apps, Debit and Credit Cards, and NetBanking accepted | Powered by PhonePe
          </p>
        </div>
        <div className="terms-condition">
          <input type="checkbox" id="termsCondition" />
          <label htmlFor="termsCondition">
            I have read and agree to the website terms and conditions *
          </label>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
