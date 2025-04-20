import { HelpContactIcon } from "@/constants/icons";

export default function HelpFooter() {
  return (
    <div className="flex justify-center w-full lg:max-w-[980px] xl:max-w-[1300px] mx-auto px-3 lg:px-0 my-[50px]  lg:my-[100px]">
      <div className="">
        <p className="text-[32px] leading-[100%] text-center text-[#31353B] font-semibold">
          Need more Help ?
        </p>

        <div className="mt-2 flex items-center justify-center gap-3">
          <HelpContactIcon />
          <p className="text-indigo-700 cursor-pointer text-base font-medium decoration-indigo-700 underline">
            Contact Support
          </p>
        </div>
      </div>
    </div>
  );
}
