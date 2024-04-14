import Banner from "../Components/Banner/Banner";
import ClientReview from "../Components/ClientsReview/ClientReview";
import EstateSection from "../Components/Estates-Cards/EstateSection";
import "animate.css";
import HeroContent from "../Components/HeroContents/HeroContent";
import Questions from "../Components/Questions";

const Home = () => {
  return (
    <>
      <div>
        <h2 className="text-3xl text-center animate__slideInDown">
          Welcome to Homepage
        </h2>
        <Banner />
        <div className="mt-10">
          <HeroContent />
        </div>
        <div>
          <EstateSection />
        </div>
        <div>
          <ClientReview />
        </div>
        <div>
          <Questions />
        </div>
      </div>
    </>
  );
};

export default Home;
