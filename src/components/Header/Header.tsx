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
import ResultMovie from "./components/ResultMovie";

export default function Header() {
  const location = useLocation();
  const [searchINP, setSearchINP] = useState(1);
  const searchedAPI: any = useRef(null);

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
  const [navSearch, setNavSearch] = useState(0);
  const [openResults, setOpenResults] = useState(0);
  const searchSubmit = (e: any) => {
    e.preventDefault();
    navigate({
      pathname: "/Search",
      search: "?search=" + inputRef.current.value,
    });
    inputRef.current.value = "";
  };
  const QuickSearch = () => {
    setNavSearch(inputRef.current.value);
    if (inputRef.current.value.length == 0) {
      searchedAPI.current = null;
    } else {
      searchedAPI.current = MoviesAPI.filter((items) =>
        items.name.toLowerCase().includes(inputRef.current.value.toLowerCase())
      );
    }
  };
  inputRef.current?.addEventListener("focusin", function () {
    setOpenResults(1);
  });
  // inputRef.current?.addEventListener("focusout", function () {
  //   setOpenResults(0);
  // });
  document.body.addEventListener("click", function (e: any) {
    if (
      openResults == 1 &&
      e.target?.classList.value !== "search-results" &&
      e.target?.classList.value !== "quick-search-input" &&
      e.target?.classList.value !== "result-movies"
    ) {
      setOpenResults(0);
    }
  });
  return (
    <div className="Header">
      <div className="search-main">
        <div className={`headerSearch ${searchINP ? "" : "hideHS"}`}>
          <form onSubmit={(e) => searchSubmit(e)}>
            <input
              ref={inputRef}
              onChange={QuickSearch}
              className="quick-search-input"
              type="text"
              placeholder="მოძებნა..."
            />
            <img src={searchIcon} onClick={(e) => searchSubmit(e)} />
          </form>
        </div>
        <div className={`search-results ${openResults ? "" : "searchCloser"}`}>
          <div className="result-movies">
            {searchedAPI.current !== null
              ? searchedAPI.current.map((e: any, i: number) => (
                  <ResultMovie
                    key={i}
                    id={e.id}
                    imagePoster={e.imagePoster}
                    name={e.name}
                    genres={e.genres}
                    studio={e.studio}
                    year={e.year}
                    time={e.time}
                    country={e.country}
                  />
                ))
              : null}
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
