import "./footer.css";
import LogoIcon from "../../../../../assets/logo.png";
import { Link } from "react-scroll";
export default function Footer() {
  return (
    <div>
      <div className="BackgroundColor">
        <div className="container">
          <div className="InnerWrapper">
            <Link className="LogoLink" to="home" smooth={true} offset={-80}>
              <img
                src={LogoIcon}
                alt="DepoEventos"
                className="LogoIcon"
                style={{ width: "40px", marginBottom: "7px" }}
              />
              <h1 className="title">DepoEventos</h1>
            </Link>
            <Link className="BackToTop" to="home" smooth={true} offset={-80}>
              Back to top
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
