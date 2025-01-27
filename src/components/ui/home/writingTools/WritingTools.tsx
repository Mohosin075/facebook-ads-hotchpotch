import { writingTools } from "@/constants/Constants";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import Image from "next/image";

const WritingTools = () => {
  return (
    <div className="CContainer">
      <SectionTitle
        title="54 exciting writing tools"
        desc="AI engines take information from various sources and read them like a human would do."
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 py-16  mx-auto">
        {writingTools.slice(0,8).map((item, i) => (
          <div
            key={i}
            className="p-3 rounded-xl shadow-md bg-[#282A37] flex gap-3"
          >
            <Image
              width={100}
              height={100}
              alt="logo"
              className="object-cover w-12 h-12 rounded-full"
              src={item.image}
            />

            <div>
                <h6 className="text-primary-light">{item.title}</h6>
                <h6 className="text-xs leading-0">{item.details.slice(0,50)}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WritingTools;
