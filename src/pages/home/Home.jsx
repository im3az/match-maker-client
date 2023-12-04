import HowItWorks from "../../components/howItWorks/HowItWorks";
import SuccessCounter from "../../components/successCounter/SuccessCounter";
import Testimonials from "../../components/testimonials/Testimonials";
import Banner from "./Banner/Banner";
import PremiumBiodata from "./PremiumBiodata/PremiumBiodata";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <PremiumBiodata />
      <HowItWorks />
      <SuccessCounter />
      <Testimonials />
    </div>
  );
};

export default Home;
