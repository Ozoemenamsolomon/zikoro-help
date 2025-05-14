"use client";
import Article from "@/components/article/Article";
import { HelpNote, HelpRightArrow } from "@/constants/icons";
import Link from "next/link";

export default function CredTeam() {
  const infos = [
    {
      title: "Title",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      date: 2,
    },

    {
      title: "Title",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      date: 2,
    },

    {
      title: "Title",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      date: 2,
    },
  ];
  return (
    <div className="bg-white">
      <div className="flex justify-center max-w-full lg:max-w-[750px] mx-auto px-3 lg:px-0">
        <div className="mt-[52px] mb-[100px]">
          {/* top */}
          <div>
            <div className="flex items-center text-[14px] text-[#555555] gap-x-1">
              <Link
                href="/"
                className="cursor-pointer flex items-center gap-x-1"
              >
                {" "}
                Home <HelpRightArrow />{" "}
              </Link>

              <Link
                href="/credentials"
                className="cursor-pointer flex items-center gap-x-1"
              >
                {" "}
                Zikoro Credentials <HelpRightArrow />{" "}
              </Link>
            </div>
            <p className="font-semibold text-[#31353B] text-lg gap-x-1">
              Managing Teams On Credentials{" "}
            </p>
          </div>
          {/* bottom */}
          <div className="grid grid-cols-1 gap-3 mt-8">
            {infos.map((data) => (
              <Link href="/events">
                <Article title={data.title} desc={data.desc} date={data.date} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
