import React, { useEffect, useState } from "react";
import Weatherapi from "./Weatherapi";

function Weathercard() {
  const [searchValue, setSearchValue] = useState("pune");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=cc0a7a2f2c1a0ae7a756fcf57dd9188d`;

      const res = await fetch(url);
      const data = await res.json();
      const { temp, humidity } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country } = data.sys;

      const myWeatherInfo = {
        temp,
        humidity,
        weathermood,
        name,
        speed,
        country,
      };

      setTempInfo(myWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <div className=" ">
      <div className="flex justify-center -mb-24 ml-5 ">
        <input
          className="border  w-96 h-10 mt-24 outline-none  hover:bg-trasparent text-blue-700 font-semibold h-11 py-3 px-4 border border-blue-500  rounded"
          type="search"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button
          className="mt-24 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 w-32 border border-blue-500 hover:border-transparent rounded "
          onClick={getWeatherInfo}
        >
          Search
        </button>
      </div>
      <Weatherapi tempInfo={tempInfo} />
    </div>
  );
}

export default Weathercard;
