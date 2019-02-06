import React from "react";

const ArtistProfile = ({ id, album, name, score, description }) => {
  return (
    <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <h3>{name}</h3>
      <img
        alt="artist"
        src={`https://coverartarchive.org/release/${album}/front`}
      />
      <p>score:{score}</p>
      <br />
      <p>Description:{description}</p>
    </div>
  );
};
export default ArtistProfile;
