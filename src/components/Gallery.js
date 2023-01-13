import React from "react";

const Gallery = ({ data }) => {
  return (
    <div>
      <div className="row">
        {data.map((image) => (
          <div className="col-md-4" key={image.id}>
            <img
              src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
              height="200"
              width="250"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
