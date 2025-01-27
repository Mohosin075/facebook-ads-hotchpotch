import {
  companyList,
  helpList,
  linkList,
  ResourcesList,
} from "@/constants/Constants";
import FooterLIst from "./FooterLIst";

const Footer = () => {
  return (
    <div className="CContainer">
      <div className="lg:flex justify-between items-center space-y-2 lg:space-y-0 bgGradient py-6 px-8 rounded-md">
        <h2 className="lg:w-2/3 leading-tight">
          It will help you improve your writing & bring ideas more c learly.
        </h2>
        <button className="CBtn bg-white text-black">
          Start 14 Days Free Trial
        </button>
      </div>
      <div className="py-20 flex justify-between items-start flex-wrap gap-6">
        <FooterLIst lists={companyList} title="Company" />
        <FooterLIst lists={helpList} title="Help" />
        <FooterLIst lists={ResourcesList} title="Resources" />
        <FooterLIst lists={linkList} title="Links" />
      </div>
    </div>
  );
};

export default Footer;
