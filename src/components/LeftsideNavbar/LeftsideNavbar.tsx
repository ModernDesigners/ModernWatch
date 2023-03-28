import "./LeftsideNavbar.css";
import Logo from "../../images/Logo.png";
import Link from "./Link";
import { NavlinksAPI } from "../../API/NavlinksAPI";
import { useState } from "react";
import play from "../../images/icons/Play.png";
import rank from "../../images/icons/rank.png";
import heart from "../../images/icons/heart.png";
import { useLocation, useNavigate } from "react-router";

export default function LeftsideNavbar(props: {
  navToggle: boolean;
  setNavToggle: any;
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  function getActivated(navigateTo: string) {
    if (location.pathname === "/" && navigateTo === "/") {
      return true;
    } else {
      return location.pathname.substring(1) == navigateTo ? true : false;
    }
  }
  return (
    <>
      <div
        onClick={() => props.setNavToggle(!props.navToggle)}
        className={`burgerbarNav ${
          props.navToggle ? "burgerbarNavActive" : ""
        }`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`leftside-navbar ${
          props.navToggle ? "leftside-navbar-active" : ""
        }`}
      >
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <img src={Logo} alt="" />
          <h3>
            MODERN <span>WATCH</span>
          </h3>
        </div>
        <div className="navbar-links">
          {NavlinksAPI.map((e, i) => (
            <Link
              index={i}
              navigateTo={e.navigateTo}
              isActive={getActivated(e.navigateTo)}
              key={i}
              setActive={setActive}
              title={e.title}
              icon={e.icon}
            />
          ))}
        </div>
        <div className="navbar-footer">
          <div>
            <img src={play} alt="" />
          </div>

          <div>
            <img src={rank} alt="" />
          </div>
          <div>
            <img src={heart} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
