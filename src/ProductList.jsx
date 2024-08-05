import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./list.css";
import SmallList from "./SmallList";

function List({ listItems, increaseQty, decreaseQty, totalPrice }) {
  const location = useLocation();

  return (
    <>
      <div className="right-block">
        <h2>Cart</h2>
        <ul>
          {listItems.map((item, index) => (
            <SmallList
              key={index}
              item={item}
              index={index}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          ))}
        </ul>
        <p>
          Total: $<span>{totalPrice}</span>
        </p>
        <div className="payment-div">
        {location.pathname === "/payment" ? (
            <Link className="payment-btn" to="/">
              Back To Shopping
            </Link>
          ) : (
            <Link className="payment-btn" to="/payment">
              Process To Payment
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default List;
