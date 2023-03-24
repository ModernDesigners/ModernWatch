import { Link } from "react-router-dom";

export default function ResultMovie(props: any) {
  return (
    <Link className="resultedA" to={"/Movie/" + props.id}>
      <div className="result-movie">
        <img src={props.imagePoster} />
        <div className="result-movie-info">
          <div className="header-info">
            <h2>{props.name}</h2>
            <p>{props.genres}</p>
          </div>
          <div className="bottom-info">
            <div className="flex-info">
              <h4>სტუდიო:</h4>
              <p>{props.studio}</p>
            </div>
            <div className="flex-info">
              <h4>წელი:</h4>
              <p>{props.year}</p>
            </div>
            <div className="flex-info">
              <h4>ხანგრძლივობა:</h4>
              <p>{props.time} წუთი</p>
            </div>
            <div className="flex-info">
              <h4>ქვეყანა:</h4>
              <p>{props.country}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
