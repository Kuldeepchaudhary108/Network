import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../service/api";

export default function Signup() {
  const navigate=useNavigate();

  const signupInitialValues = {
    FullName:"",
    email:"",
    password:""
  }

  const [signup,setSignup]=useState(signupInitialValues)

  const onValueChange=(e)=>{
    setSignup({...signup,[e.target.name]:e.target.value})
  }

  const userSignup=async()=>{
    let res=await API.userSignup(signup);
    if(res.isSuccess){
      setSignup(signupInitialValues);
      navigate("/login")
    }
  }

  return (
    <div className="bg-gray-300 min-h-screen flex">
      <div className="bg-[#F06449] w-1/3 min-h-screen rounded-r-2xl flex items-center justify-center">
        <div className="w-2/3">
          <img
            src="./public/elements/logVec.png"
            alt="Logo"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-10">
        {/* Welcome Text */}
        <div className="text-[#36382E] font-semibold text-5xl -ml-56 ">
          {"{ WELCOME TO }"}
        </div>
        <div className="text-[#F06449] font-bold text-5xl -mr-36 mt-10">
          {"<Hack.js/>"}
        </div>
        {/* Login Form */}
        <div className="mt-16 w-full max-w-sm flex flex-col items-center gap-y-6">
          <input
            className="h-12 w-full px-4 rounded-md border border-gray-400 focus:outline-none focus:border-[#F06449]"
            type="text"
            placeholder="Name"
            name="FullName"
            onChange={(e)=>onValueChange(e)}
          />
          <input
            className="h-12 w-full px-4 rounded-md border border-gray-400 focus:outline-none focus:border-[#F06449]"
            type="text"
            placeholder="Username"
            name="email"
            onChange={(e)=>onValueChange(e)}
          />
          <input
            className="h-12 w-full px-4 rounded-md border border-gray-400 focus:outline-none focus:border-[#F06449]"
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e)=>onValueChange(e)}
          />
        </div>
        {/* Login Button */}
        <button className="mt-10 bg-[#F06449] w-32 h-12 rounded-xl text-white font-semibold text-lg hover:bg-[#d85640] transition-all duration-200" onClick={()=>userSignup()}>
          Signup
        </button>
        <div className="text-[#36382E] font-bold text-xl mt-20">
          Already have an account?{" "}
          <span className="text-[#720026]"> <a href="/login">Login!</a></span>{" "}
        </div>
      </div>
    </div>
  );
}
