import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
export default function EventDetails() {
  // State to keep track of the selected tab
  const [activeTab, setActiveTab] = useState("about");

  // Sample data for teams (can be moved to another file or fetched from API)
  const leaderboard = [
    {
      rank: 1,
      name: "Garud",
      points: 43,
      image: "./public/elements/th.jpeg",
      isTop: true,
    },
    {
      rank: 2,
      name: "Meghan Jes...",
      points: 40,
      image: "./public/elements/th.jpeg",
      isTop: true,
    },
    {
      rank: 3,
      name: "Alex Turner",
      points: 38,
      image: "./public/elements/th.jpeg",
      isTop: true,
    },
    {
      rank: 4,
      name: "Marsha Fisher",
      points: 36,
      image: "./public/elements/th.jpeg",
    },
    {
      rank: 5,
      name: "Juanita Cormier",
      points: 35,
      image: "./public/elements/th.jpeg",
    },
    { rank: 6, name: "You", points: 34, image: "./public/elements/th.jpeg" },
    {
      rank: 7,
      name: "Tamara Schmidt",
      points: 33,
      image: "./public/elements/th.jpeg",
    },
    {
      rank: 8,
      name: "Ricardo Veum",
      points: 32,
      image: "./public/elements/th.jpeg",
    },
    {
      rank: 9,
      name: "Gary Sanford",
      points: 31,
      image: "./public/elements/th.jpeg",
    },
    {
      rank: 10,
      name: "Becky Bartell",
      points: 30,
      image: "./public/elements/th.jpeg",
    },
  ];

  return (
    // <div className="bg-gray-200 flex flex-col items-center pt-8 px-4 min-h-screen">
    <div className="bg-gray-300 flex flex-col items-center pt-8 px-4 dark:bg-gray-900 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl dark:bg-gray-300">
        <div className="relative">
          <img
            src="./public/elements/gdg-beijing 1.png"
            alt="Event Cover"
            className="w-full h-auto rounded-t-lg"
          />
          {/* Logo */}
          <div className="absolute top-60 left-4 bg-white rounded-xl shadow-md">
            <img
              src="./public/elements/gdg-logo.png"
              alt="GDG Logo"
              className="w-72 h-32"
            />
          </div>
        </div>
        <div className="p-6 ml-96">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800">
                GDG Hackathon
              </h2>
              <p className="text-gray-600 mt-2 flex items-center">
                <span className="material-icons mr-1">groups</span>204 Teams
                Participated
              </p>
            </div>
            {/* Share Button */}
            <button className="flex items-center bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition">
              <span className="material-icons mr-2">share</span>
            </button>
          </div>
        </div>
        {/* Navigation Tabs */}
        <div className="border-t border-gray-300 px-6">
          <div className="flex space-x-8 py-4 text-lg font-semibold">
            <button
              onClick={() => setActiveTab("about")}
              className={`block py-2 pr-4 pl-3 duration-200 ${
                activeTab === "about" ? "text-[#F06449]" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#F06449] lg:p-0`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab("teams")}
              className={`block py-2 pr-4 pl-3 duration-200 ${
                activeTab === "teams" ? "text-[#F06449]" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#F06449] lg:p-0`}
            >
              Teams
            </button>
            <button
              onClick={() => setActiveTab("leaderboard")}
              className={`block py-2 pr-4 pl-3 duration-200 ${
                activeTab === "leaderboard" ? "text-[#F06449]" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#F06449] lg:p-0`}
            >
              Leaderboard
            </button>
            <button
              onClick={() => setActiveTab("images")}
              className={`block py-2 pr-4 pl-3 duration-200 ${
                activeTab === "images" ? "text-[#F06449]" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#F06449] lg:p-0`}
            >
              Images
            </button>
          </div>
        </div>
      </div>

      {/* Placeholder for Additional Content */}
      <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl mt-8 p-6 min-h-[300px] dark:bg-gray-300">
        {activeTab === "about" && <p>About the event...</p>}
        {activeTab === "teams" && (
          <ul className="space-y-2 ">
            {leaderboard.map((team) => (
              <li
                key={team.rank}
                className="p-4 bg-gray-800 text-white rounded-lg flex justify-between gap-8"
              >
                <div>{team.name}</div>
                <div>
                  <img
                    className="w-7 rounded-sm ml-16"
                    src={team.image}
                    alt="team img"
                  />
                </div>
                <div>
                  <button className="ml-[550px] bg-green-700 rounded-md w-20 h-7">
                    Project
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        {activeTab === "leaderboard" && (
          <div className="bg-green-900 p-8 rounded-lg text-center space-y-8 max-w-md mx-auto mt-8">
            <h2 className="text-white text-3xl font-bold">Leaderboard</h2>
            <div className="flex items-center justify-around bg-transparent">
              {leaderboard
                .filter((entry) => entry.isTop)
                .map((entry) => (
                  <div
                    key={entry.rank}
                    className="flex flex-col items-center space-y-1"
                  >
                    <img
                      src={entry.image}
                      alt={entry.name}
                      className="w-20 h-20 rounded-full border-4 border-yellow-400"
                    />
                    <div className="text-white text-lg font-semibold">
                      {entry.name}
                    </div>
                    <div className="text-green-500">{entry.points} pts</div>
                  </div>
                ))}
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <ul className="space-y-2">
                {leaderboard.map((entry) => (
                  <li
                    key={entry.rank}
                    className={`flex items-center justify-between p-4 rounded-lg ${
                      entry.name === "You" ? "bg-green-700" : "bg-gray-800"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={entry.image}
                        alt={entry.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <span className="text-white font-semibold">
                        {entry.rank}
                      </span>
                      <span className="text-white">{entry.name}</span>
                    </div>
                    <span className="text-white font-semibold">
                      {entry.points} pts
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {activeTab === "images" && <p>Images gallery...</p>}
      </div>
    </div>
  );
}
