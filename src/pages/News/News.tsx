import { NewsAPI } from "../../API/NewsAPI";
import "./News.css";
import NewsMovie from "./NewsMovie";
export default function () {
  return (
    <div className="news">
      <h4 className="header-text">სიახლეები</h4>
      <div className="main-movie">
        <div className="blur"></div>
        <div className="info">
          <h2>TEEN WOLF MOVIE COMING</h2>
          <p>ON 22 MARCH</p>
        </div>
      </div>
      <div className="news-movie-main">
        {NewsAPI.map((e) => (
          <NewsMovie image={e.image} />
        ))}
      </div>
    </div>
  );
}
