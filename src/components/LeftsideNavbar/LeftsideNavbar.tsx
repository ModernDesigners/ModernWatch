import "./LeftsideNavbar.css";
import Logo from "../../images/Logo.png";
import Link from "./Link";
import { NavlinksAPI } from "../../API/NavlinksAPI";
import { useState } from "react";

export default function LeftsideNavbar() {
  const [active, setActive] = useState(0);
  return (
    <div className="leftside-navbar">
      <div className="navbar-logo">
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
      <h1>3</h1>
    </div>
  );
}
