import React from 'react';
import { useState } from "react";
import './App.css';

const dishes = {
  southIndian: [
    { name: "Dosha-Shambar", rating: "5/5" },
    { name: "Shambar-Bada", rating: "4.5/5" }
  ],

  northIndian: [
    {
      name: "Chhole-Batura",
      rating: "5/5"
    },
    {
      name: "Dal-Makahni",
      rating: "4.5/5"
    }
  ],
  chineese: [
    {
      name: "Chowmein",
      rating: "4.1/5"
    },
    {
      name: "Spring Rolls",
      rating: "4.6/5"
    }
  ]
};

export default function App() {
  const [selectedDish, setDish] = useState("southIndian");
  function dishClickHandler(dish) {
    setDish(dish);
  }
  return (
    <div className="App">
      <h1> Best Food </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite Dishes. Select a category to get started{" "}
      </p>

      <div>
        {Object.keys(dishes).map((dish) => (
          <button
            onClick={() => dishClickHandler(dish)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {dish}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {dishes[selectedDish].map((place) => (
            <li
              key={place.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {place.name} </div>
              <div style={{ fontSize: "smaller" }}> {place.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
