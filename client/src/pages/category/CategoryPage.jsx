import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCards from "../shop/ProductCards";
import products from "../../data/products.json";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter(
      (product) => product.category === categoryName.toLowerCase()
    );
    setFilteredProducts(filtered);
  }, []);

  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">{categoryName}</h2>
        <p className="section__subheader">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
          perferendis obcaecati minima aspernatur corporis quaerat laudantium
          animi similique cumque possimus
        </p>
      </section>

      {/* Products card */}
      <div className="section__container">
        <ProductCards products={filteredProducts} />
      </div>
    </>
  );
};

export default CategoryPage;
