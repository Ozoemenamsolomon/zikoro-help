"use client";
import { HelpNote } from "@/constants/icons";
import { useRouter } from "next/navigation";

type PropParameter = {
  title: string;
  desc: string;
  date: number;
  
};

const readArticle = () => {
  window.open('/article/1', '_blank')
}
export default function Article({ title, desc, date }: PropParameter) {
  const router = useRouter()
  return (
    <div onClick={readArticle} className="bg-[#F7F8FF] p-3 w-full lg:w-[754px] rounded-lg  border-[1px] border-[#EAEAEA] cursor-pointer">
      <div className="flex gap-x-2">
        <div className="mt-1">
          <HelpNote />
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-base font-semibold text-[#31353B]">{title}</p>
          <p className="truncate  w-[355px] lg:w-[696px] text-[14px] text-[#555555]">
            {desc}
          </p>
          <p className="text-[12px] font-medium text-[#555555]">
            Added {date} days ago
          </p>
        </div>
      </div>
    </div>
  );
}
