import React from "react";
import SeasonDisplay from "./SeasonDisplay";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (postion) => {
        console.log(postion);
        this.setState({ lat: postion.coords.latitude });
      },
      (err) => console.log(err)
    );
  }

  render() {
    return (
      <div>
        <div>Latitude: {this.state.lat}</div>
        <SeasonDisplay />
      </div>
    );
  }
}

export default App;
