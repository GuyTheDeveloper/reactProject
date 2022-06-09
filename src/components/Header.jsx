import logo from ".././img/logo.svg";
import "../main.css";

function Header() {
  return (
    <header className="App-header">
      <div className="container header-container">
        <a href="index.html">
          <img src={logo} alt="Logo" />
        </a>

        <nav className="App-nav">
          <button className="nav-btn">Works</button>
          <button className="nav-btn">Contribution</button>
          <button className="nav-btn">Community</button>
          <button className="nav-btn">Get in Touch</button>
          <button className="nav-mode"></button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
