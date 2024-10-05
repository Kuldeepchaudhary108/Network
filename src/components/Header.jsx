import React from "react";

export default function Header() {
  return (
    <div className="bg-white flex justify-between mt-2 h-12 items-center">
      <div className="text-[#F06449] font-bold text-xl ml-2  ">
        {"<Hack"} <span className="text-[#720026]">{".ji/>"}</span>
      </div>
      <div className="flex space-x-20 font-semibold">
        {" "}
        <p>About</p>
        <p>Event</p>
        <p>Blogs</p>
      </div>
      <div className="flex space-x-4 mr-5 font-semibold">
        <button className="hover:bg-gray-200 transition-all duration-200 rounded-xl min-w-20 h-10 ">
          Login
        </button>
        <button className="bg-[#F06449] rounded-xl min-w-20 h-10 hover:bg-[#d85640] transition-all duration-200">
          Signup
        </button>
      </div>
    </div>
  );
}
