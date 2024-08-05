import React, { useState } from "react";
import "./Payment.css";

function Payment() {
  const [payMethod, setPayMenthod] = useState(true);

  return (
    <>
      <div className="payment-container">
        <div className="option">
          <div className="ondelivery">
            <input
              type="radio"
              id="onDelivery"
              name="same"
              value="cash on delivery"
              onClick={() => {
                setPayMenthod(false);
              }}
            />
            <label htmlFor="onDelivery">Cash on delivery</label>
          </div>
          <div className="onCard">
            <input
              type="radio"
              id="onCard"
              name="same"
              value="credit card"
              onClick={() => {
                setPayMenthod(true);
              }}
              defaultChecked
            />
            <label htmlFor="onCard">Credit card</label>
          </div>
        </div>
        <div className="option-wrapper">
          {payMethod ? (
            <div className="payment-card">
              <label htmlFor="number">Enter your card number:</label>
              <input type="text" placeholder="Card Number...." />
              <label htmlFor="expiry">Enter your card's expiry date:</label>
              <input type="text" placeholder="Expiry Date...." />
              <label htmlFor="cvv">Enter your cvv number:</label>
              <input type="text" placeholder="Cvv number...." />
            </div>
          ) : (
            <div className="payment-card">
              Click on the proceed button to confirm your order....
            </div>
          )}
        </div>
        <div className="confirm">
          <button>Proceed</button>
        </div>
      </div>
    </>
  );
}

export default Payment;
