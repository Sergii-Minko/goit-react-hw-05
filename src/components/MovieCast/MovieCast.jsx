import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/movies-api";
import css from "./MovieCast.module.css";
import Loader from "../Loader/Loader";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetchMovieCast(movieId).then(setCast);
    setLoader(false);
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      <div className={css.wrapper}>
        {cast && cast.length > 0 ? (
          <ul className={css.list}>
            {cast
              .filter(({ profile_path }) => profile_path)
              .map(({ id, name, character, profile_path }) => (
                <li className={css.item} key={id}>
                  <img
                    className={css.profileImage}
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                  />
                  <h3 className={css.title}>{name}</h3>
                  <p className={css.description}>{character}</p>
                </li>
              ))}
          </ul>
        ) : (
          <p className={css.noCast}>We do not have any cast for this movie</p>
        )}
      </div>
    </>
  );
};

export default MovieCast;
