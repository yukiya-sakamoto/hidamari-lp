import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Symptoms from "../components/Symptoms";
import Flow from "../components/Flow";
import Voice from "../components/Voice";
import Staff from "../components/Staff";
import Pricing from "../components/Pricing";
import Access from "../components/Access";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Symptoms />
        <Flow />
        <Voice />
        <Staff />
        <Pricing />
        <Access />
      </main>
      <Footer />
    </>
  );
}
