import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getMovieFromOMDB, addMovie } from '../store/actions/MovieActions';
import { debounce } from 'lodash';

const form = {
    margin: '20vh auto',
    width: '30%',
    height: '30vh',
};

class OMDBForm extends React.Component {
    state = {
        title: '',
        genre: '',
        image_url: '',
        description: '',
        noSuchMovieError: '',
    };

    findMovie = debounce((value) => {
        this.props.getMovieFromOMDB({ title: value });
    }, 750);

    handleChange = (event) => {
        const { value } = event.target;
        this.setState({ title: value, noSuchMovieError: '' });
        if (value.length > 0) {
            this.findMovie(value);
        } else {
            this.setState({
                title: '',
                genre: '',
                image_url: '',
                description: '',
            });
        }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.omdbMovie.title) {
            this.setState({
                title: nextProps.omdbMovie.title,
                description: nextProps.omdbMovie.description,
                image_url: nextProps.omdbMovie.image_url,
                genre: nextProps.omdbMovie.genre,
            });
        } else {
            this.setState({
                noSuchMovieError: 'Trazeni film ne postoji!',
                genre: '',
                image_url: '',
                description: '',
            });
        }
    }

    submit = () => {
        this.props.addMovie(this.state);
    };

    render() {
        return (
            <div style={form}>
                <input
                    style={{ minWidth: '180px' }}
                    value={this.state.title || ''}
                    onChange={this.handleChange}
                    type="text"
                    name="title"
                    placeholder="Title"
                />
                <p
                    style={{
                        display:
                            this.state.noSuchMovieError === ''
                                ? 'none'
                                : 'block',
                    }}
                >
                    {this.state.noSuchMovieError}
                </p>
                <br />
                <input
                    disabled
                    style={{ minWidth: '180px' }}
                    name="image_url"
                    defaultValue={this.state.image_url || ''}
                    placeholder="Image URL"
                    onChange={() => {}}
                    type="text"
                />
                <br />
                <input
                    disabled
                    style={{ minWidth: '180px' }}
                    defaultValue={this.state.genre || ''}
                    name="genre"
                    placeholder="Genre"
                    onChange={() => {}}
                    type="text"
                />
                <br />

                <textarea
                    disabled
                    style={{ minWidth: '180px' }}
                    defaultValue={this.state.description || ''}
                    name="description"
                    placeholder="Description"
                    onChange={() => {}}
                />
                <br />

                <button onClick={this.submit} className="btn btn-success">
                    Add movie
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        omdbMovie: state.movie.movieFromOMDB,
    };
};

const mapDispatchToProps = {
    getMovieFromOMDB,
    addMovie,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(OMDBForm)
);
