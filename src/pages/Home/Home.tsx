import { MoviesAPI } from "../../API/MoviesAPI";
import Card from "../../components/Card/Card";

export default function Home() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {MoviesAPI.map((e, i) => (
        <Card
          key={i}
          image={e.image}
          imdb={e.imdb}
          title={e.name}
          genres={e.genres}
        />
      ))}
    </div>
  );
}
