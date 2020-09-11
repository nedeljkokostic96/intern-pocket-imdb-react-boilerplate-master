import React from "react";

const MovieDetails = (props) => {
  const movieDetails = {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    border: "1px solid black",
    minHeight: "100vh",
    minWidth: "70%",
    textAlign: "center",
  };
  const titleStyle = {
    fontSize: "10vh",
  };
  const description = {
    borderBottom: "1px solid black",
    marginTop: "2vh",
  };
  const comments = {
    width: "80%",
    backgroundColor: "lightgreen",
    margin: "2vh 10%",
    minHeight: "40vh",
  };
  console.log(props);
  const movie = props.location.state;
  console.log(movie);
  return (
    <div className="container" style={movieDetails}>
      <h1 style={titleStyle}>{movie.title}</h1>
      <img src={movie.image_url} alt="Can not load from specified source..." />
      <div style={description}>{movie.description}</div>
      <div style={comments}>Comments</div>
    </div>
  );
};

export default MovieDetails;
