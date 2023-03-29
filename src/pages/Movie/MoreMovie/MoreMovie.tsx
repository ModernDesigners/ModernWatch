import { MoviesAPI } from "../../../API/MoviesAPI";
import { useEffect } from "react";
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
