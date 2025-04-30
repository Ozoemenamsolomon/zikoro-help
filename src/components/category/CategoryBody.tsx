"use client";
import {
  CategoryNote,
  HelpMainTabIcon,
  HelpNoteCountIcon,
} from "@/constants/icons";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "styled-icons/boxicons-regular";
import { GreaterThan } from "styled-icons/fa-solid";

export default function CategoryBody() {
  const [tab, setTab] = useState<boolean>(true);
  const [subTab, setSubTab] = useState<boolean>(false);
  const categories = ["title", "title", "title", "title", "title", "title"];

  return (
    <div className="bg-[#001FCC19]">
      <div className="flex  max-w-full lg:max-w-[980px] xl:max-w-[1300px] justify-center mx-auto ">
        {/* left */}
        <div
          className={`hidden lg:block  relative ${tab ? "w-[20%]" : "w-[5%]"}`}
        >
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
              <div className="mt-6">
                <div className="flex justify-between items-center">
                  <p className="text-[14px] font-semibold">Category 1</p>
                  {subTab ? (
                    <ChevronUp
                      className="font-bold cursor-pointer"
                      size={20}
                      onClick={() => setSubTab(!subTab)}
                    />
                  ) : (
                    <ChevronDown
                      className="font-bold cursor-pointer"
                      size={20}
                      onClick={() => setSubTab(!subTab)}
                    />
                  )}
                </div>

                {subTab && (
                  <ul className="mt-2 flex flex-col gap-y-1">
                    <li className=" pl-1 text-[14px] font-medium list-disc list-inside">
                      Title 1
                    </li>
                    <li className=" pl-1 text-[14px] font-medium list-disc list-inside">
                      Title 2
                    </li>
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>

        {/* right */}
        <div className="border-l-[0px] lg:border-l-[1px] border-l-gray-300 w-full lg:w-[80%] px-3 lg:px-[32px] pb-10  mt-[35px] lg:pb-[93px] relative">
          {/* top */}
          <div className="absolute flex items-center gap-x-1 ">
            <p className="text-[#555555] font-semibold text-opacity-50 text-[14px]">
              Help center <GreaterThan size={14} />
            </p>
            <p className="text-[#555555] font-semibold text-[14px] text-opacity-100">
              {" "}
              Category
            </p>
          </div>

          {/* mid */}
          <div className="mt-12">
            <p className="text-2xl font-semibold">Category</p>

            <p className="text-[14px] mt-2 font-medium text-[#555555]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et{" "}
            </p>
          </div>

          {/* bottom */}
          <div className="mt-8">
            <p className="text-[14px] mt-2 font-semibold text-[#31353B]">
              Articles in this category
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-[60px] gap-y-8 ">
              {categories.map((category, index) => (
                <Link href="/category/article">
                  <div
                    key={index}
                    className="flex capitalize gap-x-2 items-center"
                  >
                    <CategoryNote />
                    <p className="font-semibold">{category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
