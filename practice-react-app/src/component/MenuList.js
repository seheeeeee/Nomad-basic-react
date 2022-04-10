import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function MenuList() {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <ol>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/detail/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ol>
  );
}
export default MenuList;
