import "../main.css";
import nft1 from "../img/nft1.png";
import nft2 from "../img/nft2.png";
import nft3 from "../img/nft3.png";
import nft4 from "../img/nft4.png";
import nft5 from "../img/nft5.png";

function Work() {
  return (
    <div className="container work-container">
      <section className="work">
        <div className="work-top">
          <h2 className="work-heading">Recent nft</h2>
          <button className="work-btn">View more</button>
        </div>

        <div className="work-wrapper my-slider">
          <div className="card">
            <img src={nft1} alt="NFT" />
            <div className="work-div">
              <span className="work-nft">Relics Of A Mortal Past 1</span> - NFT
            </div>
          </div>

          <div className="card">
            <img src={nft2} alt="NFT" />
            <div className="work-div">
              <span className="work-nft">Relics Of A Mortal Past 2 -</span> NFT
            </div>
          </div>

          <div className="card">
            <img src={nft3} alt="NFT" />
            <div className="work-div">
              <span className="work-nft">Relics Of A Mortal Past † -</span> NFT
            </div>
          </div>

          <div className="card">
            <img src={nft4} alt="NFT" />
            <div className="work-div">
              <span className="work-nft">Relics Of A Mortal Past † -</span> NFT
            </div>
          </div>

          <div className="card">
            <img src={nft5} alt="NFT" />
            <div className="work-div">
              <span className="work-nft">Relics Of A Mortal Past † -</span> NFT
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
