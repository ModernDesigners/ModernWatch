import { NewsAPI } from "../../API/NewsAPI";
import "./News.css";
import logo from "../../images/LogoH.webp";
import firstNew from "../../images/news/main-movie.png";
import NewsMovie from "./NewsMovie";
export default function () {
  function hideLoader(img: any) {
    const cardId = img.parentNode;
    const loader = cardId.children[0];
    loader.style.display = "none";
  }
  return (
    <div className="news">
      <h4 className="header-text">სიახლეები</h4>
      <div className="main-movie">
        <div className="cardLoader">
          <img className="loaderImg" src={logo} />
        </div>
        <img src={firstNew} onLoad={(e) => hideLoader(e.target)} />
        <div className="blur"></div>
        <div className="info">
          <h2>TEEN WOLF MOVIE COMING</h2>
          <p>ON 22 MARCH</p>
        </div>
      </div>
      <div className="news-movie-main">
        {NewsAPI.map((e, i) => (
          <NewsMovie key={i} image={e.image} />
        ))}
      </div>
    </div>
  );
}
