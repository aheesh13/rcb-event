import UserDetailsForm from "./UserDetailsForm";
import OrderDetails from "./OrderDetails";
import '../CustomCss/Payment.css';

export default function Payment() {
  return (
    <div className="container">
      <div className="user-details">
        <UserDetailsForm />
      </div>
      <div className="order-details">
        <OrderDetails />
      </div>
    </div>
  );
}
