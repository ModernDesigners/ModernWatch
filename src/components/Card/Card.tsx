import "./Card.css";
import logo from "../../images/LogoH.webp";
import { Link } from "react-router-dom";
interface CardInterface {
  id: number;
  image: string;
  imdb: number;
  title: string;
  genres: string;
  reff: any;
}
export default function Card({
  id,
  image,
  imdb,
  title,
  genres,
  reff,
}: CardInterface) {
  function hideLoader(img: any) {
    const cardId = img.parentNode;
    const loader = cardId.children[0];
    loader.style.display = "none";
  }
  return (
    <div ref={reff} className="Card">
      <Link to={"/Movie/" + id}>
        <div className="cardImageSide">
          <div className="cardLoader">
            <img src={logo} />
          </div>
          <img src={image} onLoad={(e) => hideLoader(e.target)} />
          <div className="hoverIMDb">IMDb: {imdb}</div>
        </div>
        <div className="cardInfo">
          <div className="cardTitle">{title}</div>
          <div className="cardDesc">{genres}</div>
        </div>
      </Link>
    </div>
  );
}
