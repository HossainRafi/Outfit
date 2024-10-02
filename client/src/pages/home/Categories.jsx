import { Link } from "react-router-dom";
import category1 from "../../assets/category-1.jpg";
import category2 from "../../assets/category-2.jpg";
import category3 from "../../assets/category-3.jpg";
import category4 from "../../assets/category-4.jpg";

const Categories = () => {
  const categories = [
    { id: 1, name: "Men", path: "men", image: category1 },
    { id: 2, name: "Women", path: "women", image: category2 },
    { id: 3, name: "Kids", path: "kids", image: category3 },
    { id: 4, name: "Jersey", path: "jersey", image: category4 },
  ];
  return (
    <section className=" section__container">
      <h2 className="section__header">Products Category</h2>
      <p className="section__subheader">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
        consectetur inventore sapiente earum sequi! Et quasi reprehenderit
        recusandae doloremque magni
      </p>
      <div className="product__grid">
        {categories.map((category, index) => (
          <Link
            key={index}
            className="categories__card"
            to={`/categories/${category.path}`}
          >
            <img src={category.image} />
            <h4>{category.name}</h4>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
