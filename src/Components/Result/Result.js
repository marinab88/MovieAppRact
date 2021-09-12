import React from "react";

import './Result.css';

const Result = ({ movies }) => {
  
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  return (
    <div className="d-flex flex-row flex-wrap justify-content-center">
      {movies.map((element) => (
        <div className="card" key={element.id}>
          <img src={`${IMGPATH}${element.poster_path}`} alt=""  className="image" />
          <h5 className="text-light text-center" >{element.title}</h5>
        </div>
      ))}
    </div>
  );
}

export default Result;