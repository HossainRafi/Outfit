import { FaTruck } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { RiUserVoiceFill } from "react-icons/ri";

const Features = () => {
  return (
    <section className="section__container banner__container">
      <div className="banner__card">
        <span>
          <FaTruck />
        </span>
        <h4>Free Delivery</h4>
        <p>
          Offers convenience and the ability to shop from anywhere, anytime.
        </p>
      </div>
      <div className="banner__card">
        <span>
          <i className="ri-money-dollar-circle-line"></i>
          <AiFillDollarCircle />
        </span>
        <h4>100% Money Back Guaranty</h4>
        <p>
          E-commerce have a review system where customers can share feedback.
        </p>
      </div>
      <div className="banner__card">
        <span>
          <RiUserVoiceFill />
        </span>
        <h4>Strong Support</h4>
        <p>
          Offer customer support services to assist customers with queries and
          issues.
        </p>
      </div>
    </section>
  );
};

export default Features;
