"use client";

import {
  EventsCreate,
  EventsPromotion,
  EventsLive,
  EventsAudience,
  EventsAnalytics,
  EventsTickets,
  EventsTrouble,
  EventsFaq,
  HelpRightArrow,
  HelpNote,
} from "@/constants/icons";
import Link from "next/link";

export default function EventsBody() {
  const categories = [
    {
      icon: <EventsCreate />,
      title: "Creating an Event",
      categoriesNo: 7,
      articlesNo: 6,
      link: "/events",
    },
    {
      icon: <EventsPromotion />,
      title: "Creating an Event",
      categoriesNo: 7,
      articlesNo: 6,
      link: "/events",
    },
    {
      icon: <EventsLive />,
      title: "Creating an Event",
      categoriesNo: 7,
      articlesNo: 6,
      link: "/events",
    },
    {
      icon: <EventsAudience />,
      title: "Creating an Event",
      categoriesNo: 7,
      articlesNo: 6,
      link: "/events",
    },

    {
      icon: <EventsAnalytics />,
      title: "Creating an Event",
      categoriesNo: 7,
      articlesNo: 6,
      link: "/events",
    },

    {
      icon: <EventsTickets />,
      title: "Creating an Event",
      categoriesNo: 7,
      articlesNo: 6,
      link: "/events",
    },

    {
      icon: <EventsTrouble />,
      title: "Creating an Event",
      categoriesNo: 7,
      articlesNo: 6,
      link: "/events",
    },

    {
      icon: <EventsFaq />,
      title: "Creating an Event",
      categoriesNo: 7,
      articlesNo: 6,
      link: "/events",
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
              className="flex items-center text-[14px] text-[#555555] gap-x-1"
            >
              Home <HelpRightArrow />{" "}
            </Link>
            <p className="font-semibold text-[#31353B] text-lg">
              Zikoro Events
            </p>
            <p className="text-base font-semibold text-[#555555]">
              {" "}
              Hosting and managing your events
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
                  <p className="text-center text-[20px] font-semibold mt-4">
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
