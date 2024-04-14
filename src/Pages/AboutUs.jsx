import { Helmet } from "react-helmet-async";
import AboutUsComponent from "../Components/AboutUsSection/AboutUsComponent";
import AboutUsTwo from "../Components/AboutUsSection/AboutUsTwo";
import Gallery from "../Components/AboutUsSection/Gallery";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <AboutUsComponent />
      <Gallery />
      <AboutUsTwo />
    </div>
  );
};

export default AboutUs;
