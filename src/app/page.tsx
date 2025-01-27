import Banner from "@/components/ui/banner/Banner";
import CustomerSays from "@/components/ui/home/customarSays/CustomerSays";
import MyPlan from "@/components/ui/home/myPlan/MyPlan";
import PayingCustomer from "@/components/ui/home/payingCustomer/PayingCustomer";
import WritingTools from "@/components/ui/home/writingTools/WritingTools";

const Home = () => {
  return (
    <div>
      <Banner />
      <PayingCustomer />
      <WritingTools />
      {/* mixland */}
      <CustomerSays />
      <MyPlan />
    </div>
  );
};

export default Home;
