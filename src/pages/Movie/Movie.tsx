import avengers from "../../images/posters/avengers.jpg";
import "./Movie.css";
import play from "../../images/icons/white-play.png";
import MovieInfo from "./MovieInfo/MovieInfo";
import MoreMovie from "./MoreMovie/MoreMovie";

export default function Movie() {
  return (
    <div className="movie">
      <div className="movie-image">
        <img className="banner-image" src={avengers} alt="" />
        <div className="movie-play">
          <img className="movie-image" src={avengers} alt="" />
          <div className="play-button">
            <img src={play} alt="" />
          </div>
        </div>
        <div className="movie-imdb">
          <h3>IMDB: 8.6</h3>
        </div>
      </div>
      <div className="movie-info-main">
        <MovieInfo
          time="3:10"
          studio="MARVEL"
          year={2019}
          country={"აშშ"}
          genre={"ADVENTURE, ACTION, FANTASY"}
        />
        <div className="movie-info-rightside">
          <h4>აღწერა</h4>
          <p>
            The grave course of events set in motion by Thanos that wiped out
            half the universe and fractured the Avengers ranks compels the
            remaining Avengers to take one final stand in Marvel Studios' grand
            conclusion to twenty-two films, "Avengers: Endgame."
          </p>
        </div>
      </div>
      <MoreMovie />
    </div>
  );
}
