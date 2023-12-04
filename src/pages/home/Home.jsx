import HowItWorks from "../../components/howItWorks/HowItWorks";
import SuccessCounter from "../../components/successCounter/SuccessCounter";
import Testimonials from "../../components/testimonials/Testimonials";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <HowItWorks />
      <SuccessCounter />
      <Testimonials/>
    </div>
  );
};

export default Home;
