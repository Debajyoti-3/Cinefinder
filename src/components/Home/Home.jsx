import React from "react";
import MovieSearch from "../API/MovieSearch";


function Home() {
  return (
    <div>
      <div className="flex flex-wrap w-full h-[500px] justify-center bg-[#EFEEEA]">
        <h1 className="text-[90px] font-mono font-bold pt-[20px] color-[#273F4F]">
          Your Ultimate Movie Spot
        </h1>
        
        <h2>Just search about your all loved movies and shows !</h2>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center items-center w-[250px] h-[400px] border-black rounded-2xl bg-[#FE7743] mr-[45px]">
          movie 1
        </div>
        <div className="flex justify-center items-center w-[250px] h-[400px] border-black rounded-2xl bg-[#FE7743] mr-[45px]">
          movie 2
        </div>
        <div className="flex justify-center items-center w-[250px] h-[400px] border-black rounded-2xl bg-[#FE7743] mr-[45px]">
          movie 3
        </div>
      </div>
    </div>
  );
}

export default Home;
