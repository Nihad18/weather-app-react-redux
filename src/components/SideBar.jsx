import React from "react";
import CloudBg from "../images/Cloud-background.png";
import { MdGpsFixed, MdLocationOn } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setToggle } from "../redux/toggleSlice";
import moment from "moment";

function SideBar() {
  const toggle = useSelector((state) => state.toggle.value);
  const dispatch = useDispatch();

  //select state from store
  const state = useSelector((state) => state);
  const { weather } = state;
  return (
    <div
      className={`sidebar overflow-auto bg-[#1E213A] min-h-screen md:w-[450px] ${
        toggle ? "" : "hidden"
      }`}
    >
      <div className='header flex justify-between'>
        <div className='searchBtn'>
          <button
            onClick={() => dispatch(setToggle())}
            className='w-[160px] h-[40px] bg-[#6E707A] text-[#E7E7EB] m-10'
          >
            Seach for places
          </button>
        </div>
        <div className='gpsIcon text-[40px] m-10 '>
          <MdGpsFixed className='bg-[#6E707A] text-white p-2 rounded-[50%]' />
        </div>
      </div>
      <div className='cloudBg flex relative'>
        <img src={CloudBg} alt='cloud' className='mt-5 sm:-mt-3 lg:mt-0 ' />
        <img
          src={weather?.weather?.current?.condition?.icon}
          alt='shower'
          className='absolute left-0 right-0 top-0 bottom-0 m-auto w-40'
        />
      </div>

      <div className='degree text-white flex justify-center relative mt-4 sm:-mt-3 md:-mt-1'>
        <p className='degree-number text-9xl'>
          {weather?.weather?.current?.temp_c}
          <span className='text-4xl '>∘</span>
          <span className='text-4xl absolute top-[5.5rem] '>C</span>
        </p>
      </div>

      <div className='weather-condition text-[#A09FB1] flex justify-center text-3xl mt-8 sm:mt-3 lg:mt-3'>
        {weather?.weather?.current?.condition?.text}
      </div>
      <div className='date flex justify-center text-[#88869D] text-xl mt-6 sm:mt-6 lg:mt-4'>
        <div>Today</div>
        <div className='mx-1'>•</div>
        <div>{moment().format("dddd , D MMM")}</div>
      </div>

      <div className='location text-[#88869D] flex justify-center mt-6 mb-4 lg:mt-8'>
        <MdLocationOn className='mx-1' /> {weather?.weather?.location?.name}
        {" / "}
        {weather?.weather?.location?.country}
      </div>
    </div>
  );
}

export default SideBar;
