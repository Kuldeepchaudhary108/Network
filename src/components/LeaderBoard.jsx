import React from "react";

export default function LeaderBoard({ leaderboard }) {
  return (
    <div>
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
                  <span className="text-white font-semibold">{entry.rank}</span>
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
    </div>
  );
}
