import { GenresAPI } from "../../API/GenresAPI";
import GenreCard from "./GenreCard";
import "./Genres.css";

export default function Genres() {
  return (
    <div className="genres">
      <h4 className="header-text">ჟანრები</h4>
      <div className="genres-card-main">
        {GenresAPI.map((e, i) => (
          <GenreCard
            key={i}
            link={e.navigateTo}
            title={e.title}
            image={e.img}
          />
        ))}
      </div>
    </div>
  );
}
