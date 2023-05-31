import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import "./App.css"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (postion) => {
        console.log(postion);
        this.setState({ lat: postion.coords.latitude });
      },
      (err) => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    const resultOk = this.state.lat && <div>Latitude: {this.state.lat}</div>
    const resultError = this.state.errorMessage && <div>Error: {this.state.errorMessage}</div>
    const resultLoading = (this.state.lat != null || this.state.errorMessage !== "" || (
        <div>Loading...</div>
      ))
    return (
      <div>
        {resultOk}
        {resultError}
        {resultLoading}
        {this.state.lat && <SeasonDisplay lat={this.state.lat} />}
      </div>
    );
  }
}

export default App;
