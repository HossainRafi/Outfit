import { FaTruck } from "react-icons/fa";
import { RiUserVoiceFill } from "react-icons/ri";
import { AiFillDollarCircle } from "react-icons/ai";

const Features = () => {
  return (
    <section className="section__container banner__container">
      <div className="banner__card">
        <span>
          <FaTruck />
        </span>
        <h4>Free Delivery</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing. dolor sit
          amet
        </p>
      </div>
      <div className="banner__card">
        <span>
          <i className="ri-money-dollar-circle-line"></i>
          <AiFillDollarCircle />
        </span>
        <h4>100% Money Back Guaranty</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing. dolor sit
          amet
        </p>
      </div>
      <div className="banner__card">
        <span>
          <RiUserVoiceFill />
        </span>
        <h4>Strong Support</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing. dolor sit
          amet
        </p>
      </div>
    </section>
  );
};

export default Features;
