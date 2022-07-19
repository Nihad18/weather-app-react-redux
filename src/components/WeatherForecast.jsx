import React from "react";

const WeatherForecast = ({ date, image, maxDegree, minDegree }) => {
  return (
    <div className='weather-forecast bg-[#1E213A] text-[#E7E7EB] w-[130px] h-[177px] mt-5 mx-4'>
      <div className='date flex justify-center p-4'>{date}</div>
      <img
        className='image w-14 h-16 m-auto'
        src={image}
        alt='image'
      />
      <div className='degress flex justify-around mt-4'>
        <div className='max-degree'>{maxDegree}∘C</div>
        <div className='min-degree text-[#A09FB1]'>{minDegree}∘C</div>
      </div>
    </div>
  );
};

export default WeatherForecast;
