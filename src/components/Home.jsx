import React from "react";
import Header from "./Header";
import ThemBtt from "./ThemBtt";

export default function Home() {
  return (
    <>
      <div className="bg-gray-300 dark:bg-gray-900 min-h-screen">
        <div>
          <Header />
        </div>
        <div className=" flex float-end">
          <ThemBtt />
        </div>
        <div className="flex mt-7">
          <div className="ml-16">
            <img src="./public/elements/image 1.png" alt="" />
          </div>

          <div className="text-6xl w-2/3 ml-48 mt-16">
            <h1 className="text-[#720026] dark:text-[#F06449]">
              Revolutionize
            </h1>
            <h1 className="text-[#F06449] dark:text-[#720026]">
              hackathon <br />
              collaboration with
            </h1>
            <h1 className="text-[#720026] dark:text-[#F06449]">
              seamless <br /> connections{" "}
              <span className="text-[#F06449] dark:text-[#720026]">and</span>
            </h1>
            <h1 className="text-[#720026] dark:text-[#F06449]">discovery</h1>
          </div>
        </div>

        <div className="ml-32 mt-28">
          <h1 className="text-[#36382E] dark:text-gray-200 text-4xl font-semibold flex mb-12">
            EVENT{" "}
            <img
              className="ml-2"
              src="./public/elements/right-long-solid.svg"
              alt="right arrow" width={15}
            />
          </h1>
        </div>

        <div>
          <div className="flex justify-between items-center px-4 mt-3 mx-auto max-w-[1200px] gap-6">
            <div className="h-[600px] w-1/3 bg-white dark:bg-gray-800 text-center rounded-lg p-4">
              <img
                className="w-[392px] h-[392px] min-h-80 rounded-xl mx-auto"
                src="./public/elements/Thumbnail 1.png"
                alt="GDG Cloud Kochi"
              />
              <h1 className="mt-10 text-xl font-semibold text-gray-900 dark:text-gray-100">
                GDG Cloud Kochi
              </h1>
              <div className="flex justify-center items-center space-x-2 mt-3">
                <img
                  className="h-5"
                  src="./public/elements/profile.png"
                  alt="Profile"
                />
                <p className="text-gray-700 dark:text-gray-300">2290</p>
              </div>
              <button className="bg-[#F06449] dark:bg-[#F06449] w-28 h-10 rounded-md mt-5 text-white">
                +Join
              </button>
            </div>

            <div className="h-[600px] w-1/3 bg-white dark:bg-gray-800 text-center rounded-lg p-4">
              <img
                className="w-[392px] h-[392px] min-h-80 rounded-xl mx-auto"
                src="./public/elements/Thumbnail 1.png"
                alt="GDG Cloud Kochi"
              />
              <h1 className="mt-10 text-xl font-semibold text-gray-900 dark:text-gray-100">
                GDG Cloud Kochi
              </h1>
              <div className="flex justify-center items-center space-x-2 mt-3">
                <img
                  className="h-5"
                  src="./public/elements/profile.png"
                  alt="Profile"
                />
                <p className="text-gray-700 dark:text-gray-300">2290</p>
              </div>
              <button className="bg-[#F06449] dark:bg-[#F06449] w-28 rounded-md mt-5 h-10 text-white">
                +Join
              </button>
            </div>

            <div className="h-[600px] w-1/3 bg-white dark:bg-gray-800 text-center rounded-lg p-4">
              <img
                className="w-[392px] h-[392px] min-h-80 rounded-xl mx-auto"
                src="./public/elements/Thumbnail 1.png"
                alt="GDG Cloud Kochi"
              />
              <h1 className="mt-10 text-xl font-semibold text-gray-900 dark:text-gray-100">
                GDG Cloud Kochi
              </h1>
              <div className="flex justify-center items-center space-x-2 mt-3">
                <img
                  className="h-5"
                  src="./public/elements/profile.png"
                  alt="Profile"
                />
                <p className="text-gray-700 dark:text-gray-300">2290</p>
              </div>
              <button className="bg-[#F06449] dark:bg-[#F06449] w-28 rounded-md mt-5 h-10 text-white">
                +Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
