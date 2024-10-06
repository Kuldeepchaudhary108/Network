import React, { useState } from "react";

export default function TeamProfile({ teamName, teamImage }) {
  const Members = [
    {
      name: "Kuldeep Kumar",
      domain: "Full stack Web- Dev",
      gitHub: "https://github.com/kuldeeppandit75",
      LinkedIn: "https://www.linkedin.com/in/kuldeep-kumar",
    },
    {
      name: "Kuldeep",
      domain: "Full stack Web- Dev",
      gitHub: "https://github.com/kuldeep-pandit",
      LinkedIn: "https://www.linkedin.com/in/kuldeep-pandit",
    },
    {
      name: "Ritika Kumari",
      domain: "Full stack Web- Dev",
      gitHub: "https://github.com/kuldeep-kumari",
      LinkedIn: "https://www.linkedin.com/in/ritika-kumari",
    },
    {
      name: "Anurag Kumari",
      domain: "Full stack Web- Dev",
      gitHub: "https://github.com/anurag-kumari",
      LinkedIn: "https://www.linkedin.com/in/anurag-kumari",
    },
  ];

  // State to manage which member's details are shown
  const [activeMember, setActiveMember] = useState(null);

  // Function to toggle member details
  const toggleMemberDetails = (memberLinkedIn) => {
    if (activeMember === memberLinkedIn) {
      setActiveMember(null); // Collapse if clicked again
    } else {
      setActiveMember(memberLinkedIn); // Set the new active member
    }
  };

  return (
    <div className="bg-gray-300 flex flex-col items-center pt-8 px-4 dark:bg-gray-900 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl dark:bg-gray-300">
        <div className="relative">
          <img
            src="./public/elements/gdg-beijing 1.png"
            alt="Event Cover"
            className="w-full h-auto rounded-t-lg"
          />
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
            <button className="flex items-center bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition">
              <span className="material-icons mr-2">share</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl mt-8 p-6 min-h-screen dark:bg-gray-300">
        <div className="flex justify-center items-center gap-4">
          <img
            className="w-28 rounded-full border-4 border-yellow-400"
            src={teamImage}
            alt={teamName}
          />
          <div className="text-4xl">{teamName}</div>
        </div>

        <ul className="space-y-2 mt-20">
          {Members.map((member) => (
            <li
              key={member.LinkedIn}
              className="bg-gray-800 text-white rounded-lg p-4"
            >
              <div
                className="flex justify-between cursor-pointer items-center"
                onClick={() => toggleMemberDetails(member.LinkedIn)}
              >
                <div>{member.name}</div>
                <div>
                  <img
                    className="w-10 rounded-md"
                    src={teamImage}
                    alt={teamName}
                  />
                </div>
                <span
                  className={`material-icons transition-transform duration-300 ${
                    activeMember === member.LinkedIn ? "rotate-180" : ""
                  }`}
                >
                  <img className="w-5 " src="./elements/dp.png" alt="" />
                </span>
              </div>

              {/* Dropdown details */}
              {activeMember === member.LinkedIn && (
                <div className="mt-2 p-2 bg-gray-700 rounded-lg">
                  <p>Domain: {member.domain}</p>
                  <p>
                    GitHub:{" "}
                    <a
                      href={member.gitHub}
                      className="text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.gitHub}
                    </a>
                  </p>
                  <p>
                    LinkedIn:{" "}
                    <a
                      href={member.LinkedIn}
                      className="text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.LinkedIn}
                    </a>
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          {" "}
          <h1 className="text-2xl font-semibold">Project</h1>About the
          project....
        </div>
      </div>
    </div>
  );
}
