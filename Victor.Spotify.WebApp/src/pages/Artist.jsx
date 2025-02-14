import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import SongList from "../components/SongList";

const Artist = () => {
  const id = useParams().id;

  const artistObj = artistArray.filter(
    (artistObj) => artistObj._id === id
  )[0];

  const artistSongsArray = songsArray.filter(
    (songObj) => songObj.artist === artistObj.name
  );

  const randomSongIndex = Math.floor(
    Math.random() * (artistSongsArray.length - 1)
  );
  
  const randomSongId = artistSongsArray[randomSongIndex]._id;

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${artistObj.banner})`,
        }}
      >
        <h2 className="artist__title">{artistObj.name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>

        <SongList songsArray={artistSongsArray} />
      </div>

      <Link to={`/song/${randomSongId}`}>
        <FontAwesomeIcon
          className="single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
