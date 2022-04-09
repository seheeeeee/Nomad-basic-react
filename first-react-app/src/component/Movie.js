import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../style/Movie.module.css";

function Movie({ coverImg, title, summary, genres, id }) {
  return (
    <div className={styles.movie}>
      <img className={styles.movie_img} src={coverImg} alt={title} />
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul className={styles.movie__genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};
export default Movie;
