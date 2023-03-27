import { MoviesAPI } from "../../API/MoviesAPI";
import "./Home.css";
import Card from "../../components/Card/Card";
import scrollArrow from "../../images/icons/arrow.png";
import avengers from "../../images/posters/avengers.webp";
import wednesday from "../../images/posters/wednesday.webp";
import moonknight from "../../images/posters/moonknight.webp";
import logo from "../../images/LogoH.webp";
import { Link } from "react-router-dom";
import CardSlider from "../../components/CardSlider/CardSlider";

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
              <Link to="Movie/2">
                <button className="mainB watchB">უყურე</button>
              </Link>
              <button className="mainB trailerB">თრეილერი</button>
            </div>
            <div className="tSide">
              AVENGERS: ENDGAME
              <div className="imdbS">IMDB: 8.6</div>
            </div>
          </div>
        </div>
        <div className="HomeStarterSections MiniSec">
          <Link className="MiniCard" to="Movie/8">
            <div className="cardLoader">
              <img className="loaderImg" src={logo} />
            </div>
            <div className="blur"></div>
            <img src={wednesday} onLoad={(e) => hideLoader(e.target)} />
            <div className="MiniCardTitle">Wednesday</div>
          </Link>
          <Link className="MiniCard" to="Movie/11">
            <div className="cardLoader">
              <img className="loaderImg" src={logo} />
            </div>
            <div className="blur"></div>
            <img src={moonknight} onLoad={(e) => hideLoader(e.target)} />
            <div className="MiniCardTitle">Moon Knight</div>
          </Link>
        </div>
      </div>

      <CardSlider title="ახალი" />

      <CardSlider title="რეკომენდირებული" />
    </div>
  );
}
