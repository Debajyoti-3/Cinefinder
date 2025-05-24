import React from "react";
import Logo from "../Logo";
import { Link, NavLink } from "react-router";
import MovieSearch from "../API/MovieSearch";
import { useState } from "react";

function Header() {
  const [query, setQuery] = useState("");
  return (
    <header>
      <div className="flex justify-center">
        <div className="w-[1000px] bg-[#FE7743] h-[45px] flex items-center justify-between mt-1 rounded-[5px] mr-[10px] ml-[10px] drop-shadow-gray-500/50">
          <Link to=" ">
            <div className="mx-10">
              <Logo />
            </div>
          </Link>
          <div className="flex justify-between">
            <div className="flex justify-center border-b-black bg-[#EFEEEA] rounded-[3px] pr-0.5 w-[215px]">
              <NavLink to='/Results'>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="28"
                viewBox="0 0 24 24"
                //onClick={console.log(`Icon clicked`)}
                //onClick={<MovieSearch/>}
                
                className="bg-gray-300 cursor-pointer w-[35px]"
              >
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
              </svg>
              </NavLink>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border-black p-0.5 w-[180px]"
              />
            </div>
            <NavLink to="/About">
              <div className="mx-5 cursor-pointer">About</div>
            </NavLink>

            <NavLink to="/Contact">
              <div className="mx-5 cursor-pointer">Contact</div>
            </NavLink>
            <NavLink to=" ">
              <div className="mx-5 cursor-pointer">Home</div>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
