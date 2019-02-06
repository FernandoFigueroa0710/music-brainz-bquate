import React from "react";

const ArtistProfile = ({ id, album, name, score, description }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img
        alt="artist"
        src={`https://coverartarchive.org/release/${album}/front`}
      />
      <h3>{score}</h3>
      <br />
      <h2>{description}</h2>
    </div>
  );
};
export default ArtistProfile;
