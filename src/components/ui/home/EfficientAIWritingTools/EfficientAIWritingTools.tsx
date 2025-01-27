const EfficientAIWritingTools = () => {
  return (
    <div className="CContainer relative flex flex-col-reverse lg:flex-row justify-between gap-10 py-16">
      <div className="bgShadow left-1/3 top-1/3"></div>

      <div className="lg:w-6/12 xl:w-4/12 relative bg-white flex flex-col pt-5 px-8 space-y-3 rounded-lg mb-16">
        <div className="hidden lg:block w-80 h-30 bg-white absolute bottom-20 lg:-right-5 xl:-right-20 p-4 rounded-xl">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <div className="w-4 h-4 rounded-full bg-[#FABB18]"></div>
            <div className="w-4 h-4 rounded-full bg-[#45C646]"></div>
          </div>
          <div className="space-y-2 mt-6">
            <div className="h-3 w-4/12 bg-[#2B59FF] rounded-lg"></div>
            <div className="h-3 w-10/12 bg-[#E1E3E8] rounded-lg"></div>
            <div className="h-3 w-8/12 bg-[#E1E3E8] rounded-lg"></div>
            <div className="h-3 w-6/12 bg-[#E1E3E8] rounded-lg"></div>
          </div>
        </div>
        <span className="text-xl text-[#12141D]">Results</span>
        <span className="text-[#818488]">Heres what our AI came up with.</span>
        <div className="bg-gray-100 p-3 rounded-md text-[#12141D] flex flex-col gap-3 text-justify">
          <span>
            Pain: You are an e-commerce business, and you want to sell your
            products all over the country, but you are confused about how to
            handle sales tax.
          </span>
          <span>
            Pain: You are an e-commerce business, and you want to sell your
            products all over the country
          </span>
        </div>
        <div className="bg-gray-100 p-3 rounded-md text-[#12141D] flex flex-col gap-3 text-justify">
          <span>
            Pain: You are an e-commerce business, and you want to sell your
            products all over the country, but you are confused about how to
            handle sales tax.
          </span>
          <span>Pain: You are an e-commerce business</span>
        </div>
      </div>

      <div className="w-10/12 lg:w-6/12  space-y-4 lg:space-y-8">
        <h2>
          Create content efficiently and quickly with great AI writing tools
        </h2>
        <p>
          150k+ users. No Credit Card Required. Pro designs and writing at no
          cost. Start for free. Ai Writer Tool | Generate text for ecom, social
          media, website, sales, blogs etc.
        </p>
        <button className="CBtnBG">Start 14 Days Free Trial</button>
      </div>
    </div>
  );
};

export default EfficientAIWritingTools;
