import "./Card.css";
import spaceJam from "../../images/posters/spaceJam.png";
interface CardInterface {
  image: string;
  imdb: number;
  title: string;
  genres: string;
}
export default function Card({ image, imdb, title, genres }: CardInterface) {
  return (
    <div className="Card">
      <div className="cardImageSide">
        <img src={image} />
        <div className="hoverIMDb">IMDb: {imdb}</div>
      </div>
      <div className="cardTitle">{title}</div>
      <div className="cardDesc">{genres}</div>
    </div>
  );
}
