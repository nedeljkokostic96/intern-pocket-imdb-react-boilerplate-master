import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getMovies } from "../store/actions/MovieActions";
import MovieCard from "../component/MovieCard";

const homeStyle = {
  textAlign: "center",
  background: "aliceblue",
};

class Home extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  renderMovies = () => {
    return this.props.movies.map((movie) => (
      <a href="" onClick={() => this.props.history.push("/movies", movie)}>
        <MovieCard key={movie.id} movie={movie} />
      </a>
    ));
  };

  render() {
    return (
      <div style={homeStyle}>
        <p>Welcome to Pocket IMDb</p>
        <h4>Movies</h4>
        {this.renderMovies()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movie.all,
  };
};

const mapDispatchToProps = {
  getMovies,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
