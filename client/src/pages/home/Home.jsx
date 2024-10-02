import Banner from "./Banner";
import Features from "./Features";
import Blogs from "../blogs/Blogs";
import Categories from "./Categories";
import DealsSection from "./DealsSection";
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
