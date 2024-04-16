import Banner from "../Components/Banner/Banner";
import ClientReview from "../Components/ClientsReview/ClientReview";
import EstateSection from "../Components/Estates-Cards/EstateSection";
import "animate.css";
import HeroContent from "../Components/HeroContents/HeroContent";
import Questions from "../Components/Questions";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Banner />
        <div data-aos="zoom-in-up" className="mt-10">
          <HeroContent />
        </div>
        <div data-aos="fade-down">
          <EstateSection />
        </div>
        <div data-aos="fade-up">
          <ClientReview />
        </div>
        <div data-aos="zoom-in-up">
          <Questions />
        </div>
      </div>
    </>
  );
};

export default Home;
