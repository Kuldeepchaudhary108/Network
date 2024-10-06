import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeamProfile from "./TeamProfile";

export default function EventDetails() {
  const [activeTab, setActiveTab] = useState("about");
  const [view, setView] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState({ name: "", image: "" });
  const handleTeamProfile = (team) => {
    setSelectedTeam({ name: team.name, image: team.image });
    setView(true);
  };

  const leaderboard = [
    {
      rank: 1,
      name: "Garud",
      points: 43,
      image: `./elements/th.jpeg`,
      isTop: true,
    },
    {
      rank: 2,
      name: "Meghan Jes...",
      points: 40,
      image: `./elements/th.jpeg`,
      isTop: true,
    },
    {
      rank: 3,
      name: "Alex Turner",
      points: 38,
      image: `./elements/th.jpeg`,
      isTop: true,
    },
    {
      rank: 4,
      name: "Marsha Fisher",
      points: 36,
      image: `./elements/th.jpeg`,
    },
    {
      rank: 5,
      name: "Juanita Cormier",
      points: 35,
      image: `./elements/th.jpeg`,
    },
    {
      rank: 6,
      name: "You",
      points: 34,
      image: `./elements/th.jpeg`,
    },
    {
      rank: 7,
      name: "Tamara Schmidt",
      points: 33,
      image: `./elements/th.jpeg`,
    },
    {
      rank: 8,
      name: "Ricardo Veum",
      points: 32,
      image: `./elements/th.jpeg`,
    },
    {
      rank: 9,
      name: "Gary Sanford",
      points: 31,
      image: `./elements/th.jpeg`,
    },
    {
      rank: 10,
      name: "Becky Bartell",
      points: 30,
      image: `  /elements/th.jpeg`,
    },
  ];

  return (
    <>
      {!view && (
        <div className="bg-gray-300 flex flex-col items-center pt-8 px-4 dark:bg-gray-900 min-h-screen">
          <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl dark:bg-gray-300">
            {/* Header */}
            <div className="relative">
              <img
                src={`./public/elements/gdg-beijing 1.png`}
                alt="Event Cover"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="absolute top-60 left-4 bg-white rounded-xl shadow-md">
                <img
                  src={`./public/elements/gdg-logo.png`}
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
                <button className="flex items-center bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition">
                  <span className="material-icons mr-2">share</span>
                </button>
              </div>
            </div>
            {/* Navigation Tabs */}
            <div className="border-t border-gray-300 px-6">
              <div className="flex space-x-8 py-4 text-lg font-semibold">
                {[
                  "about",
                  "teams",
                  "leaderboard",
                  " Participated",
                  "images",
                ].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`block py-2 pr-4 pl-3 duration-200 ${
                      activeTab === tab ? "text-[#F06449]" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#F06449] lg:p-0`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Content Area */}
          <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl mt-8 p-6 min-h-[300px] dark:bg-gray-300">
            {activeTab === "about" && <p>About the event...</p>}
            {activeTab === "teams" && (
              <ul className="space-y-2 ">
                {leaderboard.map((team) => (
                   <li
                    key={team.rank}
                    className="p-4 bg-gray-800 text-white rounded-lg flex justify-between gap-8"
                  >
                    <div
                      onClick={() => {
                        handleTeamProfile(team);
                      }}
                    >
                      {team.name}
                    </div>
                    <div>
                      <img
                        className="w-7 rounded-sm ml-16"
                        src={team.image}
                        alt="team img"
                      />
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          handleTeamProfile(team);
                        }}
                        className="ml-[550px] bg-green-700 rounded-md w-20 h-7"
                      >
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
      )}
      {view && (
        <TeamProfile
          teamName={selectedTeam.name}
          teamImage={selectedTeam.image}
        />
      )}
    </>
  );
}
