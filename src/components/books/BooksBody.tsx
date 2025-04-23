"use client";
import { HelpMainTabIcon, HelpNoteCountIcon } from "@/constants/icons";
import Link from "next/link";
import { useState } from "react";

export default function BooksBody() {
  const sections = [
    {
      tile: "Category 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
      totalNo: 6,
    },

    {
      tile: "Category 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
      totalNo: 36,
    },

    {
      tile: "Category 3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
      totalNo: 46,
    },

    {
      tile: "Category 4",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
      totalNo: 66,
    },

    {
      tile: "Category 5",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
      totalNo: 68,
    },
  ];

  const [tab, setTab] = useState<boolean>(true);
  const [subTab, setSubTab] = useState<boolean>(false);

  return (
    <div className="bg-[#001FCC19]">
      <div className="flex  max-w-full lg:max-w-[980px] xl:max-w-[1300px] justify-center mx-auto ">
        {/* left */}
        <div className=" hidden lg:block w-[20%] relative">
          {/* tab Icon */}
          <div
            className="absolute mt-[35px] -right-2 cursor-pointer"
            onClick={() => setTab(!tab)}
          >
            <HelpMainTabIcon />
          </div>
          {/* categories list and heading */}
          {tab && (
            <div className="absolute mt-[100px]   pr-6 ">
              {/* top */}
              <div>
                <p className="text-base leading-[100%] font-semibold">
                  Categories
                </p>
                <p className="mt-1 text-[14px] font-medium">
                  Select a category to learn how to better your events with
                  Zikoro events.
                </p>
              </div>
              {/* bottom */}
              <div></div>
            </div>
          )}
        </div>

        {/* right */}
        <div className="border-l-[0px] lg:border-l-[1px] border-l-gray-300 w-full lg:w-[80%] px-3 lg:px-[32px] py-10 lg:py-[93px]">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section) => (
              <div
                key={section.totalNo}
                className="bg-white rounded-[10px] p-3 text-center "
              >
                <p className="text-xl font-semibold">{section.tile}</p>
                <p className="text-[14px] font-medium">{section.desc}</p>

                <div className="mt-6 flex gap-x-1 items-center justify-center">
                  <HelpNoteCountIcon />
                  <p className="text-[12px] font-medium">
                    {section.totalNo} Articles
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
