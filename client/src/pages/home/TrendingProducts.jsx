import { useState } from "react";

import products from "../../data/products.json";
import ProductCards from "../shop/ProductCards";

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const loadMoreProducts = () => {
    setVisibleProducts((preCount) => preCount + 4);
  };

  return (
    <section className="section__container product__container">
      <h2 className="section__header">Trending Products</h2>
      <p className="section__subheader">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
        consectetur inventore sapiente earum sequi! Et quasi reprehenderit
        recusandae doloremque magni
      </p>

      {/* products card */}
      <div className="mt-8">
        <ProductCards products={products.slice(0, visibleProducts)} />
      </div>

      {/* load more btn */}
      <div className="product__btn mt-8">
        {visibleProducts < products.length && (
          <button onClick={loadMoreProducts} className="btn">
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default TrendingProducts;
