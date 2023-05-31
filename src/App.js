import React from "react";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import ImageList from "./components/ImageList";
import "./App.css"

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    console.log(`Searching for: ${term}`);
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296",
      },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div>Found: {this.state.images.length} images</div>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
