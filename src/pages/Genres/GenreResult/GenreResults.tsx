import "./GenreResults.css";
import { MoviesAPI } from "../../../API/MoviesAPI";
import Card from "../../../components/Card/Card";
import { useLocation, useParams } from "react-router";
export default function GenreResults() {
  const params = useParams();

  let genreToArray = (index: number) => {
    let element = MoviesAPI[index].genres
      .toLowerCase()
      .replaceAll(",", "")
      .split(" ");

    return element;
  };

  return (
    <div>
      {MoviesAPI.map((e: any, i) =>
        params.genre &&
        genreToArray(i).includes(params.genre?.toLowerCase()) ? (
          <Card
            id={e.id}
            image={e.image}
            imdb={e.imdb}
            title={e.title}
            genres={e.genres}
            reff={undefined}
          />
        ) : (
          false
        )
      )}
    </div>
  );
}
