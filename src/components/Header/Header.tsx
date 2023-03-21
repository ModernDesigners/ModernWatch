import "./Header.css";
import searchIcon from "../../images/icons/searchIcon.png";
import Settings from "../../images/icons/iconsax/Linear/Settings.png";
import Notifications from "../../images/icons/iconsax/Linear/Notifications.png";
import User from "../../images/icons/iconsax/Linear/User.png";
export default function Header() {
  return (
    <div className="Header">
      <div className="headerSearch">
        <input type="text" placeholder="მოძებნა..." />
        <img src={searchIcon} />
      </div>
      <div className="headerButtons">
        <div className="headerP">პრობლემის შეტყობინება</div>
        <div className="headerSettings headerMicroButtons">
          <img src={Settings} />
        </div>
        <div className="headerNotifications headerMicroButtons">
          <img src={Notifications} />
        </div>
        <div className="headerUser headerMicroButtons">
          <img src={User} />
        </div>
      </div>
    </div>
  );
}
