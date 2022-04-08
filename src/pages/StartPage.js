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
      <section className="px-2">
        <Tabs />
      </section>
      <section className="p-4" style={{ maxWidth: "1400px", margin: "auto" }}>
        <BlogsCards></BlogsCards>
      </section>
      <section className="py-4">
        <Footer />
      </section>
    </>
  );
};

export default StarPage;
