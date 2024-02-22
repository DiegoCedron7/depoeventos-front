import "./footer.css";
import LogoIcon from "../../../../../assets/logo.png";
import { Link } from "react-scroll";
import { CLIENT_ROUTES } from "../../../../shared/routes/client.routes";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-white w-full h-[70px] flex flex-row items-center justify-center px-10 ">
      {/* <img className="h-[40px]" src={LogoIcon} alt="logo" /> */}
      <h1 className="text-xl italic font-bold">
        Depo<span className="text-orange-600">Eventos</span>
      </h1>
      <div className="m-auto">
        <Link className="text-slate-500 mx-4 pointer" to={CLIENT_ROUTES.HOME}>
          Home
        </Link>
        <Link className="text-slate-500 mx-4 pointer" to={CLIENT_ROUTES.PACKS}>
          Packs
        </Link>
        <Link className="text-slate-500 mx-4 pointer" to={CLIENT_ROUTES.EVENTS}>
          Events
        </Link>
        <Link
          className="text-slate-500 mx-4 pointer"
          to={CLIENT_ROUTES.COURSES}
        >
          Courses
        </Link>
      </div>
      <div className="flex flex-row gap-2 text-2xl ">
        <a
          className="text-slate-600"
          href="https://www.facebook.com"
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a
          className="text-slate-600"
          href="https://www.instagram.com"
          target="_blank"
        >
          <FaInstagramSquare />
        </a>
        <a
          className="text-slate-600"
          href="https://www.twitter.com"
          target="_blank"
        >
          <FaXTwitter />
        </a>
        <a
          className="text-slate-600"
          href="https://www.pinterest.com"
          target="_blank"
        >
          <FaPinterest />
        </a>
      </div>
    </div>
  );
}
