import React from "react";
import ArtistProfile from "./artist_profile";

const ArtistList = ({ artistList }) => {
  return (
    <div>
      {artistList.map((artist, i) => {
        return (
          <ArtistProfile
            key={i}
            id={artist.id}
            name={artist.name}
            album={artist["type-id"]}
            score={artist.score}
            description={artist.disambiguation}
          />
        );
      })}
    </div>
  );
};

export default ArtistList;
