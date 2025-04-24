import React from "react";
import Logo from "../Logo";

function Header() {
  return (
    <header>
      <div className="flex justify-center">
        <div className="w-[1000px] bg-[#FE7743] h-[45px] flex items-center justify-between mt-1 rounded-[5px] mr-[10px] ml-[10px] drop-shadow-gray-500/50">
          <div className="mx-10">
            <Logo />
          </div>
          <div className="flex justify-between">
            <div className="flex justify-center border-b-black bg-[#EFEEEA] rounded-[3px] pr-0.5 w-[215px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="28"
                viewBox="0 0 24 24"
                className="bg-gray-300 cursor-pointer w-[35px]"
                
              >
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
              </svg>
              <input type="text" className="border-black p-0.5 w-[180px]" />
            </div>
            <div className="mx-5 cursor-pointer">About</div>

            <div className="mx-5 cursor-pointer">Contact</div>
            <div className="mx-5 cursor-pointer">Home</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
