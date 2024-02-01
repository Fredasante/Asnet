"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const tabs = [
  {
    name: "Marketing",
    title: "Meet campaign goals",
    feature1: "Drive clarity to focus on shifting business needs",
    feature2: "Maximize launch results.",
    feature3: "Automate and scale processes for approvals",
    image: "/images/marketing.webp",
    buttonTitle: "Explore Marketing",
  },

  {
    name: "Operations",
    title: "Drive operational efficiency",
    feature1: "Track work and see progress in real time",
    feature2: "Standardize and automate processes",
    feature3: "Unblock teams to hit revenue goals",
    image: "/images/operations.webp",
    buttonTitle: "Explore Operations",
  },
  {
    name: "IT",
    title: "Automate and streamline IT requests",
    feature1: "Onboard and offboard employees more efficiently",
    feature2: "Get more control for critical security needs",
    feature3: "Automate and scale processes for approvals",
    image: "/images/technology.webp",
    buttonTitle: "Explore IT",
  },
  {
    name: "Product",
    title: "Manage projects more efficiently",
    feature1: "Track work and see progress in real time",
    feature2: "Standardize and automate processes",
    feature3: "Track resources, goals and progress in one place",
    image: "/images/new-product.webp",
    buttonTitle: "Explore Product",
  },
  {
    name: "Comapy-wide",
    title: "Align teams to execute winning strategies",
    feature1: "Track work and see progress in real time",
    feature2: "Set annual plans to deliver results",
    feature3: "See real-time insights to stay on track and on budget",
    image: "/images/company.webp",
    buttonTitle: "See how it works",
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const setTab = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {tabs.map((tab) => (
        <button
          onClick={() => setActiveTab(tab)}
          className="px-7 py-4 border border-gray-400 mr-4 rounded-full text-gray-500 hover:text-black hover:border-black"
        >
          {tab.name}
        </button>
      ))}

      <div>
        {activeTab && (
          <div className="flex items-start gap-10 mt-10">
            <div className="relative">
              <Image
                src={activeTab.image}
                alt="product images"
                width={600}
                height={600}
              />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="mb-8 text-2xl">{activeTab.title}</h3>
              <p className="flex items-center gap-2">
                <CheckCircle color="gray" size={16} />
                {activeTab.feature1}
              </p>

              <p className="flex items-center gap-2">
                <CheckCircle color="gray" size={16} />
                {activeTab.feature2}
              </p>

              <p className="flex items-center gap-2">
                <CheckCircle color="gray" size={16} />
                {activeTab.feature3}
              </p>

              <button className="text-white font-bold bg-black px-8 py-4 w-fit mt-5 rounded-sm hover:bg-[#ff7381] hover:text-black transition-all duration-300 ease-in-out">
                {activeTab.buttonTitle}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
