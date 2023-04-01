import "./Movie.css";
import play from "../../images/icons/white-play.png";
import MovieInfo from "./MovieInfo/MovieInfo";
import MoreMovie from "./MoreMovie/MoreMovie";
import logo from "../../images/LogoH.webp";
import "./MovieQuery/MovieQuery.css";
import { useLocation, useParams } from "react-router";
import { MoviesAPI } from "../../API/MoviesAPI";
import { Player } from "video-react";
import { useEffect, useRef } from "react";
export default function Movie(props: {
  setFavorites: any;
  favorites: Array<number>;
}) {
  let location = useLocation();
  let linkInfo: any = useParams();
  let linkId = parseInt(linkInfo.id);
  let movieThumbnail: any = useRef(null);
  let playerVideo: any = useRef(null);
  const movieGet: any = MoviesAPI.filter((e) => e.id == linkId);
  const movieInfo = movieGet[0];
  useEffect(() => {
    movieThumbnail.current.style.display = "flex";
  }, [location.pathname]);

  function hideLoader(img: any) {
    const cardId = img.parentNode;
    const loader = cardId.children[0];
    loader.style.display = "none";
  }
  const movieStart = () => {
    movieThumbnail.current.style.display = "none";
    playerVideo.current.play();
  };
  return (
    <div className="movie">
      <div className="movie-image">
        <div className="back-image">
          <div className="cardLoader">
            <img className="loaderImg" src={logo} />
          </div>
          <img
            className="banner-image"
            src={movieInfo.image}
            alt=""
            onLoad={(e) => hideLoader(e.target)}
          />
        </div>
        <div className="movie-play">
          <Player
            playsInline
            ref={playerVideo}
            poster="/assets/poster.png"
            src={movieInfo.link}
          />
          <div
            onClick={movieStart}
            ref={movieThumbnail}
            className="movie-image"
          >
            <img src={movieInfo.image} />
            <div className="play-button">
              <img src={play} />
            </div>
          </div>
        </div>
        <div className="movie-additions">
          <div className="movie-imdb">
            <h3>IMDB: {movieInfo.imdb}</h3>
          </div>

          <div className="lang-buttons">
            <div className="lang-b lang-b-active">GEO</div>
            <div className="lang-b">ENG</div>
            <div className="lang-b">RUS</div>
          </div>
        </div>
      </div>
      <div className="movie-info-content">
        <div className="movie-info-main">
          <MovieInfo
            time={movieInfo.time}
            studio={movieInfo.studio}
            year={movieInfo.year}
            country={movieInfo.country}
            genre={movieInfo.genres}
            poster={movieInfo.imagePoster}
            id={movieInfo.id}
            setFavorites={props.setFavorites}
            favorites={props.favorites}
          />
          <div className="movie-info-rightside">
            <h4>აღწერა</h4>
            <p>{movieInfo.description}</p>
          </div>
        </div>
        <div className="more-movies">
          <MoreMovie />
        </div>
      </div>
    </div>
  );
}
