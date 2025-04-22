import { CategoryNote } from "@/constants/icons";

export default function HeroEvent() {
  const categories = ["title", "title", "title", "title", "title", "title"];
  return (
    <div className=" my-[50px] lg:my-[80px]">
      <div>
        <div className="text-center max-w-full">
          <p className="text-[32px] leading-[100%] text-[#31353B] font-semibold">
            Welcome to the{" "}
            <span className="bg-gradient-to-tr from-custom-gradient-start to-custom-gradient-end gradient-text">
              {" "}
              Zikoro Events Help Center{" "}
            </span>{" "}
          </p>
          <p className="text-[18px] mt-3 leading-[100%] text-[#555555] font-medium">
            Your go-to guide to plan, manage, and run unforgettable events. 
          </p>
        </div>

        {/* bottom */}

        <div className="mt-[80px]">
          <p>Popular topics</p>

          <div className="mt-6 grid grid-cols-2 gap-x-[60px] gap-y-8 lg:gap-x-[120px] ">
              {
                categories.map((category, index) => (
                  <div className="flex gap-x-2 items-center w-[50%]">
                      <CategoryNote/>
                      <p>{category + index }</p>
                  </div>
                ))
              }
          </div>
        </div>
      </div>
    </div>
  );
}
