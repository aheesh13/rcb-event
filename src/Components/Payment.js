import React, { useState } from "react";
import UserDetailsForm from "./UserDetailsForm";
import OrderDetails from "./OrderDetails";
import '../CustomCss/Payment.css';

export default function Payment() {
  const [userDetails, setUserDetails] = useState(null);

  const handleUserDetailsSubmit = (details) => {
    setUserDetails(details);
  };
  return (
    <div className="payment-container">
      <div className="user-details">
        <UserDetailsForm onUserDetailsSubmit={handleUserDetailsSubmit} />
      </div>
      <div className="order-details">
        <OrderDetails userDetails={userDetails} />
      </div>
    </div>
  );
}
