import React from 'react';
import { getSingleMovie } from '../store/actions/MovieActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const movieDetails = {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    border: '1px solid black',
    minHeight: '100vh',
    minWidth: '70%',
    textAlign: 'center',
};
const titleStyle = {
    fontSize: '10vh',
};
const description = {
    borderBottom: '1px solid black',
    marginTop: '2vh',
};
const comments = {
    width: '80%',
    backgroundColor: 'lightgreen',
    margin: '2vh 10%',
    minHeight: '40vh',
};

class MovieDetails extends React.Component {
    componentDidMount() {
        const path = this.props.location.pathname;
        const splittedPath = path.split('/');
        const movieId = splittedPath[splittedPath.length - 1];
        this.props.getSingleMovie({ id: movieId });
    }

    renderMovieDetails = () => {
        return (
            <div className="container" style={movieDetails}>
                <h1 style={titleStyle}>{this.props.movie.title}</h1>
                <img
                    src={this.props.movie.image_url}
                    alt="Can not load from specified source..."
                />
                <div style={description}>{this.props.movie.description}</div>
                <div style={comments}>Comments</div>
            </div>
        );
    };

    render() {
        return this.props.movie === undefined ? '' : this.renderMovieDetails();
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie.singleMovie,
    };
};

const mapDispatchToProps = {
    getSingleMovie,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
);
