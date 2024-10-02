import { Link } from "react-router-dom";
import { MdMail } from "react-icons/md";
import instaImg1 from "../assets/instagram-1.jpg";
import instaImg2 from "../assets/instagram-2.jpg";
import instaImg3 from "../assets/instagram-3.jpg";
import instaImg4 from "../assets/instagram-4.jpg";
import instaImg5 from "../assets/instagram-5.jpg";
import instaImg6 from "../assets/instagram-6.jpg";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaMapMarkerAlt, FaMobileAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="section__container footer__container">
        {/* contact info section */}
        <div className="footer__col">
          <h4>CONTACT INFO</h4>
          <p className="flex items-center">
            <span>
              <FaPhoneAlt />
            </span>
            (+012) 3456 789
          </p>
          <p className="flex items-center">
            <span>
              <FaMobileAlt />
            </span>
            +880 1789123456
          </p>
          <p className="flex items-center">
            <span>
              <FaSquareWhatsapp />
            </span>
            +880 1789123456
          </p>
          <p className="flex items-center">
            <span>
              <FaMapMarkerAlt />
            </span>
            Uttara, Dhaka - 1230
          </p>
          <p className="flex items-center">
            <span>
              <MdMail />
            </span>
            support@outfit.com
          </p>
        </div>

        {/* links-1 */}
        <div className="footer__col">
          <h4>COMPANY</h4>
          <Link to="#">Home</Link>
          <Link to="#">About Us</Link>
          <Link to="#">Work With Us</Link>
          <Link to="#">Read Our Blogs</Link>
          <Link to="#">Terms &amp; Conditions</Link>
        </div>

        {/* links-2 */}
        <div className="footer__col">
          <h4>USEFUL LINKS</h4>
          <Link to="#">Help</Link>
          <Link to="#">Track Order</Link>
          <Link to="#">Men</Link>
          <Link to="#">Women</Link>
          <Link to="#">Kids</Link>
        </div>

        {/* social media section */}
        <div className="footer__col">
          <h4>INSTAGRAM</h4>
          <div className="instagram__grid">
            <img src={instaImg1} alt="instagram" />
            <img src={instaImg2} alt="instagram" />
            <img src={instaImg3} alt="instagram" />
            <img src={instaImg4} alt="instagram" />
            <img src={instaImg5} alt="instagram" />
            <img src={instaImg6} alt="instagram" />
          </div>
        </div>
      </footer>

      {/* copyright */}
      <div className="footer__bar">
        Copyright © 2024 Outfit. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
