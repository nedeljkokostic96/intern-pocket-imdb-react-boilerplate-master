import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getGenres, getMoviesByGenre } from '../store/actions/MovieActions';

const select = {
    width: '80%',
    height: '3.3vh',
};

const filter = {
    marginBottom: '2vh',
};

class Filter extends React.Component {
    state = {
        genre: '',
    };

    handleChange = (event) => {
        this.setState({ genre: event.target.value });
    };

    componentDidMount() {
        this.props.getGenres();
    }

    handleClick = () => {
        this.props.getMoviesByGenre({ genreId: this.state.genre });
    };

    render() {
        return (
            <div style={filter}>
                <select
                    style={select}
                    name="genre"
                    onChange={this.handleChange}
                    defaultValue="0"
                >
                    <option value="0">All movies</option>
                    {this.props.genres.map((genre) => (
                        <option key={genre.id} value={genre.id}>
                            {genre.name}
                        </option>
                    ))}
                </select>
                <button onClick={this.handleClick}>Filter</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        genres: state.movie.genres,
    };
};

const mapDispatchToProps = {
    getGenres,
    getMoviesByGenre,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Filter));
