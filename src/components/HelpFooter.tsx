import { HelpContactIcon } from "@/constants/icons";

export default function HelpFooter() {
  return (
    <div className="bg-[#F7F8FF] py-[100px]">
      <div className="flex justify-center w-full max-w-full mx-auto px-3 lg:px-0 ">
        <div className="">
          <p className=" text-[20px] lg:text-[32px] leading-[100%] text-center text-[#31353B] font-semibold">
            Need more Help ?
          </p>

          <div className="mt-2 flex items-center justify-center gap-3">
            <HelpContactIcon />
            <p className="text-[#001FCC] cursor-pointer text-[14px] lg:text-base font-medium ">
              Contact Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
