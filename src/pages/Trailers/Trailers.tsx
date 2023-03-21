import { TrailersAPI } from "../../API/TrailersAPI";
import TrailerMovie from "./TrailerMovie";
import "./Trailers.css";
export default function Trailers() {
  return (
    <div className="trailers">
      <h4 className="header-text">თრეილერები</h4>
      <div className="trailer-movies">
        {TrailersAPI.map((e) => (
          <TrailerMovie title={e.title} image={e.image} />
        ))}
      </div>
    </div>
  );
}
