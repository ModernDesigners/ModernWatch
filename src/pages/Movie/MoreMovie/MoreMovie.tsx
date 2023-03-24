import "./MoreMovie.css";
import { MoviesAPI } from "../../../API/MoviesAPI";
import scrollArrow from "../../../images/icons/arrow.png";
import { useEffect } from "react";
import Card from "../../../components/Card/Card";
export default function MoreMovie() {
  useEffect(() => {}, []);
  let randomMovieList: any = [];
  for (let i = 0; i < 4; i++) {
    const randomNumber = Math.floor(Math.random() * MoviesAPI.length);
    if (randomMovieList.includes(randomNumber)) i--;
    else {
      randomMovieList.push(randomNumber);
    }
  }

  return (
    <div className="CardsRowwer">
      <div className="ScrollStarter">
        <div className="ScrollName">მეტი</div>
        <div className="ScrollArrows">
          <div className="Scrolls ScrollLeft">
            <img src={scrollArrow} />
          </div>
          <div className="Scrolls ScrollRight">
            <img src={scrollArrow} />
          </div>
        </div>
      </div>
      <div className="CardRow">
        {MoviesAPI.map((e, i) =>
          i < 5 ? (
            <Card
              id={e.id}
              key={i}
              image={e.image}
              imdb={e.imdb}
              title={e.name}
              genres={e.genres}
            />
          ) : null
        )}
      </div>
    </div>
  );
}
