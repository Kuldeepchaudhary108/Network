import React from "react";

export default function Event() {
  // Explicit card data for 10 cards
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
    {
      id: 4,
      title: "GDG Cloud Kochi",
      profileImage: "./public/elements/profile.png",
      members: 2290,
    },
    {
      id: 5,
      title: "GDG Cloud Kochi",
      profileImage: "./public/elements/profile.png",
      members: 2290,
    },
    {
      id: 6,
      title: "GDG Cloud Kochi",
      profileImage: "./public/elements/profile.png",
      members: 2290,
    },
    {
      id: 7,
      title: "GDG Cloud Kochi",
      profileImage: "./public/elements/profile.png",
      members: 2290,
    },
    {
      id: 8,
      title: "GDG Cloud Kochi",
      profileImage: "./public/elements/profile.png",
      members: 2290,
    },
    {
      id: 9,
      title: "GDG Cloud Kochi",
      profileImage: "./public/elements/profile.png",
      members: 2290,
    },
    {
      id: 10,
      title: "GDG Cloud Kochi",
      profileImage: "./public/elements/profile.png",
      members: 2290,
    },
  ];

  return (
    <div className="bg-gray-300 dark:bg-gray-900 min-h-screen">
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
                <img className="h-5" src={card.profileImage} alt="Profile" />
                <p className="text-gray-700 dark:text-gray-300">
                  {card.members}
                </p>
              </div>
              <button className="bg-[#F06449] dark:bg-[#F06449] w-28 rounded-md mt-5 h-10 text-white">
                +Join
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
