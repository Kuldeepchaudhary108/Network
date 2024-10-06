import React from "react";
import Header from "./Header";
import ThemBtt from "./ThemBtt";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const cardData = [
    {
      id: 1,
      title: "GDG Cloud Kochi",
      profileImage: "./public/elements/profile.png",
      members: 2290,
    },
    {
      id: 2,
      title: "GDG Cloud Kochi",
      profileImage: "./public/elements/profile.png",
      members: 2290,
    },
    {
      id: 3,
      title: "GDG Cloud Kochi",
      profileImage: "./public/elements/profile.png",
      members: 2290,
    },
  ];
  const navigate = useNavigate();
  const handleJoinClick = () => {
    navigate("/event");
  };

  return (
    <>
      <div className="bg-gray-300 dark:bg-gray-900 min-h-screen">
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
              alt="right arrow"
              width={15}
            />
          </h1>
        </div>  

        <div>
          <div className="flex  flex-wrap justify-between items-center   mx-auto max-w-[1200px] gap-1   ">
            {cardData.map((card) => (
              <div className=" w-[30%] mb-28 mt-24" key={card.id}>
                <div className="h-[600px]   bg-white dark:bg-gray-800 text-center rounded-lg ">
                  <img
                    className="w-[392px] h-[392px] min-h-80 rounded-xl mx-auto"
                    src="./public/elements/Thumbnail 1.png"
                    alt={card.title}
                  />
                  <h1 className="mt-10 text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {card.title}
                  </h1>
                  <div className="flex justify-center items-center space-x-2 mt-3">
                    <img
                      className="h-5"
                      src={card.profileImage}
                      alt="Profile"
                    />
                    <p className="text-gray-700 dark:text-gray-300">
                      {card.members}
                    </p>
                  </div>
                  <button
                    onClick={handleJoinClick}
                    className="bg-[#F06449] dark:bg-[#F06449] w-28 rounded-md mt-5 h-10 text-white hover:bg-[#d85640] transition-all duration-200"
                  >
                    +Join
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
