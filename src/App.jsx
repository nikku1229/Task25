import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductCard from "./Card.jsx";
import List from "./ProductList.jsx";
import { useState } from "react";
import Payment from "./Payment.jsx";
import { useSelector } from "react-redux";

function App() {
  const productList = useSelector((state) => state.products);

  const [listItems, setListItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  function addItem(index, price) {
    const newItem = { ...productList.products[index], qty: 1 };
    setListItems((prevListItems) => [...prevListItems, newItem]);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + parseInt(price));
  }

  function increaseQty(item, price) {
    const updatedItems = listItems.map((i) => {
      if (i === item) {
        return { ...i, qty: i.qty + 1 };
      }
      return i;
    });
    setListItems(updatedItems);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + parseInt(price));
  }

  function decreaseQty(item, price) {
    const updatedItems = [...listItems];
    const index = updatedItems.findIndex((i) => i === item);
    if (updatedItems[index].qty > 1) {
      updatedItems[index].qty--;
    } else {
      updatedItems.splice(index, 1);
    }

    setListItems(updatedItems);
    setTotalPrice((prevTotalPrice) => prevTotalPrice - parseInt(price));
  }

  return (
    <>
      <Router>
        <header>
          <h1>LOGO</h1>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </nav>
        </header>

        <section>
          <div className="left">
            <div className="card">
              <Routes>
                <Route path="/" element={<ProductCard addItem={addItem} />} />
                <Route path="/payment" element={<Payment />} />
              </Routes>
            </div>
          </div>
          <div className="right">
            <List
              listItems={listItems}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              totalPrice={totalPrice}
            />
          </div>
        </section>
      </Router>
    </>
  );
}

export default App;
