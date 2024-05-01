import React from "react";
import "./OrderDetails.css"; // You can create a CSS file for styling

const OrderDetails = () => {
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
          <p>Booking Date: April 25, 2024</p>
          <p>Booking Time: 10:30 am</p>
          <p>Persons: 2</p>
          <p>Time Zone: Asia/Calcutta</p>
          <p>Please select your occasion: Bride2Be</p>
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
          <button>Pay deposit</button>
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
            All UPI apps, Debit and Credit Cards, and NetBanking accepted |
            Powered by PhonePe
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
