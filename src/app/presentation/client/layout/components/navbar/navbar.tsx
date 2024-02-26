// import { Link } from "react-router-dom";
import { CLIENT_ROUTES } from "../../../../../shared/routes/client.routes";
// import BurgerIcon from "./burger-icon/burger-icon.js";
import { Link } from "react-router-dom";
import LogoIcon from "../../../../../../assets/logo.png";

export default function Navbar() {
  return (
    <>
      <nav
        className={`wrapper flexCenter animate whiteBg fixed w-full top-0 z-50 shadow-md`}
        style={{ height: "65px" }}
      >
        <div className="nav-inner container flexSpaceCenter">
          <div className="pointer flexNullCenter">
            <img
              src={LogoIcon}
              alt="DepoEventos"
              style={{ width: "50px", marginBottom: "10px" }}
            />
            <h1 className="ml-7 text-lg font-semibold">
              Depo<span className="orangeColor">Eventos</span>
            </h1>
          </div>
          <button className="burder-wrapper point">
            {/* <BurgerIcon></BurgerIcon> */}
          </button>
          <ul className="ul-wrapper flexNullCenter gap-2">
            <li className="semiBold font15 pointer">
              {/* <div
                                activeClass="active"
                                style={{ padding: "10px 15px" }}>
                                Nosotros
                            </div> */}

              <a href={CLIENT_ROUTES.HOME}>Nosotros</a>
            </li>
            <li className="semiBold font15 pointer">
              {/* <div
                                activeClass="active"
                                style={{ padding: "10px 15px" }}>
                                Paquetes
                            </div> */}

              <a href={CLIENT_ROUTES.PACKS}>Paquetes</a>
            </li>
            <li className="semiBold font15 pointer">
              {/* <div
                                activeClass="active"
                                style={{ padding: "10px 15px" }}>
                                Cursos
                            </div> */}
              <a href={CLIENT_ROUTES.COURSES}>Cursos</a>
            </li>
            <li className="semiBold font15 pointer">
              {/* <div
                                activeClass="active"
                                style={{ padding: "10px 15px" }}>
                                Eventos
                            </div> */}

              <a href={CLIENT_ROUTES.EVENTS}>Eventos</a>
            </li>
          </ul>
          <ul className="ul-wrapper-right flexNullCenter">
            <li className="semiBold font15 pointer flexCenter">
              <Link
                to="admin/login"
                className="radius8 lightBg"
                style={{ padding: "10px 15px" }}
              >
                Log in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
