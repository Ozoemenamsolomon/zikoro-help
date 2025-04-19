export default function Hero() {
  return (
    <div className="flex justify-center w-full lg:max-w-[980px] xl:max-w-[1300px] mx-auto px-3 lg:px-0 my-[50px]  lg:my-[80px]">
      <div className="text-center">
        <p className="text-[32px] leading-[100%] text-[#31353B] font-semibold">
          Welcome to the <span className="bg-gradient-to-tr from-custom-gradient-start to-custom-gradient-end gradient-text"> Zikoro Help Center </span>{" "}
        </p>
        <p className="text-[18px] mt-3 leading-[100%] text-[#555555] font-medium">Your go-to guide for everything Zikoro.</p>
      </div>
    </div>
  );
}
