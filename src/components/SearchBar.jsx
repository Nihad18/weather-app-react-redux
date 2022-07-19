import React from "react";
import {
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { setToggle } from "../redux/toggleSlice";
import { setCity, removeInputValue } from "../redux/citySlice";
import { fetchWeatherAction } from "../redux/weatherSlice";

function SearchBar() {
  const toggle = useSelector((state) => state.toggle.value);
  const city = useSelector((state) => state.city.value);
  const dispatch = useDispatch();
  return (
    <div
      className={`searchbar overflow-auto bg-[#1E213A] min-h-screen md:w-[450px] ${
        toggle ? "hidden" : ""
      }`}
    >
      <div className="flex justify-end ">
      <div
        onClick={() => dispatch(setToggle())}
        className={` closeIcon text-[40px] m-6 w-fit cursor-pointer`}
      >
        <AiOutlineClose className='text-[#E7E7EB] p-2' />
      </div>
      </div>
      <div className='search flex w-full'>
        <div className='flex border ml-4 mr-4 lg:mr-3 w-3/5 '>
          <label
            htmlFor='search'
            className='bg-[#1E213A] w-10 h-12 flex justify-center [align-items:center]'
          >
            <AiOutlineSearch className='text-[#616475] text-2xl' />
          </label>
          <input
            className='bg-[#1E213A] text-[#E7E7EB] h-12 outline-none  placeholder:text-[#616475] '
            type='text'
            id='search'
            value={city}
            onChange={(e) => dispatch(setCity(e.target.value))}
            placeholder='search location'
          />
        </div>
        <button
          onClick={() => dispatch(fetchWeatherAction(city))}
          disabled={!city}
          className={`bg-[#3C47E9] text-[#E7E7EB] w-16 sm:w-18 lg:w-24 ${!city ? "cursor-not-allowed" : ""} `}>
          <div
            className='w-16 h-min sm:w-18 lg:w-24 '
            onClick={!city ? "" : () => dispatch(setToggle())}
          >
            <div onClick={() => dispatch(removeInputValue())}>Search</div>
          </div>
        </button>
      </div>
      <div className='location mx-4 w-5/6'>
        {/* -------------------------------------- */}
        <div onClick={() => dispatch(setToggle())}>
          <div
            onClick={() => dispatch(fetchWeatherAction("Baku"))}
            className='border my-6 px-6 cursor-pointer flex justify-between h-16 [align-items:center]'
          >
            <div className='text-[#E7E7EB]'>Baku </div>
            <div className='text-[#616475]'>
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
        {/* -------------------------------------- */}
        <div onClick={() => dispatch(setToggle())}>
          <div
            onClick={() => dispatch(fetchWeatherAction("Ankara"))}
            className='border my-6 px-6 cursor-pointer flex justify-between h-16 [align-items:center]'
          >
            <div className='text-[#E7E7EB]'>Ankara</div>
            <div className='text-[#616475]'>
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
        {/* -------------------------------------- */}
        <div onClick={() => dispatch(setToggle())}>
          <div
            onClick={() => dispatch(fetchWeatherAction("London"))}
            className='border my-6 px-6 cursor-pointer flex justify-between [align-items:center] h-16'
          >
            <div className='text-[#E7E7EB]'>London</div>
            <div className='text-[#616475]'>
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
        {/* -------------------------------------- */}
      </div>
    </div>
  );
}

export default SearchBar;
