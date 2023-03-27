import scrollArrow from "../../images/icons/arrow.png";
import { MoviesAPI } from "../../API/MoviesAPI";
import Card from "../Card/Card";
import "./CardSlider.css";
import { useRef } from "react";

export default function CardSlider(props: { title: string }) {
  let cardRow: any = useRef(null);
  let cardSlider: any = useRef(null);

  function sliderLeft() {
    let maxScrollLeft =
      cardRow.current.scrollWidth - cardRow.current.clientWidth;
    if (cardRow.current.scrollLeft == 0) {
      cardRow.current.scrollLeft = maxScrollLeft;
    } else {
      cardRow.current.scrollLeft -= cardSlider.current.clientWidth + 20;
    }
  }
  function sliderRight() {
    let maxScrollLeft =
      cardRow.current.scrollWidth - cardRow.current.clientWidth;

    if (cardRow.current.scrollLeft == maxScrollLeft) {
      cardRow.current.scrollLeft = 0;
    } else {
      cardRow.current.scrollLeft += cardSlider.current.clientWidth + 20;
    }
  }
  return (
    <div className="CardsRowwer">
      <div className="ScrollStarter">
        <div className="ScrollName">{props.title}</div>
        <div className="ScrollArrows">
          <div className="Scrolls ScrollLeft">
            <img onClick={sliderLeft} src={scrollArrow} />
          </div>
          <div className="Scrolls ScrollRight">
            <img onClick={sliderRight} src={scrollArrow} />
          </div>
        </div>
      </div>
      <div ref={cardRow} className="CardRow">
        {MoviesAPI.map((e, i) => (
          <Card
            reff={cardSlider}
            id={e.id}
            key={i}
            image={e.image}
            imdb={e.imdb}
            title={e.name}
            genres={e.genres}
          />
        ))}
      </div>
    </div>
  );
}
