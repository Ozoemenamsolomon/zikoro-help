import {
  HelpEvents,
  HelpCreds,
  HelpBooks,
  HelpEngs,
  HelpArrowIcon,
} from "@/constants/icons";
import Link from "next/link";

export default function HelpBody() {
  const sections = [
    {
      icon: <HelpEvents />,
      tile: "Zikoro Events",
      desc: "Plan, manage, and run unforgettable events.",
      linkText: "Go to Events Help Center",
      link: "/events",
      PopTop1: "Popular topic 1",
      PopTop2: "Popular topic 2",
      PopTop3: "Popular topic 3",
    },

    {
      icon: <HelpCreds />,
      tile: "Zikoro Credentials",
      desc: "Design, issue, and manage digital certificates and badges.",
      linkText: "Go to Credentials Help Center",
      link: "/credentials",
      PopTop1: "Popular topic 1",
      PopTop2: "Popular topic 2",
      PopTop3: "Popular topic 3",
    },

    {
      icon: <HelpBooks />,
      tile: "Zikoro Bookings",
      desc: "Streamline scheduling for you and your team.",
      linkText: "Go to Bookings Help Center",
      link: "/credentials",
      PopTop1: "Popular topic 1",
      PopTop2: "Popular topic 2",
      PopTop3: "Popular topic 3",
    },

    {
      icon: <HelpEngs />,
      tile: "Zikoro Engagement",
      desc: "Drive interaction and audience participation.",
      linkText: "Go to Engagement Help Center",
      link: "/engagements",
      PopTop1: "Popular topic 1",
      PopTop2: "Popular topic 2",
      PopTop3: "Popular topic 3",
    },
  ];
  return (
    <div className="bg-[#001FCC19]">
      <div className="flex items-center max-w-full lg:max-w-[980px] xl:max-w-[1300px] py-3 px-3 md:px-6 lg:px-[36px] justify-center mx-auto pt-[32px] pb-[61px]">
        <div>
          <p className="text-center text-xl font-medium leading-[100%] text-[#31353B]">
            Explore our suite of products and find answers, tutorials, and
            support <br className="hidden lg:block" /> tailored to your needs.
          </p>

          <div className="mt-[52px] grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-[10px] py-[15px] px-5 w-full md:w-full">
                <> {section.icon} </>
                <p className="text-2xl font-semibold mt-6 text-[#31353B]">
                  {section.tile}
                </p>
                <p className="mt-2 text-base text-[#555555] font-medium">
                  {section.desc}
                </p>

                <Link href={section.link} className="flex gap-x-3 mt-6 items-center cursor-pointer ">
                  <p className="text-indigo-700 text-base font-medium decoration-indigo-700 underline">
                    {section.linkText}
                  </p>
                  <HelpArrowIcon />
                </Link>

                <ul className="font-[#31353B] list-disc text-base font-semibold mt-5 ]">
                  Popular topics
                </ul>
                <li className="text-base underline font-medium mt-1 text-[#555555] cursor-pointer">
                  {section.PopTop1}
                </li>
                <li className="text-base underline font-medium mt-1 text-[#555555] cursor-pointer">
                  {section.PopTop2}
                </li>
                <li className="text-base  underline font-medium mt-1 text-[#555555] cursor-pointer">
                  {section.PopTop3}
                </li>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
