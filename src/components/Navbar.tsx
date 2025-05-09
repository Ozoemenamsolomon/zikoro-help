"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "styled-icons/bootstrap";
import {
  HelpContactIcon2,
  NavModalIcon,
  NavModalIcon2,
  ThreeLineCircle,
  XCircle,
} from "@/constants/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const [isPreviewShowing, setIsPreviewShowing] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const topSectionHeight = 40; // Adjust this to define the "top section" height
      if (window.scrollY > topSectionHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        previewRef.current &&
        !previewRef.current.contains(event.target as Node)
      ) {
        setIsPreviewShowing(false);
      }
    };

    // Trigger handleScroll on scroll and when the browser regains focus
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        handleScroll(); // Re-check scroll position
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("mousedown", handleClickOutside);

    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="py-6 px-3 md:px-6 relative ">
      <div
        className={`flex items-center lg:max-w-[980px] xl:max-w-[1300px] py-3 px-3 md:px-6 lg:px-[36px] rounded-[64px] justify-between mx-auto ${
          isScrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="flex gap-x-2 lg:gap-x-6 items-center">
          <Image
            src="/logo.png"
            width={115}
            height={40}
            alt=""
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
          <div className="px-2 lg:px-6 border-l-[1px]">
            <p className="text-[#31353B] cursor-pointer text-base font-medium  ">
              Help Center
            </p>
          </div>
        </div>

        <div className="  hidden lg:flex gap-x-4 p-3 ">
          <SigninBtn />
          <div className="mt-2 flex items-center justify-center gap-3">
            <HelpContactIcon2 />
            <p className="text-[#31353B] cursor-pointer text-base font-medium ">
              Contact Support
            </p>
          </div>{" "}
        </div>

        <div className="lg:hidden">
          <button className="text-black" onClick={toggleMenu}>
            {isOpen ? <XCircle /> : <ThreeLineCircle />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="bg-violet-100 flex-col absolute p-[30px] mt-3 w-full max-w-[92%] lg:hidden rounded-[8px] z-10">
          <div className=" flex flex-col gap-4 p-3  items-center w-fit mx-auto ">
            <SigninBtn />
            <div className="mt-2 flex items-center justify-center gap-3">
              <HelpContactIcon2 />
              <p className="text-[#31353B] cursor-pointer text-base font-medium ">
                Contact Support
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

const SigninBtn = () => {
  return (
    <Link
      href={"/login"}
      className="text-base px-[20px] py-[10px] text-white bg-gradient-to-tr from-custom-gradient-start to-custom-gradient-end rounded-[28px]"
    >
      Login
    </Link>
  );
};
