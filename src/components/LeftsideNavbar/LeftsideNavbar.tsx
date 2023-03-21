import "./LeftsideNavbar.css";
import Logo from "../../images/Logo.png";
import Link from "./Link";
import { NavlinksAPI } from "../../API/NavlinksAPI";
import { useState } from "react";
import play from "../../images/icons/Play.png";
import rank from "../../images/icons/rank.png";
import heart from "../../images/icons/heart.png";
import { useNavigate } from "react-router";

export default function LeftsideNavbar() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  return (
    <div className="leftside-navbar">
      <div className="navbar-logo" onClick={() => navigate("Home")}>
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
            active={active}
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
  );
}
