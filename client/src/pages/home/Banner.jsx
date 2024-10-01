import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <section className="section__container header__container">
      {/* banner text */}
      <div className="header__content z-30">
        <h4>EXPLORE OUR PRODUCTS !</h4>
        <h1>AND GRAB YOUR CHOICE !!</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, eius et. Consequatur, soluta nesciunt odio dicta optio quidem fuga consequuntur quibusdam ullam praesentium sint aliquid vel maxime dignissimos numquam saepe obcaecati, ad molestias nam autem
        </p>
        <button className="btn">
          <a href="/shop">EXPLORE NOW</a>
        </button>
      </div>
      
      {/* banner image */}
      <div className="header__image">
        <img src={bannerImg} />
      </div>
    </section>
  );
};

export default Banner;
