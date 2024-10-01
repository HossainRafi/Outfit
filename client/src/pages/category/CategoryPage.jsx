import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { categoryName } = useParams();

  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">{categoryName}</h2>
        <p className="section__subheader">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus perferendis obcaecati minima aspernatur corporis quaerat laudantium animi similique cumque possimus
        </p>
      </section>
    </>
  );
};

export default CategoryPage;
