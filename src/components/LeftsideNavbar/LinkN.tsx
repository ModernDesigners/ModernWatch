import "./LeftsideNavbar.css";
import { useNavigate } from "react-router";
interface LinkINT {
  title: string;
  icon: string;
  setActive: any;
  index: number;
  navigateTo: string;
  isActive: boolean;
}
export default function LinkN({
  title,
  icon,
  setActive,
  index,
  navigateTo,
  isActive,
}: LinkINT) {
  const navigate = useNavigate();

  return (
    <div
      className={`nav-link  ${isActive === true ? "active" : ""}`}
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
