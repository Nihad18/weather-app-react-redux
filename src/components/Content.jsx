import React, { useEffect } from "react";
import WeatherForecast from "./WeatherForecast";
import ProgressBar from "./ProgressBar";
import { HiPaperAirplane } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherAction } from "../redux/weatherSlice";
import moment from "moment";

function Content() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherAction("Baku"));
  }, []);
  //select state from store
  const state = useSelector((state) => state);
  const { weather } = state;
  return (
    <div className='content flex-1 bg-[#100E1D]'>
      <div className='degrees font-bold justify-end hidden md:flex'>
        <div className='celsius bg-[#E7E7EB] text-[#110E3C] w-10 h-10 mt-6 mr-3 rounded-full flex justify-center '>
          <span className='pt-1'>∘</span>
          <span className='pt-3'>C</span>
        </div>
        <div className='farenheit bg-[#585676] text-[#E7E7EB] w-10 h-10 mt-6 mr-20 rounded-full flex justify-center'>
          <span className='pt-1'>∘</span>
          <span className='pt-3'>F</span>
        </div>
      </div>

      <div className='weather-forecast flex flex-wrap justify-center'>
        <WeatherForecast
          date='Tomorrow'
          image={weather?.weather?.forecast?.forecastday[1]?.day?.condition?.icon}
          maxDegree={weather?.weather?.forecast?.forecastday[1]?.day?.maxtemp_c}
          minDegree={weather?.weather?.forecast?.forecastday[1]?.day?.mintemp_c}
        />
        <WeatherForecast
          date={moment().add(2, "days").format("ddd , D MMM")}
          image={weather?.weather?.forecast?.forecastday[2]?.day?.condition?.icon}
          maxDegree={weather?.weather?.forecast?.forecastday[2]?.day?.maxtemp_c}
          minDegree={weather?.weather?.forecast?.forecastday[2]?.day?.mintemp_c}
        />
        <WeatherForecast
          date={moment().add(3, "days").format("ddd , D MMM")}
          image={weather?.weather?.forecast?.forecastday[0]?.day?.condition?.icon}
          maxDegree={weather?.weather?.forecast?.forecastday[0]?.day?.maxtemp_c}
          minDegree={weather?.weather?.forecast?.forecastday[0]?.day?.mintemp_c}
        />
        <WeatherForecast
          date={moment().add(4, "days").format("ddd , D MMM")}
          image={weather?.weather?.forecast?.forecastday[1]?.day?.condition?.icon}
          maxDegree={weather?.weather?.forecast?.forecastday[1]?.day?.maxtemp_c}
          minDegree={weather?.weather?.forecast?.forecastday[1]?.day?.mintemp_c}
        />
        <WeatherForecast
          date={moment().add(5, "days").format("ddd , D MMM")}
          image={weather?.weather?.forecast?.forecastday[2]?.day?.condition?.icon}
          maxDegree={weather?.weather?.forecast?.forecastday[2]?.day?.maxtemp_c}
          minDegree={weather?.weather?.forecast?.forecastday[2]?.day?.mintemp_c}
        />
      </div>

      <div className='more-info text-2xl text-[#E7E7EB] flex justify-center'>
        <div>
          <h1 className='header mt-6 mb-4 text-center text-xl md:text-2xl'>
            Today’s Hightlights{" "}
          </h1>
          <div className='flex justify-center flex-wrap '>
            <div className='wind-status bg-[#1E213A] w-[300px] h-[150px] text-center mb-3 sm:mx-10'>
              <p className='text-sm pt-3'>Wind status</p>
              <p className='text-5xl pt-2'>{weather?.weather?.current?.wind_mph}mph</p>
              <div className='flex justify-center pt-3'>
                <p className='bg-[#5F6173] rounded-full w-8 h-8 flex justify-center [align-items:center]'>
                  <HiPaperAirplane className='rotate-[210deg]' />
                </p>{" "}
                {weather?.weather?.current?.wind_dir}
              </div>
            </div>
            <div className='humidity bg-[#1E213A] w-[300px] h-[150px] text-center mb-3 sm:mx-10'>
              <p className='text-sm pt-3'>Humidity</p>
              <p className='text-5xl pt-2'>{weather?.weather?.current?.humidity}</p>
              <ProgressBar completed={weather?.weather?.current?.humidity} />
            </div>
            <div className='visibility  bg-[#1E213A] w-[300px] h-[120px] text-center mb-3 sm:mx-10'>
              <div className='text-sm mt-3 mb-2'>Visibility</div>
              <div className='text-5xl'>{weather?.weather?.current?.vis_miles} miles</div>
            </div>
            <div className='air-pressure bg-[#1E213A] w-[300px] h-[120px] text-center mb-3 sm:mx-10'>
              <div className='mt-3 mb-2 text-sm'>Air Pressure</div>
              <div className='text-5xl'>{weather?.weather?.current?.pressure_mb} mb</div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer text-[#A09FB1] text-center'>
        <p>
          created by{" "}
          <a
            className='border-b'
            href='https://www.linkedin.com/in/nihad-balaki%C5%9Fiyev-544441213/'
            target='_blank noopener noreferrer'
          >
            Nihad
          </a>{" "}
          - devChallenges.io
        </p>
      </div>
    </div>
  );
}

export default Content;
