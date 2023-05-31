import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  const imagesTree = images.map((i) => (
    <ImageCard key={i.id} image={i}/>
  ));
  return <div className="image-list">{imagesTree}</div>
};

export default ImageList;
