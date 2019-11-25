import React, { useState, useEffect } from "react";
import { getCarsAsync, getCarsFindAsync } from "../requests/cars";

export default function Cars() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    getCarsAsync().then(response => setCars(response.data.cars));
  }, []);
  const handleClickFind = () => {
    const id = parseInt(prompt("Digite o código", "0"));
    if (id) {
      getCarsFindAsync(id).then(response => console.log(response.data));
    }
  };
  return (
    <div className="App">
      <button onClick={handleClickFind}>Find</button>
      <ul>
        {cars.map((car, key) => (
          <li key={key}>
            {car.id}-{car.title}-{car.purchase}-{car.value}-
            {car.active ? "true" : "false"}
          </li>
        ))}
      </ul>
    </div>
  );
}
