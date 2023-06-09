import "./Search.css";
import searchIcon from "../../images/icons/searchIcon.png";
import { FilterAPI } from "../../API/FIlterAPI";
import { RiArrowDownSLine } from "react-icons/ri";
import { MoviesAPI } from "../../API/MoviesAPI";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { MdClose } from "react-icons/md";
export default function Search() {
  const seeGets = useLocation();
  const searchParams = new URLSearchParams(seeGets.search);
  const getSearchT: any =
    searchParams.get("search") !== null
      ? searchParams.get("search")
      : undefined;
  const [searchInput, setSearchInput] = useState(getSearchT);
  const [showFilters, setShowFilters] = useState(false);
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
        <button onClick={() => setShowFilters(!showFilters)}>ფილტრები</button>
      </div>
      <div className={`search-filter ${showFilters ? "filtersShow" : ""}`}>
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
        <MdClose
          onClick={() => setShowFilters(false)}
          className="closeFilters"
        />
      </div>
      <div className="search-cards">
        {searchedAPI.map((e: any, i: number) => (
          <Card
            id={e.id}
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
