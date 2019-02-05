import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: {}
    };
  }

  componentDidMount() {
    this.getArtists();
  }

  getArtists() {
    fetch("http://musicbrainz.org/ws/2/artist?query=artists&limit=25&fmt=json")
      .then(response => response.json())
      .then(artists => this.setState({ artists: artists }));
  }
  render() {
    console.log(this.state.artists);
    return (
      <div className="App">
        <header>
          <h1>This is the parent component</h1>
        </header>
      </div>
    );
  }
}

export default App;
