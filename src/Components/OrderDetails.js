import React from "react";
import "../CustomCss/OrderDetails.css";
import { useLocation } from 'react-router-dom';

const OrderDetails = () => {
  const location = useLocation();
  const bookingDetails = location.state ? location.state.bookingDetails : null;
  // console.log(bookingDetails);
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
            {/* Add other rows for additional products */}
          </tbody>
        </table>
        <div className="booking-details">
          {/* <p>Booking Date: {bookingDetails.date}</p> */}
          <p>Persons: {bookingDetails.persons}</p>
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
          <button>Pay full amount</button>
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
