import Newsletter from "./Newsletter";
import Banner from "./components/Banner";
import BlogSection from "./components/BlogSection";
import Breakfastsection from "./components/Breakfastsection";
import Categories from "./components/Categories";
import Features from "./components/Features";
import Footer from "./components/Footer";
import FruitScetion from "./components/FruitScetion";
import Hero from "./components/Hero";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main>
      <Navbar/>
      <MobileNavbar/>
      <Hero/>
      <Categories/>
      <FruitScetion/>
      <Breakfastsection />
      <Banner />
      <BlogSection />
      <Newsletter />
      <Features />
      <Footer />
    </main>
  )
}