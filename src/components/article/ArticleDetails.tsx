"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
// import { useFetchBlogPost } from "@/hooks/services/post";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Copy } from "styled-icons/fa-regular";

type DBSimilarPost = {
  id: number;
  title: string;
  created_at: string;
  category: string;
  status: string;
  statusDetails: JSON;
  readingDuration: number;
  content: JSON;
  views: number;
  shares: number;
  tags: [];
  headerImageUrl: string;
};

type DBBlogPost = {
  id: number;
  title: string;
  created_at: string;
  category: string;
  status: string;
  statusDetails: JSON;
  readingDuration: number;
  content: string;
  views: number;
  shares: number;
  tags: [];
  headerImageUrl: string;
};

export default function ArticleDetails({ postId }: { postId: number }) {
  const [similarPosts, setSimilarPosts] = useState<DBSimilarPost[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  // Extracting the date only
  function extractAndFormatDate(dateTimeString: any): any {
    try {
      const date = new Date(dateTimeString);
      if (isNaN(date.getTime())) {
        // throw new Error("Invalid date");
      }
      const formattedDate: string = formatDate(date);
      return formattedDate;
    } catch (error) {
      console.error("Error extracting date:", error);
      return "Invalid Date";
    }
  }

  //formatDate
  function formatDate(date: Date): string {
    const year: number = date.getFullYear();
    const month: number = date.getMonth() + 1; // Month is zero-based, so add 1
    const day: number = date.getDate();

    const monthNames: string[] = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const formattedDate: string = `${day} ${monthNames[month - 1]} ${year}`;
    return formattedDate;
  }

  //share functionality
  const [articleUrl] = useState<string>(
    `https://www.zikoro.com/post/${postId}`
  );

  return (
    <>
      <div>
        <div className="mt-[96px] px-3 lg:px-0 ">
          {/* header section */}

          <div className="max-w-full lg:max-w-[982px] mx-auto flex flex-col gap-y-6 lg:gap-y-10 ">
            <div className="max-w-full lg:max-w-2xl lg:mx-auto flex flex-col gap-y-2 text-center ">
              <p className="text-[#31353B] text-[12px] lg:text-[18px] font-semibold capitalize">
                Title{" "}
              </p>
              {/* date */}
              <p className="capitalize text-[14px] text-[#555555] font-medium  ">
                Added 2 days ago{" "}
              </p>
            </div>
          </div>

          {/* body section */}
          <div
            // ref={existingElement}
            className="w-full h-fit mt-[22px]"
          >
            <div className="max-w-full lg:max-w-6xl lg:mx-auto flex gap-x-0 lg:gap-x-28 mt-5 mb-10 lg:mt-8 lg:mb-24  ">
              {/* Left */}
              <div
                className={`hidden lg:inline sticky top-[120px] transform transition-all duration-200 pb-12 w-full flex-col lg:w-3/12 h-fit`}
                id="left"
              >
                {/* section links */}
                <div className="flex flex-col border-[1px] border-gray-100 rounded-lg px-3 pt-3 gap-y-4">
                  {/* Top */}
                  <p className="text-[12px] font-medium">In this article</p>
                  {/* Links */}
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
              </div>

              <div
                ref={contentRef}
                className={` w-full min-h-[50%]  flex-col  pb-0 lg:pb-[50px] blogPost ${"lg:w-9/12"}`}
                id="right"
              >
                <div
                  className="blog no-scrollbar"
                  // dangerouslySetInnerHTML={{ __html: data?.content ?? "" }}
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  distinctio explicabo sit veritatis saepe cum laborum
                  necessitatibus illum pariatur debitis. Quis laudantium ipsa
                  laboriosam nostrum animi qui, quae molestiae dicta.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  distinctio explicabo sit veritatis saepe cum laborum
                  necessitatibus illum pariatur debitis. Quis laudantium ipsa
                  laboriosam nostrum animi qui, quae molestiae dicta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
