import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    markMovieAsWatched,
    addMovieToList,
    removeMovieFromList,
} from '../store/actions/MovieActions';

const watched = {
    color: 'red',
    border: '1px solid red',
    width: '40%',
    textAlign: 'center',
    margin: '1% auto',
};

const button = {
    width: '40%',
};

class WatchListPanel extends React.Component {
    state = {
        inList: false,
        watch: {},
    };

    componentDidMount() {
        this.props.usersMovieList.forEach((element) => {
            if (element.movie.id === this.props.movie.id) {
                console.log(element);
                this.setState({ inList: true, watch: element });
            }
        });
    }

    handleClick = (event) => {
        switch (event.target.name) {
            case 'mark':
                console.log(event.target);
                this.props.markMovieAsWatched({ watchId: this.state.watch.id });
                break;
            case 'add':
                this.props.addMovieToList({ movieId: this.props.movie.id });
                break;
            case 'remove':
                this.props.removeMovieFromList({
                    watchId: this.state.watch.id,
                });
                break;
            default:
                return;
        }
    };

    render() {
        return (
            <div>
                <div>
                    {this.state.inList && this.state.watch.watched ? (
                        <h4 style={watched}>Watched</h4>
                    ) : (
                        ''
                    )}
                    {this.state.inList && !this.state.watch.watched ? (
                        <button
                            name="mark"
                            style={button}
                            className="btn btn-success"
                            onClick={this.handleClick}
                        >
                            Mark as watched
                        </button>
                    ) : (
                        ''
                    )}
                </div>
                <div>
                    {this.state.inList ? (
                        <button
                            name="remove"
                            style={button}
                            className="btn btn-danger"
                            onClick={this.handleClick}
                        >
                            Remove from watchlist
                        </button>
                    ) : (
                        <button
                            name="add"
                            style={button}
                            className="btn btn-warning"
                            onClick={this.handleClick}
                        >
                            Add to watchlist
                        </button>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        usersMovieList: state.movie.usersMovieList,
    };
};

const mapDispatchToProps = {
    markMovieAsWatched,
    addMovieToList,
    removeMovieFromList,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(WatchListPanel)
);
