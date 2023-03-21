export default function NewsMovie(props: { image: string }) {
  return (
    <div
      className="news-movie"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="blur"></div>
      <h4>ახალი სერია</h4>
    </div>
  );
}
