import { MoviesAPI } from "../../API/MoviesAPI";
import Card from "../../components/Card/Card";
import "./Favorites.css";
export default function Favorites(props: {
  favorites: number[];
  setFavorites: any;
}) {
  let NoFavs: string = "";
  let getFavorites: any;
  if (props.favorites.length !== 0) {
    getFavorites = MoviesAPI.filter((e) => props.favorites.includes(e.id));
  } else {
    NoFavs = "ფავორიტები ცარიელია";
  }

  return (
    <div className="Favorites">
      <h4 className="header-text">{NoFavs == "" ? "ფავორიტები" : ""}</h4>
      <div className="favoritesRow">
        {NoFavs == "" ? (
          getFavorites.map((item: any) => (
            <Card
              key={item.id}
              id={item.id}
              image={item.image}
              imdb={item.imdb}
              title={item.name}
              genres={item.genres}
            />
          ))
        ) : (
          <div className="emptyFavs"> {NoFavs} </div>
        )}
      </div>
    </div>
  );
}
