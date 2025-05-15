"use client";

import {
  EngIssues,
  EngLive,
  EngCustomize,
  EngManage,
  HelpRightArrow,
  HelpNote,
} from "@/constants/icons";
import Link from "next/link";

export default function EngBody() {
  const categories = [
    {
      icon: <EngLive />,
      title: "Creating Live Interactions",
      articlesNo: 6,
      link: "/engagements/live",
    },
    {
      icon: <EngCustomize />,
      title: "Customizing Your Engagement",
      articlesNo: 6,
      link: "/engagements/customize",
    },
    {
      icon: <EngManage />,
      title: "Managing Live Sessions",
      articlesNo: 6,
      link: "/engagements/manage",
    },
    {
      icon: <EngIssues />,
      title: "Common Issues and Fixes",
      articlesNo: 6,
      link: "/engagements/issues",
    },
  ];
  return (
    <div className="bg-white min-h-screen">
      <div className="flex justify-center mx-auto text-[#31353B]">
        <div className="mt-[52px] mb-[100px]">
          {/* top */}
          <div>
            <Link
              href="/"
              className="flex items-center text-[14px] text-[#555555] gap-x-1 cursor-pointer"
            >
              Home <HelpRightArrow />{" "}
            </Link>
            <p className="font-semibold text-[#31353B] text-lg">
              Zikoro Engagements
            </p>
            <p className="text-base font-semibold text-[#555555]">
              {" "}
              Managing Engagements All Around{" "}
            </p>
          </div>
          {/* bottom */}
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 mt-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className=" rounded-[10px] w-full lg:w-[360px] flex justify-center py-[34px] border-[1px] border-[#EAEAEA]"
              >
                <Link href={category.link}>
                  <div className="flex justify-center mx-auto">
                    <>{category.icon}</>
                  </div>
                  <p className="text-center text-[20px] px-[2px] font-semibold mt-4">
                    {category.title}
                  </p>

                  <div className="flex justify-center gap-x-5 mt-[46px]">
                    <div className="flex gap-x-1 items-center text-[12px] font-medium">
                      <HelpNote />
                      <div className="flex gap-x-1">
                        {category.articlesNo}
                        <p>Articles</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
