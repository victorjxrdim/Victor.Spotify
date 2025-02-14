import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = ({ 
  type = undefined 
}) => {
  return (
    <div className="main">
      {/* ItemList Artists */}
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={type === "artists" ? artistArray.length : 8}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}

      {/* ItemList Songs */}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={type === "songs" ? songsArray.length : 20}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
