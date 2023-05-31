import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0, orientation: null };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log("load listener");
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const width = this.imageRef.current.clientWidth;
    const orientation = height > width ? 'vertical' : 'horizontal'
    const spans = Math.ceil(height / 10);
    this.setState({ spans, orientation });
  };

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          src={this.props.image.urls.regular}
          alt={this.props.image.alt_description}
          title={this.state.orientation}
        />
      </div>
    );
  }
}

export default ImageCard;
