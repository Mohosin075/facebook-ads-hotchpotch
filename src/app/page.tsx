import Banner from "@/components/ui/banner/Banner";
import ClearAuthenticWriting from "@/components/ui/home/ClearAuthenticWriting/ClearAuthenticWriting";
import CustomerSays from "@/components/ui/home/customarSays/CustomerSays";
import EfficientAIWritingTools from "@/components/ui/home/EfficientAIWritingTools/EfficientAIWritingTools";
import MixLandHelps from "@/components/ui/home/mixLandHelps/MixLandHelps";
import MyPlan from "@/components/ui/home/myPlan/MyPlan";
import PayingCustomer from "@/components/ui/home/payingCustomer/PayingCustomer";
import WritingTools from "@/components/ui/home/writingTools/WritingTools";

const Home = () => {
  return (
    <div>
      <Banner />
      <PayingCustomer />
      <EfficientAIWritingTools />
      <ClearAuthenticWriting />
      <WritingTools />
      <MixLandHelps />
      <CustomerSays />
      <MyPlan />
    </div>
  );
};

export default Home;
