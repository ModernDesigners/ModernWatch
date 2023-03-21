import { useNavigate } from "react-router";

interface genreCardInterface {
  title: string;
  image: string;
  link: string;
}
export default function GenreCard({ title, image, link }: genreCardInterface) {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate(link);
  };
  return (
    <div
      className="genre-card"
      onClick={navigateTo}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h4>{title}</h4>
      <div className="blur-filter"></div>
    </div>
  );
}
