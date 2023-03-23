import { MoviesAPI } from "../../API/MoviesAPI";
import "./Home.css";
import Card from "../../components/Card/Card";
import scrollArrow from "../../images/icons/arrow.png";
import avengers from "../../images/posters/avengers.jpg";
import wednesday from "../../images/posters/wednesday.webp";
import moonknight from "../../images/posters/moonknight.webp";
import logo from "../../images/LogoH.webp";

export default function Home() {
  function hideLoader(img: any) {
    const cardId = img.parentNode;
    const loader = cardId.children[0];
    loader.style.display = "none";
  }
  return (
    <div className="Home">
      <div className="header-text homeT">პოპულარული</div>
      <div className="MainSplitter">
        <div className="HomeStarterSections MainSec">
          <div className="cardLoader">
            <img src={logo} />
          </div>
          <div className="blur"></div>
          <img src={avengers} onLoad={(e) => hideLoader(e.target)} />
          <div className="MainBar">
            <div className="bSide">
              <button className="mainB watchB">უყურე</button>
              <button className="mainB trailerB">თრეილერი</button>
            </div>
            <div className="tSide">
              AVENGERS: ENDGAME
              <div className="imdbS">IMDB: 8.6</div>
            </div>
          </div>
        </div>
        <div className="HomeStarterSections MiniSec">
          <div className="MiniCard">
            <div className="cardLoader">
              <img className="loaderImg" src={logo} />
            </div>
            <div className="blur"></div>
            <img src={wednesday} onLoad={(e) => hideLoader(e.target)} />
            <div className="MiniCardTitle">Wednesday</div>
          </div>
          <div className="MiniCard">
            <div className="cardLoader">
              <img className="loaderImg" src={logo} />
            </div>
            <div className="blur"></div>
            <img src={moonknight} onLoad={(e) => hideLoader(e.target)} />
            <div className="MiniCardTitle">Moon Knight</div>
          </div>
        </div>
      </div>
      <div className="CardsRowwer">
        <div className="ScrollStarter">
          <div className="ScrollName">ახალი</div>
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
          <div className="ScrollName">რეკომენდირებული</div>
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
