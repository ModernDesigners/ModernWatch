import "./MoreMovie.css";
import { MoviesAPI } from "../../../API/MoviesAPI";
import scrollArrow from "../../../images/icons/arrow.png";
import { useEffect } from "react";
import Card from "../../../components/Card/Card";
import CardSlider from "../../../components/CardSlider/CardSlider";
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
      <CardSlider title="მეტი" />
    </div>
  );
}
