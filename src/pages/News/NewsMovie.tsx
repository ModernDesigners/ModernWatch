import logo from "../../images/LogoH.webp";
export default function NewsMovie(props: { image: string }) {
  function hideLoader(img: any) {
    const cardId = img.parentNode;
    const loader = cardId.children[0];
    loader.style.display = "none";
  }
  return (
    <div className="news-movie">
      <div className="cardLoader">
        <img className="loaderImg" src={logo} />
      </div>
      <img src={props.image} onLoad={(e) => hideLoader(e.target)} />

      <div className="blur"></div>
      <h4>ახალი სერია</h4>
    </div>
  );
}
