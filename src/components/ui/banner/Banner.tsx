import { FaPlayCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative h-[600px] text-center border-b-2 border-[#3b4055]">
      <div className="bgShadow inset-y-20 inset-x-0"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-light px-6 space-y-6 md:w-3/5  xl:w-2/5 mx-auto">
        <h1 className="space-y-2">
          Write better <br /> content for your <br />
          <span className="bg-gradient-to-r from-[#FC6739] to-[#FFC947] bg-clip-text text-transparent underline  decoration-[#FC6739]">
            Facebook Ads
          </span>
        </h1>
        <p className="mb-6">
          Artificial intelligence writting tool helps you create blogs, <br />{" "}
          social media websites and much more.
        </p>
        <div className="flex flex-col space-y-3">
          <button className="CBtnBG">Start 14 Days Free Trial</button>
          <button className="group py-[7px] px-2 md:px-4 rounded-md text-xs md:text-lg border border-transparent text-primary-light hover:border-[#BB2BFF] bg-gradient-to-r from-[#FC6739] to-[#FFC947] bg-clip-text hover:text-transparent transition-all duration-100 flex items-center gap-2">
            <span>
              <FaPlayCircle className="text-primary-light" />
            </span>
            Watch A Demo
          </button>
        </div>
      </div>
      <div className="bgShadow right-10 bottom-0"></div>
    </div>
  );
};

export default Banner;
