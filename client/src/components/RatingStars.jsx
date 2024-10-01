import { FaRegStar, FaStar } from "react-icons/fa";

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(<span>{i <= rating ? <FaStar /> : <FaRegStar />}</span>);
  }
  return <div className="product__rating flex items-center justify-center pt-1 gap-[2px]">{stars}</div>;
};

export default RatingStars;
