import React, { useEffect } from "react";
import { WiHumidity, WiDaySunny, WiDayFog } from "react-icons/wi";
import { BiWind } from "react-icons/bi";
import { BsFillCloudSunFill, BsFillCloudHaze2Fill } from "react-icons/bs";
// import {} from 'react-icons/bs'

function Weatherapi({ tempInfo }) {
  const [weatherState, setWeatherState] = React.useState("");
  const { temp, humidity, weathermood, name, speed, country } = tempInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState(<BsFillCloudSunFill />);
          break;
        case "Haze":
          setWeatherState(<BsFillCloudHaze2Fill />);
          break;
        case "Clear":
          setWeatherState(<WiDaySunny />);
          break;
        case "Smoke":
          setWeatherState(<WiDayFog />);
          break;

        default:
          break;
      }
    }
  }, [weathermood]);

  return (
    <div>
      <div className="grid justify-center  border-black p-4  w-96 h-80 mx-[30rem] my-40 rounded-xl shadow-lg bg-white bg-[url('data:image/jpeg;base64,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')] bg-cover ">
        <div className="grid">
          <div className="grid grid-cols-2 w-80">
            <div className="flex justify-start text-xl font-bold text-white">
              {name}, {country}
            </div>
            <div className="flex justify-end ml-16 text-xl text-white">
              {new Date().toLocaleString()}
            </div>
          </div>
          <div className="grid mx-24 my-4">
            <h1 className="text-4xl  font-bold mx-2 mt-2 text-white ">
              {temp} ℃
            </h1>
            <span className="text-center text-xl  text-white">
              {weathermood}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-2">
            <div className="font-bold text-4xl -mb-4 ">
              <WiHumidity />
            </div>
            <div className="font-bold text-4xl -mb-4 ">
              <BiWind />
            </div>
            <div className="text-white text-xl ml-2 font-bold">{humidity}</div>
            <div className="text-white text-xl font-bold -ml-2">{speed}</div>
          </div>
          <div className="flex justify-center text-white -mt-4 font-bold text-[7rem]">
            {weatherState}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weatherapi;
