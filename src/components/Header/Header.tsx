import "./Header.css";
import searchIcon from "../../images/icons/searchIcon.png";
import Settings from "../../images/icons/iconsax/Linear/Settings.png";
import Notifications from "../../images/icons/iconsax/Linear/Notifications.png";
import User from "../../images/icons/iconsax/Linear/User.png";
import { MoviesAPI } from "../../API/MoviesAPI";
import { useNavigate } from "react-router";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function Header() {
  const location = useLocation();
  const [searchINP, setSearchINP] = useState(1);
  useEffect(() => {
    if (location.pathname == "/Search") {
      setSearchINP(0);
    } else {
      setSearchINP(1);
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const inputRef = useRef<any>(null);
  const navigate = useNavigate();
  const searchSubmit = (e: any) => {
    e.preventDefault();
    // navigate({
    //   pathname: "/Search",
    //   search: "?search=" + inputRef.current.value,
    // });
    inputRef.current.value = "";
  };
  return (
    <div className="Header">
      <div className="search-main">
        <div className={`headerSearch ${searchINP ? "" : "hideHS"}`}>
          <form onSubmit={(e) => searchSubmit(e)}>
            <input ref={inputRef} type="text" placeholder="მოძებნა..." />
            <img src={searchIcon} onClick={(e) => searchSubmit(e)} />
          </form>
        </div>
        <div className="search-results">
          <div className="result-movies">
            {MoviesAPI.map((e) => (
              <div className="result-movie">
                <img src={e.image} alt="" />
                <div className="result-movie-info">
                  <div className="header-info">
                    <h2>{e.name}</h2>
                    <p>{e.genres}</p>
                  </div>
                  <div className="bottom-info">
                    <div className="flex-info">
                      <h4>სტუდიო:</h4>
                      <p>{e.studio}</p>
                    </div>
                    <div className="flex-info">
                      <h4>წელი:</h4>
                      <p>{e.year}</p>
                    </div>
                    <div className="flex-info">
                      <h4>ხანგრძლივობა:</h4>
                      <p>{e.time} წუთი</p>
                    </div>
                    <div className="flex-info">
                      <h4>ქვეყანა:</h4>
                      <p>{e.country}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
