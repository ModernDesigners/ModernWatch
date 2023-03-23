import "./MoreMovie.css";
import { MoviesAPI } from "../../../API/MoviesAPI";
import c from "../../../images/posters/croods.jpg";
import { useEffect, useState } from "react";
export default function MoreMovie() {
  useEffect(() => {}, []);
  let randomMovieList: any = [];
  for (let i = 0; i < 4; i++) {
    const randomNumber = Math.floor(Math.random() * MoviesAPI.length);
    if (randomMovieList.includes(randomNumber)) i--;
    else {
      randomMovieList.push(randomNumber);
    }
  }

  return (
    <div className="more-movie-main">
      <h4>მეტი</h4>
      <div className="more-movies">
        {randomMovieList.length > 0
          ? randomMovieList.map((e: any) => (
              <div className="more-movie">
                <img src={MoviesAPI[e].image} alt="" />
                <h3 className="movie-title">{MoviesAPI[e].name}</h3>
                <p className="movie-genre">{MoviesAPI[e].genres}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
