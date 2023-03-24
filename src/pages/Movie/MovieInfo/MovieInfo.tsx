import tup from "../../../images/icons/thumbs-up.png";
import tdown from "../../../images/icons/thumbs-down.png";
import logo from "../../../images/LogoH.webp";

import "./MovieInfo.css";
interface infoInterface {
  year: number;
  genre: string;
  time: string;
  country: string;
  studio: string;
  poster: string;
}
export default function MovieInfo({
  studio,
  year,
  genre,
  time,
  country,
  poster,
}: infoInterface) {
  function hideLoader(img: any) {
    const cardId = img.parentNode;
    const loader = cardId.children[0];
    loader.style.display = "none";
  }
  return (
    <div className="movie-info">
      <div className="movie-poster">
        <div className="cardLoader">
          <img className="loaderImg" src={logo} />
        </div>
        <img
          className="movie-info-image"
          src={poster}
          alt=""
          onLoad={(e) => hideLoader(e.target)}
        />
      </div>
      <div className="movie-full-info">
        <div className="flex-info">
          <h4>სტუდიო:</h4>
          <p>{studio}</p>
        </div>
        <div className="flex-info">
          <h4>წელი: </h4>
          <p>{year}</p>
        </div>
        <div className="flex-info">
          <h4>ჟანრები: </h4>
          <p>{genre}</p>
        </div>
        <div className="flex-info">
          <h4>ხანგრძლივობა:</h4>
          <p>{time} წუთი</p>
        </div>
        <div className="flex-info">
          <h4>ქვეყანა:</h4>
          <p>{country}</p>
        </div>
        <div className="movie-buttons">
          <button>თვის ფილმი</button>
          <button>{studio} ფანი</button>
        </div>
        <div className="rating">
          <h4>შეფასება</h4>
          <div className="thumbs">
            <div className="thumbs-up">
              <img src={tup} alt="" />
              <h5>52</h5>
            </div>
            <div className="thumbs-down">
              <img src={tdown} alt="" />
              <h5>4</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
