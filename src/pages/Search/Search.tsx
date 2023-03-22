import "./Search.css";
import searchIcon from "../../images/icons/searchIcon.png";
import { FilterAPI } from "../../API/FIlterAPI";
import { RiArrowDownSLine } from "react-icons/ri";
import { MoviesAPI } from "../../API/MoviesAPI";
import Card from "../../components/Card/Card";
import { useRef, useState } from "react";

export default function Search() {
  return (
    <div className="search">
      <div className="search-header">
        <div className="search-input">
          <input type="text" placeholder="მოძებნა..." />
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
        {MoviesAPI.map((e, i) => (
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
