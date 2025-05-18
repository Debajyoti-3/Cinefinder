import React from "react";
import Markdown from "react-markdown";

function Contact() {
  return (
    <div className="flex justify-center items-center">
      <div className="h-[480px] w-[600px] bg-[#EFEEEA] border-2 border-[#000000] mt-[75px] rounded-4xl shadow-md shadow-[#FE7743]">
        <div className="flex justify-center text-[35px] font-bold mt-1.5">
          Contact Us
        </div>
        <form className="flex flex-col mr-[150px] mt-[15px]">
          <label for="name" className="ml-[12px]">
            Full Name
          </label>
          <input
            type="name"
            placeholder="Enter your name"
            id="name"
            name="name"
            className="h-[50px] bg-amber-200 mt-0.5 ml-[10px] w-[350px] border-[1.5px] border-[#000000] rounded-2xl p-1"
          />
          <label for="email" className="ml-[12px] mt-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            className="h-[50px] mt-0.5 bg-amber-200 ml-[10px] w-[350px] border-[1.5px] border-[#000000] rounded-2xl p-1"
          />
          <label for="suggestion" className="ml-[12px] mt-2">
            Suggestion
          </label>
          <input
            type="text"
            placeholder="Any Suggestion ?"
            id="suggestion"
            name="suggestion"
            className="h-[100px] mt-0.5 bg-amber-200 ml-[10px] w-[350px]  border-[1.5px] border-[#000000] rounded-2xl p-1"
          />
          <button
            onSubmit="preventDefault"
            className="bg-amber-400 w-[70px] h-[35px] rounded-[5px] hover: cursor-pointer hover:bg-amber-300 mt-5 ml-[10px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
