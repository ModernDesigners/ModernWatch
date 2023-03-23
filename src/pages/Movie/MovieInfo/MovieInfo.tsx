import tup from "../../../images/icons/thumbs-up.png";
import tdown from "../../../images/icons/thumbs-down.png";
import avengers from "../../../images/posters/avengers.jpg";
import "./MovieInfo.css";
interface infoInterface {
  year: number;
  genre: string;
  time: string;
  country: string;
  studio: string;
}
export default function MovieInfo({
  studio,
  year,
  genre,
  time,
  country,
}: infoInterface) {
  return (
    <div className="movie-info">
      <img className="movie-info-image" src={avengers} alt="" />
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
          <p>{time}წუთი</p>
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
