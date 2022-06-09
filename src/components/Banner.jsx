import "../main.css";

function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-top">
          <h3 className="work-heading">Contribution</h3>
          <button className="work-btn">View more</button>
        </div>

        <div className="banner-content">
          <div className="banner-inner">
            <div className="banner-wrapper">
              <h3 className="banner-heading">3D Greek Statue Pack</h3>
              <h3 className="inner-heading">
                Over <span className="inner-span">200</span> Greek style
                sculpture
              </h3>
              <button className="banner-btn">download</button>
            </div>
          </div>

          <div className="banner-inner2 banner-inn">
            <div className="banner-wrapper banner-wrapper2">
              <div className="banner-heading">Greek Statue Avatars</div>
              <div className="inner-heading inner-heading2">
                +500 Greek style
                <br />
                <span className="inner-span2">User Avatars</span>
              </div>
              <button className="banner-btn">Download</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
