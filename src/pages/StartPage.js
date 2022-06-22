import React from "react";
import Discover from "../components/Discover/Discover";
import Carousel from "../components/Carousel/Carousel";
import BlogsCards from "../components/Cards/BlogsCards";
import Footer from "../components/Footer/Footer";
import HeaderLanding from "../components/Header/HeaderLanding";
import Hero from "../components/Hero";
import LandingSubscribe from "../components/LandingSubscribe/LandingSubscribe";
import Tabs from "../components/Tabs/Tabs.jsx";
import "../styles/css/Blogs.css";
import PreguntasCards from "../components/Cards/PreguntasCards";
import Newsletter from "../components/Newsletter/Newsletter";
import Faq from "../components/Faq/Faq";

const StarPage = () => {
  return (
    <>
      <HeaderLanding />
      <Hero />
      <section className="px-2">
        <Tabs />
      </section>
      <section>
        <Discover />
      </section>
      <Faq />
      <LandingSubscribe />
      <section className="py-4">
        <Footer />
      </section>
    </>
  );
};

export default StarPage;
