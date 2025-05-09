"use client";

import {
  ZikoroEvent,
  ZikoroCred,
  ZikoroBookings,
  ZikoroEngage,
  HelpBilling,
  HelpSettings,
  HelpFolder,
  HelpNote,
} from "@/constants/icons";
import Link from "next/link";

export default function HelpBody() {
  const categories = [
    {
      icon: <ZikoroEvent />,
      title: "Zikoro Events",
      desc: "Hosting and managing your events",
      categoriesNo: 7,
      articlesNo: 6,
      link: "/events",
    },
    {
      icon: <ZikoroEngage />,
      title: "Zikoro Engagements",
      desc: "Hosting and managing your events",
      categoriesNo: 7,
      articlesNo: 6,
      link: "/engagements",
    },
    {
      icon: <ZikoroCred />,
      title: "Zikoro Credentials",
      desc: "Hosting and managing your events",
      categoriesNo: 7,
      articlesNo: 6,
      link: "/credentials",
    },
    {
      icon: <ZikoroBookings />,
      title: "Zikoro Bookings",
      desc: "Hosting and managing your events",
      categoriesNo: 7,
      articlesNo: 6,
      link: "/bookings",
    },

    {
      icon: <HelpBilling />,
      title: "Billing & Subscription",
      categoriesNo: 7,
      articlesNo: 6,
      link: "/billings",
    },

    {
      icon: <HelpSettings />,
      title: "Accounts & Settings",
      categoriesNo: 7,
      articlesNo: 6,
      link: "/settings",
    },
  ];
  return (
    <div className="bg-white min-h-screen">
      <div className="flex justify-center mx-auto text-center text-[#31353B]">
        <div>
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 mt-[52px] mb-[100px]">
            {categories.map((category, index) => (
              <div
                key={index}
                className=" rounded-[10px] w-full lg:w-[360px] flex justify-center py-[34px] border-[1px] border-[#EAEAEA]"
              >
                <Link href={category.link}>
                  <div className="flex justify-center mx-auto">
                    <>{category.icon}</>
                  </div>
                  <p className="text-center text-[20px] font-semibold mt-4">
                    {category.title}
                  </p>

                  <p className="text-center font-[#555555] text-base font-medium mt-2">
                    {category?.desc}
                  </p>
                  <div className="flex justify-center gap-x-5 mt-[18px]">
                    <div className="flex gap-x-1 items-center text-[12px] font-medium">
                      <HelpFolder />
                      <div className="flex gap-x-1">
                        {category.categoriesNo}
                        <p>Categories</p>
                      </div>
                    </div>
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
