import React from "react";
import { Link } from "react-router";

function About() {
  return (
    <div className="flex justify-center ">
      <div className="  flex-wrap h-[500px] w-[850px] bg-[#EFEEEA] mt-[75px] rounded-4xl border-2 border-[#000000] shadow-md shadow-[#FE7743]">
        <div className="flex justify-center">
            <div className="text-[35px] mt-1.5 font-bold">About Us</div>
        </div>
        <div className="flex justify-center ">
            <pre className="mt-[15px]">
            Hello Everone we are Cinefinder <br />
            mWe help cinefiles to find amazing all kinds of movies <br />
            We think this is very helpful to moviephilics.<br />
            Keep supporting us and watch Movies <br /><br /><br />
            If you need, you can Contact Us: <br /><br />
            <Link to="/Contact" className="">
            <button className="shadow-sm shadow-[#FE7743] mx-1.5 hover:cursor-pointer rounded-[1px]">
                Contact Us
            </button>
            </Link>
        </pre>
        </div>
        
      </div>
    </div>
  );
}

export default About;
