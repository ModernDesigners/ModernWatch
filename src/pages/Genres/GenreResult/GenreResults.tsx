import "./GenreResults.css";
import { MoviesAPI } from "../../../API/MoviesAPI";
import Card from "../../../components/Card/Card";
import { useLocation, useParams } from "react-router";
import { GenresAPI } from "../../../API/GenresAPI";
export default function GenreResults() {
  const params = useParams();

  let genreToArray = (index: number) => {
    let element = MoviesAPI[index].genres
      .toLowerCase()
      .replaceAll(",", "")
      .split(" ");

    return element;
  };
  let getGenreName = "არასწორი ჟანრის ტიპი";
  let seeGenre = GenresAPI.filter((e) => e.navigateTo == params.genre);
  if (seeGenre.length == 1) {
    getGenreName = seeGenre[0].title;
  }

  return (
    <>
      <div className="genreTitle">{getGenreName}</div>
      <div className="genre-results">
        {MoviesAPI.map((e: any, i) =>
          params.genre &&
          genreToArray(i).includes(params.genre?.toLowerCase()) ? (
            <Card
              key={e.id}
              id={e.id}
              image={e.image}
              imdb={e.imdb}
              title={e.name}
              genres={e.genres}
            />
          ) : (
            false
          )
        )}
      </div>
    </>
  );
}
