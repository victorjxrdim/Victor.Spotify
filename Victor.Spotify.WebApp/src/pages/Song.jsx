import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const songId = useParams().id;

  const songArrayFiltered = songsArray.filter(
    (songArrayObj) => songArrayObj._id === songId
  )[0];

  const artistArrayFiltered = artistArray.filter(
    (artistArrayObj) => artistArrayObj.name === songArrayFiltered.artist
  )[0];

  const artistSongsArray = songsArray.filter(
    (songObj) => songObj.artist === artistArrayFiltered.name
  );

  const randomSongIndex = Math.floor(
    Math.random() * (artistSongsArray.length - 1)
  );

  const randomSongIndex2 = Math.floor(
    Math.random() * (artistSongsArray.length - 1)
  );

  const previousRandomSongId = artistSongsArray[randomSongIndex]._id;
  const nextRandomSongId = artistSongsArray[randomSongIndex2]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            src={songArrayFiltered.image}
            alt={`Imagem da Música ${songArrayFiltered.name}`}
          />
        </div>
      </div>

      <div className="song__bar">
        <Link
          to={`/artist/${artistArrayFiltered._id}`}
          className="song__artist-image"
        >
          <img
            src={artistArrayFiltered.image}
            alt={`Imagem do Artista ${artistArrayFiltered.name}`}
          />
        </Link>

        <Player
          songToPlay={songArrayFiltered}
          previousRandomSongId={previousRandomSongId}
          nextRandomSongId={nextRandomSongId}
          audio={songArrayFiltered}
        />

        <div>
          <p className="song__name">{songArrayFiltered.name}</p>
          <p>{artistArrayFiltered.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
