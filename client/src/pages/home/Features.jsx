import { FaTruck } from "react-icons/fa";
import { ImHappy2 } from "react-icons/im";
import { RiUserVoiceFill } from "react-icons/ri";
import { AiFillDollarCircle } from "react-icons/ai";

const Features = () => {
  return (
    <section className="section__container">
      <h2 className="section__header">Our Best Features</h2>
      <p className="section__subheader">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
        consectetur inventore sapiente earum sequi! Et quasi reprehenderit
        recusandae doloremque magni
      </p>
      <div className="banner__container pt-12">
        {/* free delivery div */}
        <div className="banner__card">
          <span>
            <FaTruck />
          </span>
          <h4>Free Delivery</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit eius soluta
          </p>
        </div>

        {/* money back div */}
        <div className="banner__card">
          <span>
            <i className="ri-money-dollar-circle-line"></i>
            <AiFillDollarCircle />
          </span>
          <h4>Money Back Guaranty</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit eius soluta
          </p>
        </div>

        {/* happy client div */}
        <div className="banner__card">
          <span>
            <ImHappy2 />
          </span>
          <h4>Satisfaction Guaranty</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit eius soluta
          </p>
        </div>

        {/* support div */}
        <div className="banner__card">
          <span>
            <RiUserVoiceFill />
          </span>
          <h4>Strong Support</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit eius soluta
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
