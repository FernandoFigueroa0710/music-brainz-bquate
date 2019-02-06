import React, { Component } from "react";
import "./App.css";
import ArtistList from "../components/artist/artist_list";
class App extends Component {
  constructor() {
    super();
    this.state = {
      artistslist: [],
      albumlist: []
    };
  }

  componentDidMount() {
    this.getArtists();
    //this.getAlbums();
  }
  // getAlbums() {
  //   fetch("https://coverartarchive.org/release/{mbid}/front")
  //     .then(response => response.json())
  //     .then(data => this.setState({ albumlist: data.images }));
  // }
  getArtists() {
    fetch("http://musicbrainz.org/ws/2/artist?query=artists&limit=25&fmt=json")
      .then(response => response.json())
      .then(data => this.setState({ artistslist: data.artists }));
  }

  render() {
    console.log(this.state.artistslist);
    return (
      <div className="App">
        <header>
          <h1>Welcome to musicbrainz</h1>
          <ArtistList artistList={this.state.artistslist} />
        </header>
      </div>
    );
  }
}

export default App;
