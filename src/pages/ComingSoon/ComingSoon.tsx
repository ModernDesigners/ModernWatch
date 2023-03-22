import "./ComingSoon.css";
import scrollArrow from "../../images/icons/arrow.png";
import Card from "../../components/Card/Card";
import { MoviesAPI } from "../../API/MoviesAPI";

export default function ComingSoon() {
  return (
    <div className="ComingSoon">
      <div className="CardsRowwer">
        <div className="ScrollStarter">
          <div className="ScrollName">დღეს</div>
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
      <div className="CardsRowwer">
        <div className="ScrollStarter">
          <div className="ScrollName">ამ კვირას</div>
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
      <div className="CardsRowwer">
        <div className="ScrollStarter">
          <div className="ScrollName">ამ თვეს</div>
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
      <div className="CardsRowwer">
        <div className="ScrollStarter">
          <div className="ScrollName">ამ წელს</div>
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
    </div>
  );
}
