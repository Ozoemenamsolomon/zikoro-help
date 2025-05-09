"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "styled-icons/boxicons-regular";

export default function EventBody() {
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
  const [subTab, setSubTab] = useState<boolean>(true);

  return (
    <div className="bg-[#001FCC19]">
    
    </div>
  );
}
