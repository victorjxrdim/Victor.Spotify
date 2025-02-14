import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleItem = ({
  _id,
  image,
  name,
  artist = undefined,
  idPath,
}) => {
  return (
    <Link to={`${idPath}/${_id}`} className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            src={image}
            alt={`Imagem do Artista ${name}`}
            className="single-item__image"
          />
        </div>
        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
      </div>

      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__title">{name}</p>
          {/* Verifica se é "null" ou undefined, se for ele utiliza o outro valor, se não utiliza ele mesmo. */}
          <p className="single-item__type">{artist ?? "Artista"}</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleItem;
