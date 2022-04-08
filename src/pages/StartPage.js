import BlogsCards from "../components/Cards/BlogsCards";
import Footer from "../components/Footer/Footer";
import HeaderLanding from "../components/Header/HeaderLanding";
import Hero from "../components/Hero";
import Tabs from "../components/Tabs/Tabs.jsx";
import "../styles/scss/Blogs.scss";

const StarPage = () => {
  return (
    <>
      <HeaderLanding />
      <Hero />
      <Tabs />
      <BlogsCards></BlogsCards>
      <Footer />
    </>
  );
};

export default StarPage;
