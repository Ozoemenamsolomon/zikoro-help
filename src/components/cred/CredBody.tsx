"use client";

import {
  CredentialGetStarted,
  CredentialDesign,
  CredentialShare,
  CredentialSettings,
  CredentialTeam,
  CredentialVerify,
  CredentialTroubleshoot,
  CredentialFaq,
  HelpRightArrow,
  HelpNote,
} from "@/constants/icons";
import Link from "next/link";

export default function CredentialBody() {
  const categories = [
    {
      icon: <CredentialGetStarted/>,
      title: "Getting Started with Credentials",
      articlesNo: 6,
      link: "/credentials/start",
    },
    {
      icon: <CredentialDesign/>,
      title: "Designing Certificates & Badges",
      articlesNo: 6,
      link: "/credentials/design",
    },
    {
      icon: <CredentialShare />,
      title: "Issuing and Sharing Credentials",
      articlesNo: 6,
      link: "/credentials/sharing",
    },
    {
      icon: <CredentialSettings/>,
      title: "Credential Settings",
      articlesNo: 6,
      link: "/credentials/settings",
    },

    {
      icon: <CredentialTeam/>,
      title: "Team and Role Management",
      articlesNo: 6,
      link: "/credentials/team",
    },

    {
      icon: <CredentialVerify/>,
      title: "Verifying Credentials",
      articlesNo: 6,
      link: "/credentials/verify",
    },

    {
      icon: <CredentialTroubleshoot/>,
      title: "Troubleshooting",
      articlesNo: 6,
      link: "/credentials/troubleshooting",
    },

    {
      icon: <CredentialFaq/>,
      title: "FAQs",
      articlesNo: 6,
      link: "/credentials/faq",
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
              Zikoro Credential
            </p>
            <p className="text-base font-semibold text-[#555555]">
              {" "}
              Issuing certificates and badges
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
