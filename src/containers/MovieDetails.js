import React from 'react';
import {
    getSingleMovie,
    incrementViews,
    getCommentsForMovie,
    getRelatedMovies,
} from '../store/actions/MovieActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Like from '../component/Like';
import CommentForm from '../component/CommentForm';
import Comment from '../component/Comment';
import WatchListPanel from '../component/WatchListPanel';

const movieDetails = {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    border: '1px solid black',
    minHeight: '100vh',
    minWidth: '70%',
    textAlign: 'center',
    display: 'inline-block',
};
const titleStyle = {
    fontSize: '10vh',
};
const description = {
    borderBottom: '1px solid black',
    marginTop: '2vh',
};
const commentsPanel = {
    width: '80%',
    backgroundColor: 'lightgreen',
    margin: '2vh 10%',
    minHeight: '20vh',
    height: 'auto',
};

const comments = {
    padding: '2vh 1vw',
};

const sideBar = {
    display: 'inline-block',
    width: '15%',
    float: 'left',
    textAlign: 'center',
};

const link = {
    display: 'block',
    color: 'black',
    textDecoration: 'none',
    border: '1px solid red',
    width: '80%',
    margin: '1vh 10%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
};

class MovieDetails extends React.Component {
    state = {
        movieId: 0,
        commentPage: 1,
    };

    componentDidMount() {
        const path = this.props.location.pathname;
        const splittedPath = path.split('/');
        const movieId = splittedPath[splittedPath.length - 1];
        this.setState({ movieId: movieId });
        this.props.incrementViews({ movieId: parseInt(movieId) });
        this.props.getSingleMovie({ id: movieId });
        this.props.getCommentsForMovie({
            movieId: movieId,
            page: this.state.commentPage,
        });
        this.props.getRelatedMovies({
            movieId: movieId,
        });
    }

    refreshPage = () => {
        this.props.getSingleMovie({ id: this.state.movieId });
    };

    loadMoreComments = () => {
        if (
            this.props.comments.current_page + 1 <=
            this.props.comments.last_page
        ) {
            this.setState({
                commentPage: this.props.comments.current_page + 1,
            });
            this.props.getCommentsForMovie({
                movieId: this.state.movieId,
                page: this.props.comments.current_page + 1,
            });
        }
    };

    renderMovieDetails = () => {
        return (
            <div className="container" style={movieDetails}>
                <h1 style={titleStyle}>{this.props.movie.title}</h1>
                <h4>{this.props.movie.genre.name}</h4>
                <p>Views: {this.props.movie.views}</p>
                <img
                    src={
                        this.props.movie.image_url !== null
                            ? this.props.movie.image_url
                            : this.props.movie.image.full_size
                    }
                    alt="Can not load from specified source..."
                />
                <div style={description}>{this.props.movie.description}</div>
                <Like
                    page="0"
                    reactions={this.props.movie.likes}
                    movieId={this.props.movie.id}
                />
                <WatchListPanel movie={this.props.movie} />
                <div style={commentsPanel}>
                    <CommentForm
                        movieId={this.state.movieId}
                        refresh={this.refreshPage}
                    />
                    <div style={comments}>
                        <h3>Comments</h3>
                        {this.props.comments.data !== undefined
                            ? this.props.comments.data.map((comment) => (
                                  <Comment key={comment.id} comment={comment} />
                              ))
                            : ''}
                        <button onClick={this.loadMoreComments}>
                            Load more...
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    renderRelatedMovies = () => {
        return (
            <div style={sideBar}>
                <h3>
                    Related movies in genre{' '}
                    {this.props.movie.genre === undefined
                        ? ''
                        : this.props.movie.genre.name}
                </h3>
                {this.props.relatedMovies.map((movie) => (
                    <a style={link} key={movie.id} href={movie.id}>
                        {movie.title}
                    </a>
                ))}
            </div>
        );
    };

    render() {
        return (
            <div>
                {this.renderRelatedMovies()}
                {this.props.movie.likes === undefined
                    ? ''
                    : this.renderMovieDetails()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie.singleMovie,
        comments: state.movie.comments,
        relatedMovies: state.movie.relatedMovies,
        usersMovieList: state.movie.usersMovieList,
    };
};

const mapDispatchToProps = {
    getSingleMovie,
    incrementViews,
    getCommentsForMovie,
    getRelatedMovies,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
);
