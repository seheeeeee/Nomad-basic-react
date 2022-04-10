import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../component/Button";

function Detail() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const getDetails = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setDetails(json.data.movie);
  };
  useEffect(() => {
    getDetails();
  }, [id]);
  return (
    <div>
      <h2>{details.title}</h2>
      <img src={details.medium_cover_image} alt={details.title} />
      <p>{details.description_full}</p>
      <Button text="Prev" />
    </div>
  );
}

export default Detail;
