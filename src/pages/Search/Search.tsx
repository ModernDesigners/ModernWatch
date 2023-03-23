import "./Search.css";
import searchIcon from "../../images/icons/searchIcon.png";
import { FilterAPI } from "../../API/FIlterAPI";
import { RiArrowDownSLine } from "react-icons/ri";
import { MoviesAPI } from "../../API/MoviesAPI";
import Card from "../../components/Card/Card";
import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router";
export default function Search() {
  const seeGets = useLocation();
  const searchParams = new URLSearchParams(seeGets.search);
  const getSearchT: any =
    searchParams.get("search") !== null
      ? searchParams.get("search")
      : undefined;
  const [searchInput, setSearchInput] = useState(getSearchT);
  const [searchedRow, setsearchedRow] = useState(0);
  useEffect(() => {
    setSearchInput(getSearchT);
  }, [seeGets.search]);

  // SEARCH SYSTEM
  let searchedAPI = MoviesAPI;

  searchedAPI = MoviesAPI;
  if (getSearchT !== undefined) {
    searchedAPI = searchedAPI.filter((items) =>
      items.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  return (
    <div className="search">
      <div className="search-header">
        <div className="search-input">
          <input
            type="text"
            placeholder="მოძებნა..."
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
          <img src={searchIcon} alt="" />
        </div>
        <button>ფილტრები</button>
      </div>
      <div className="search-filter">
        {FilterAPI.map((e, i) => (
          <div key={i} className="filter">
            <div className="filter-flex">
              <h4>{e.filterTitle}</h4>
              <RiArrowDownSLine />
            </div>
            <div className="filter-options">
              <div className="filter-option">
                {e.filterOptions.map((f) => (
                  <h4 key={Math.random()}>{f}</h4>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="search-cards">
        {searchedAPI.map((e: any, i: number) => (
          <Card
            key={i}
            genres={e.genres}
            title={e.name}
            imdb={e.imdb}
            image={e.image}
          />
        ))}
      </div>
    </div>
  );
}
