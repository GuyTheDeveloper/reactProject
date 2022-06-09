import "../main.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-inner">
          <h1 className="hero-heading">
            <span className="hero-special">Y</span>et the story of{" "}
            <span className="hero-span">
              <span className="hero-special">O</span>rpheus
            </span>
          </h1>
          <p className="hero-text">
            Product & Graphic Designer, with experience in delivering end-to-end
            UX/UI design for software products.
          </p>

          <div className="btn-wrapper">
            <select className="hero-works">
              <option value="Works">Works</option>
              <option value="somebody">Somebody</option>
              <option value="something">Something</option>
            </select>
            <button className="hero-btn">Free Stuff</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
