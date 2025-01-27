import Banner from "@/components/ui/banner/Banner";
import MyPlan from "@/components/ui/home/myPlan/MyPlan";
import PayingCustomer from "@/components/ui/home/payingCustomer/PayingCustomer";

const Home = () => {
  return (
    <div>
      <Banner />
      <PayingCustomer />
      <MyPlan />
    </div>
  );
};

export default Home;
