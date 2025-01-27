"use client";
import { useState } from "react";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";

// Define the type for the data
type mixLandItem = {
  id: number;
  title: string;
  content: string[]; // Array of strings for content
};

const mixLandContent = [
  "Create original content that ranks for SEO",
  "Any mechanical keyboard enthusiasts in design?",
  "The More Important the Work, the More Important the Rest",
  "How to design a product that can grow itself 10x in year",
  "Any mechanical keyboard enthusiasts in design?",
];

const MixLandHelps = () => {
  const mixLandItem: mixLandItem[] = [
    { id: 1, title: "Blog Headlines", content: mixLandContent },
    { id: 2, title: "Blog Intros", content: mixLandContent },
    { id: 3, title: "Content Rewriter", content: mixLandContent },
    { id: 4, title: "Facebook Ads", content: mixLandContent },
    { id: 5, title: "PAS Formula", content: mixLandContent },
  ];

  // Set the default selected data to the first item
  const [selectedData, setSelectedData] = useState<mixLandItem | null>(
    mixLandItem[0]
  );

  const handleClick = (id: number) => {
    const item = mixLandItem.find((dataItem) => dataItem.id === id);
    setSelectedData(item ?? null); // If no item found, set to null
  };

  return (
    <div className="CContainer py-16 relative">
      <SectionTitle title="Mixland helps you build beautiful websites" />
      <div className="md:flex py-8 gap-8 md:w-10/12 lg:w-8/12 mx-auto space-y-4 md:space-y-0">
        {/* Left side: List */}
        <div className="md:w-1/3">
          <ul className="space-y-0 md:space-y-2 flex flex-row md:flex-col gap-1 items-start justify-center">
            {mixLandItem.map((item) => (
              <li
                key={item.id}
                className={`md:px-4 px-2 py-1 md:py-2 w-full border text-xs md:text-lg cursor-pointer rounded-lg bg-gradient-to-r hover:from-[#2B59FF] hover:to-[#BB2BFF] hover:text-white hover:border-transparent active:from-[#0035F5] active:to-[#A600F5] ${
                  selectedData?.id === item.id
                    ? "from-[#2B59FF] to-[#BB2BFF] text-white border-transparent"
                    : "border-[#282A37]"
                }`}
                onClick={() => handleClick(item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side: Content */}
        <div className="md:w-2/3 p-6 rounded-lg shadow-lg bg-[#313342]">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <div className="w-4 h-4 rounded-full bg-[#FABB18]"></div>
            <div className="w-4 h-4 rounded-full bg-[#45C646]"></div>
          </div>
          {selectedData ? (
            <>
              <h4 className="my-4">{selectedData.title}</h4>
              <div className="space-y-5">
                {selectedData.content.map((c, i) => (
                  <>
                    <hr className="border-[#282A37]" />
                    <p key={i} className="">
                      {c}
                    </p>
                  </>
                ))}
              </div>
            </>
          ) : (
            <p className="">Please select an item to view the data.</p>
          )}
        </div>
      </div>
      <div className="bgShadow right-1/3 bottom-0"></div>
    </div>
  );
};

export default MixLandHelps;
