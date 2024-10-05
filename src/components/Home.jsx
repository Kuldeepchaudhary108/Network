import React from "react";
import Header from "./Header";
export default function Home() {
  return (
    <>
      <div className="bg-gray-300 min-h-screen">
        <div>
          <Header />
        </div>
        <div className="flex mt-7">
          <div className="ml-16">
            {" "}
            <img src="./public/elements/image 1.png" alt="" />
          </div>
          <div className="text-6xl w-2/3  ml-48 mt-16">
            <h1 className="text-[#720026]">Revolutionize</h1>
            <h1 className="text-[#F06449]">
              hackathon <br />
              collaboration with
            </h1>
            <h1 className="text-[#720026]">
              seamless <br /> connections{" "}
              <span className="text-[#F06449]">and</span>
            </h1>
            <h1 className="text-[#720026]">discovery</h1>
          </div>
        </div>
        <div className="ml-10 mt-28">
          <h1 className="text-[#36382E] text-xl font-semibold flex ">
            EVENT{" "}
            <img
              className="w-8 ml-2"
              src="./public/elements/right-long-solid.svg"
              alt="right arrow"
            />
          </h1>
        </div>

        <div className="flex justify-between items-center px-4 mx-auto max-w-[1200px] gap-6">
          <div className="h-[550px] w-1/3 bg-white text-center rounded-lg p-4">
            <img
              className="w-[392px] h-[392px] min-h-80 rounded-xl mx-auto"
              src="./public/elements/Thumbnail 1.png"
              alt="GDG Cloud Kochi"
            />
            <h1 className="mt-10 text-xl font-semibold">GDG Cloud Kochi</h1>
            <div className="flex justify-center items-center space-x-2 mt-3">
              <img
                className="h-5"
                src="./public/elements/profile.png"
                alt="Profile"
              />
              <p>2290</p>
            </div>
            <button className="bg-[#F06449] w-16 rounded-md mt-5 text-white">
              +Join
            </button>
          </div>
          <div className="h-[550px] w-1/3 bg-white text-center rounded-lg p-4">
            <img
              className="w-[392px] h-[392px] min-h-80 rounded-xl mx-auto"
              src="./public/elements/Thumbnail 1.png"
              alt="GDG Cloud Kochi"
            />
            <h1 className="mt-10 text-xl font-semibold">GDG Cloud Kochi</h1>
            <div className="flex justify-center items-center space-x-2 mt-3">
              <img
                className="h-5"
                src="./public/elements/profile.png"
                alt="Profile"
              />
              <p>2290</p>
            </div>
            <button className="bg-[#F06449] w-16 rounded-md mt-5 text-white">
              +Join
            </button>
          </div>
          <div className="h-[550px] w-1/3 bg-white text-center rounded-lg p-4">
            <img
              className="w-[392px] h-[392px] min-h-80 rounded-xl mx-auto"
              src="./public/elements/Thumbnail 1.png"
              alt="GDG Cloud Kochi"
            />
            <h1 className="mt-10 text-xl font-semibold">GDG Cloud Kochi</h1>
            <div className="flex justify-center items-center space-x-2 mt-3">
              <img
                className="h-5"
                src="./public/elements/profile.png"
                alt="Profile"
              />
              <p>2290</p>
            </div>
            <button className="bg-[#F06449] w-16 rounded-md mt-5 text-white">
              +Join
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
