import "./Card.css";
import logo from "../../images/LogoH.webp";
interface CardInterface {
  image: string;
  imdb: number;
  title: string;
  genres: string;
}
export default function Card({ image, imdb, title, genres }: CardInterface) {
  function hideLoader(img: any) {
    const cardId = img.parentNode;
    const loader = cardId.children[0];
    loader.style.display = "none";
  }
  return (
    <div className="Card">
      <div className="cardImageSide">
        <div className="cardLoader">
          <img src={logo} />
        </div>
        <img src={image} onLoad={(e) => hideLoader(e.target)} />
        <div className="hoverIMDb">IMDb: {imdb}</div>
      </div>
      <div className="cardTitle">{title}</div>
      <div className="cardDesc">{genres}</div>
    </div>
  );
}
