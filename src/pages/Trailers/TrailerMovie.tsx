export default function TrailerMovie(props: { title: string; image: string }) {
  return (
    <div
      className="trailer-movie"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="blur"></div>
      <h5 className="trailer-title">{props.title}</h5>
    </div>
  );
}
