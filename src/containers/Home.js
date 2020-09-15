import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getMovies } from '../store/actions/MovieActions';
import MovieCard from '../component/MovieCard';

const homeStyle = {
    textAlign: 'center',
    background: 'aliceblue',
};

class Home extends Component {
    componentDidMount() {
        this.props.getMovies();
    }

    renderMovies = () => {
        const data =
            this.props.movies.data === undefined
                ? this.props.movies
                : this.props.movies.data;
        return data.map((movie) => <MovieCard key={movie.id} movie={movie} />);
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
