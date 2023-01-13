import React, { useState } from "react";
import axios from "axios";
import Gallery from "./Gallery";

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
function GalaryImages() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    //console.log(e.target.value);
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => setData(response.data.photos.photo));
    console.log(search);
  };
  return (
    <div className="cantainer">
      <h2>Gallery snapshots</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleChange} />
        <br />
        <br />
        <input type="submit" name="Search" />
      </form>
      <br />
      {data.length > 1 ? <Gallery data={data} /> : <h4>No Data Loaded</h4>}
    </div>
  );
}

export default GalaryImages;
