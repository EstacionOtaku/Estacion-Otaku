import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";
import HeaderLanding from "../components/Header/HeaderLanding";
import Hero from "../components/Hero";
import LandingSubscribe from "../components/LandingSubscribe/LandingSubscribe";
import Tabs from "../components/Tabs/Tabs.jsx";

const StarPage = () => {
  return (
    <>
      <HeaderLanding />
      <Hero />
      <Tabs />
      <Faq />
      <LandingSubscribe />
      <Footer />
    </>
  );
};

export default StarPage;
