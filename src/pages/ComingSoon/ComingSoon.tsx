import "./ComingSoon.css";
import scrollArrow from "../../images/icons/arrow.png";
import Card from "../../components/Card/Card";
import { MoviesAPI } from "../../API/MoviesAPI";
import CardSlider from "../../components/CardSlider/CardSlider";

export default function ComingSoon() {
  return (
    <div className="ComingSoon">
      <CardSlider title="დღეს" />

      <CardSlider title="ამ კვირას" />

      <CardSlider title="ამ თვეს" />

      <CardSlider title="ამ წელს" />
    </div>
  );
}
