"use client";
import AboutContent from "@/components/AboutContent";
import CoachesContect from "@/components/CoachesContect";
import MissionContent from "@/components/MissionContent";
import VisionContent from "@/components/VisionContent";
import Image from "next/image";
import { useState } from "react";
const TABS = ["About Us", "Coaches", "Vision", "Mission"];
function Test() {
  const [activeTab, setActiveTab] = useState("About Us");
  return (
    <section className="py-16 overflow-hidden lg:py-20 relative">
      <div className="container relative z-10 px-5 mx-auto">
        <div className="text-center max-w-2xl mx-auto text-xl">
          To be the first venue in the world to have{" "}
          <span className="font-semibold text-primary">
            60 multi surface courts
          </span>{" "}
          at one location and establish first one stop tennis academy in the
          Asia Pacific producing grand slam champions.
        </div>
        <div className="my-16 flex flex-wrap justify-center gap-6 sm:gap-10">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative cursor-pointer  pb-2 text-sm sm:text-lg font-medium transition
                  ${
                    isActive
                      ? "text-black after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-lime-600"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                aria-selected={isActive}
                role="tab"
              >
                {tab}
              </button>
            );
          })}
        </div>
        <div className="">
          {activeTab === "About Us" && <AboutContent />}
          {activeTab === "Coaches" && <CoachesContect />}
          {activeTab === "Vision" && <VisionContent />}
          {activeTab === "Mission" && <MissionContent />}
        </div>
      </div>

      <div className="hidden sm:block sm:absolute top-0 left-0  h-60 w-60 lg:h-80 lg:w-80 relative">
        <Image
          src="/images/about/about-graphics.png"
          alt="Decorative graphics"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 15vw, 12vw"
        />
      </div>
    </section>
  );
}

export default Test;
