const ClearAuthenticWriting = () => {
  return (
    <div className="CContainer relative flex flex-col-reverse lg:flex-row-reverse justify-between gap-10 pb-20">
      {/* <div className="bgShadow left-1/3 top-1/3"></div> */}

      <div className=" bg-white p-4 md:p-8 flex justify-between gap-4 rounded-lg lg:w-1/2">
        <div className="w-3/12 flex flex-col space-y-2">
          <span className="text-sm md:text-lg">Blog Outline</span>
          <span className="text-sm md:text-lg">Blog Intro</span>
          <span className="text-sm md:text-lg">Blog Conclusion</span>
          <span className="text-sm md:text-lg">AIDA</span>
          <span className="text-sm md:text-lg">PAS</span>
          <span className="text-sm md:text-lg">Content Rewriter</span>
          <div className="h-2 w-10/12 bg-[#E1E3E8] rounded-lg"></div>
          <div className="h-2 w-8/12 bg-[#E1E3E8] rounded-lg"></div>
          <div className="h-2 w-6/12 bg-[#E1E3E8] rounded-lg"></div>
          <div className="h-2 w-9/12 bg-[#E1E3E8] rounded-lg"></div>
          <div className="h-2 w-4/12 bg-[#E1E3E8] rounded-lg"></div>
        </div>
        <div className="flex flex-col w-7/12  space-y-3  mb-16">
          <span className="text-xl text-[#12141D]">Results</span>
          <span className="text-[#818488]">
            Heres what our AI came up with.
          </span>
          <div className="space-y-2">
            <div className="space-y-2  bg-[#12141D] p-4 rounded-xl">
              <div className="h-2 w-4/12 bg-gray-600 rounded-lg"></div>
              <div className="h-2 w-10/12 bg-gray-600 rounded-lg"></div>
              <div className="h-2 w-8/12 bg-gray-600 rounded-lg"></div>
              <div className="h-2 w-6/12 bg-gray-600 rounded-lg"></div>
            </div>
            <div className="space-y-2  p-4 rounded-xl bg-gray-100">
              <div className="h-2 w-4/12 bg-[#E1E3E8] rounded-lg"></div>
              <div className="h-2 w-10/12 bg-[#E1E3E8] rounded-lg"></div>
              <div className="h-2 w-8/12 bg-[#E1E3E8] rounded-lg"></div>
              <div className="h-2 w-6/12 bg-[#E1E3E8] rounded-lg"></div>
            </div>
            <div className="space-y-2  p-4 rounded-xl bg-gray-100">
              <div className="h-2 w-4/12 bg-[#E1E3E8] rounded-lg"></div>
              <div className="h-2 w-10/12 bg-[#E1E3E8] rounded-lg"></div>
              <div className="h-2 w-8/12 bg-[#E1E3E8] rounded-lg"></div>
              <div className="h-2 w-6/12 bg-[#E1E3E8] rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2  space-y-4 lg:space-y-8">
        <h2>
          Write what you want to convey through clear, & authentic writing
        </h2>
        <p>
          AI-Writer is the most accurate content generation platform and writing
          tool that helps you transform your text into a completely
          personalized.
        </p>
        <button className="CBtnBG">Start 14 Days Free Trial</button>
      </div>
    </div>
  );
};

export default ClearAuthenticWriting;
