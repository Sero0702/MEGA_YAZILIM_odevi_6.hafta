import React, { useState } from "react";
import "@picocss/pico";

function App() {
  const [celsius, setcelcius] = useState(0);
  const [kelvin, setkelvin] = useState(0);
  const [fahrenheit, setfahrenheit] = useState(0);

  function handleCelsiusChange(event) {
    setcelcius(event.target.value);
  }

  function tempatureSettings() {
    const kvalue = parseFloat(celsius) + 273.15;
    const fvalue = (parseFloat(celsius) * 1.8) + 32; 

    setkelvin(kvalue.toFixed(2));
    setfahrenheit(fvalue.toFixed(2));
  }

  return (
    <div style={{ marginTop: "10%" }}>
      <h1 style={{ marginLeft: "40%" }}>Temperature Units</h1>

      <div className="grid" style={{ marginLeft: "30%" }}>
        <h3>Celsius</h3>
        <input
          onChange={handleCelsiusChange}
          type="number"
          id="inpcel"
          placeholder="enter number"  
        />
        <hr />
      </div>

      <div>
        <button
          onClick={tempatureSettings}
          style={{ width: "80%", marginLeft: "10%" }}
        >
          Transform
        </button>
      </div>

      <div className="grid" style={{ marginLeft: "10%", marginTop: "7%" }}>
        <label>Kelvin</label>
        <h4>{kelvin}</h4>

        <hr />
        <label>Fahrenheit</label>
        <h4>{fahrenheit}</h4>
      </div>
    </div>
  );
}
export default App;