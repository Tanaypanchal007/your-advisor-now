"use client";

import React, { useState } from "react";
import {
  FaBuilding,
  FaStore,
  FaUtensils,
  FaCarSide,
  FaChartLine,
} from "react-icons/fa";

export default function Industries() {
  const tabs = [
    {
      id: 1,
      title: "Corporate Accounting",
      icon: <FaBuilding size={22} />,
      content:
        "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, possimus minima doloribus asperiores fugit repellendus excepturi, nisi, illo reprehenderit at optio veritatis incidunt odit porro omnis voluptate explicabo expedita unde? Minus id repellat quas, nesciunt quisquam sunt dolor vel similique.",
    },
    {
      id: 2,
      title: "Franchise Accounting",
      icon: <FaStore size={22} />,
      content:
        "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, possimus minima doloribus asperiores fugit repellendus excepturi, nisi, illo reprehenderit at optio veritatis incidunt odit porro omnis voluptate explicabo expedita unde? Minus id repellat quas, nesciunt quisquam sunt dolor vel similique.",
    },
    {
      id: 3,
      title: "Property Management Accounting",
      icon: <FaChartLine size={22} />,
      content:
        "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, possimus minima doloribus asperiores fugit repellendus excepturi, nisi, illo reprehenderit at optio veritatis incidunt odit porro omnis voluptate explicabo expedita unde? Minus id repellat quas, nesciunt quisquam sunt dolor vel similique.",
    },
    {
      id: 4,
      title: "Restaurant Accounting",
      icon: <FaUtensils size={22} />,
      content:
        "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, possimus minima doloribus asperiores fugit repellendus excepturi, nisi, illo reprehenderit at optio veritatis incidunt odit porro omnis voluptate explicabo expedita unde? Minus id repellat quas, nesciunt quisquam sunt dolor vel similique.",
    },

    {
      id: 5,
      title: "Auto Store Accounting",
      icon: <FaCarSide size={22} />,
      content:
        "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, possimus minima doloribus asperiores fugit repellendus excepturi, nisi, illo reprehenderit at optio veritatis incidunt odit porro omnis voluptate explicabo expedita unde? Minus id repellat quas, nesciunt quisquam sunt dolor vel similique.",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="min-h-screen  px-6 bg-primary">
      <div className="mt-16 text-center pt-5">
        <h1 className="text-2xl font-bold inline-block relative text-secondary">
          Industries We Work For
          <span className="block h-0.5 w-28 bg-secondary mx-auto mt-1"></span>
        </h1>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-4 gap-8 py-12">
        {/* LEFT SIDE MENU */}
        <div className="shadow-3xl rounded-xl bg-bg-primary p-4">
          <h2 className="text-xl font-semibold text-secondary mb-4">
            Industries
          </h2>

          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              onClick={() => setActive(index)}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer mb-2 transition-all
                ${
                  active === index
                    ? "bg-primary shadow-md border-l-4 border-secondary"
                    : "hover:bg-primary"
                }
              `}
            >
              <span
                className={
                  active === index ? "text-secondary" : "text-gray-500"
                }
              >
                {tab.icon}
              </span>

              <p
                className={`font-medium ${
                  active === index ? "text-secondary" : "text-gray-700"
                }`}
              >
                {tab.title}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="xl:col-span-3 bg-bg-primary p-8 rounded-xl shadow-3xl">
          <h1 className="text-3xl font-bold text-secondary mb-4">
            {tabs[active].title}
          </h1>

          <p className="text-gray-700 text-lg">{tabs[active].content}</p>
        </div>
      </div>
    </section>
  );
}
