import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-white flex justify-between mt-2 h-12 items-center">
      <div className="text-[#F06449] font-bold text-xl ml-8 mb-1  ">
        {"<Hack"} <span className="text-[#720026]">{".ji/>"}</span>
      </div>
      <div className="flex space-x-20 font-semibold">
        {" "}
        {/* <p>About</p>
        <p>Event</p>
        <p>Blogs</p> */}
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200
                   ${
                     isActive ? "text-orange-700" : "text-gray-700"
                   } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
          }
        >
          About
        </NavLink>
        <NavLink
          to={"/event"}
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200
                   ${
                     isActive ? "text-orange-700" : "text-gray-700"
                   } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
          }
        >
          Event
        </NavLink>
        <NavLink
          to={"/blog"}
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200
                   ${
                     isActive ? "text-orange-700" : "text-gray-700"
                   } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
          }
        >
          Blog
        </NavLink>
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
