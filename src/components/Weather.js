import React, { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then((response) => response.json())
      .then((data) => {
        const kelvin = data.main.temp;
        const celcius = kelvin - 273.15;
        console.log(city);
        setResult("Temperature at " + city + "\n" + Math.round(celcius) + "°C");
      })
      .catch((error) => console.log(error));
    setCity("");
  };
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Weather Display</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="city"
                value={city}
                onChange={handleChange}
              />
              <br />
              <br />
              <input type="submit" value="Get Temperature" />
            </form>
            <br />
            <br />
            <h1>{result}</h1>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Weather;
