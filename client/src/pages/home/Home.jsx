import Blogs from "../blogs/Blogs";
import Banner from "./Banner";
import Categories from "./Categories";
import DealsSection from "./DealsSection";
import Features from "./Features";
import TrendingProducts from "./TrendingProducts";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <DealsSection />
      <TrendingProducts />
      <Features />
      <Blogs />
    </>
  );
};

export default Home;
