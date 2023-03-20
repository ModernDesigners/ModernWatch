import "./LeftsideNavbar.css";
import { useNavigate } from "react-router";
interface LinkINT {
  title: string;
  icon: string;
  setActive: any;
  active: number;
  index: number;
  navigateTo: string;
}
export default function Link({
  title,
  icon,
  setActive,
  active,
  index,
  navigateTo,
}: LinkINT) {
  const navigate = useNavigate();
  return (
    <div
      className={`nav-link ${active === index ? "active" : ""}`}
      onClick={() => {
        setActive(index);
        navigate(navigateTo);
      }}
    >
      <img src={icon} alt="" />
      <h4>{title}</h4>
    </div>
  );
}
