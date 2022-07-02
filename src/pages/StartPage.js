import React from "react";
import Discover from "../components/Discover/Discover";
import Footer from "../components/Footer/Footer";
import HeaderLanding from "../components/Header/HeaderLanding";
import Hero from "../components/Hero";
import LandingSubscribe from "../components/LandingSubscribe/LandingSubscribe";

import Faq from "../components/Faq/Faq";
import Info from "../components/Info/Info";
import { motion } from "framer-motion";

const StarPage = () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <HeaderLanding />
      <Hero />
      <Info />
      <Discover />
      <Faq />
      <LandingSubscribe />
      <section className="py-4">
        <Footer />
      </section>
    </motion.main>
  );
};

export default StarPage;
