import React from "react";
import Image from "next/image";
import { RiCompassFill } from "react-icons/ri";
import { HiChartBar, HiClock, HiDotsHorizontal, HiHome } from "react-icons/hi";
import { FaMicrophoneAlt } from "react-icons/fa";


const Sidebar = () => {
  return (
    <section
      className="fixed top-0 z-40 flex flex-col p-4 items-center bg-black w-[90px] 
    h-screen space-y-8"
    >
      <Image
        alt="spotify logo"
        src="https://rb.gy/xkacau"
        width={56}
        height={56}
        className=""
      />

      <div className="flex flex-col space-y-8">
        <HiHome className="sidebarIcon text-white opacity-[0.85] text-2xl" />
        <RiCompassFill className="sidebarIcon text-2xl" />
        <FaMicrophoneAlt className="sidebarIcon ml-1" />
        <HiChartBar className="sidebarIcon text-2xl" />
        <HiClock className="sidebarIcon text-2xl" />
        <HiDotsHorizontal className="sidebarIcon text-2xl" />
      </div>
    </section>
  );
};

export default Sidebar;
