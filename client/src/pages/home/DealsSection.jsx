import dealsImg from "../../assets/deals.png";

const DealsSection = () => {
  return (
    <section className="section__container deals__container">
      <div className="deals__image">
        <img src={dealsImg} />
      </div>
      <div className="deals__content">
        <h5>Get Up To 20% Discount</h5>
        <h4>Our Special Winter Deals</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          quae itaque maxime architecto veritatis fuga expedita recusandae
          quibusdam quam laboriosam laborum magnam ut numquam alias, illo
          blanditiis cum dolores sed culpa cupiditate dicta sit repudiandae.
        </p>
        <div className="deals__countdown flex-wrap">
          <div className="deals__countdown__card">
            <h4>14</h4>
            <p>Days</p>
          </div>
          <div className="deals__countdown__card">
            <h4>20</h4>
            <p>Hours</p>
          </div>
          <div className="deals__countdown__card">
            <h4>15</h4>
            <p>Mins</p>
          </div>
          <div className="deals__countdown__card">
            <h4>05</h4>
            <p>Secs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
