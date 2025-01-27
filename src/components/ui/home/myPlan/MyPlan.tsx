import { planData } from "@/constants/Constants";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";

const MyPlan = () => {
  return (
    <div className="CContainer pt-16">
      <SectionTitle
        title="Make the wise decision for your business"
        desc="Choose from our affordable 3 packages"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-16 lg:w-10/12 mx-auto">
        {planData.map((plan, i) => (
          <div
            key={i}
            className="p-7 rounded-xl shadow-md bg-[#282A37] flex flex-col"
          >
            <h5 className="mb-8">{plan.name} plan</h5>
            <p className="text-lg mt-2">
              <span className="text-5xl">${plan.price}</span> / month
            </p>
            <p className="text-sm text-primary-darkGray mt-4">
              This package is suitable for teams {plan.teamSize} people.
            </p>
            <h5 className="mb-5 mt-6">What’s included:</h5>
            <ul className="space-y-2 mb-3">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-sm">
                  - {feature}
                </li>
              ))}
            </ul>
            <button
              className={`py-2 px-2 md:px-4 rounded-md text-xs md:text-lg text-white border border-primary-dark bg-gradient-to-r 
                ${
                  i === 1
                    ? "from-[#2B59FF] to-[#BB2BFF]" // Unique hover gradient for the first plan
                    : "hover:from-[#2B59FF] hover:to-[#BB2BFF]" // Default hover gradient
                } 
                hover:border-transparent active:from-[#0035F5] active:to-[#A600F5] mt-auto`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPlan;
