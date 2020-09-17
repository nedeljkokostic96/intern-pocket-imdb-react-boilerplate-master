import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getGenres, getMoviesByGenre } from '../store/actions/MovieActions';

const style = {
    width: '20%',
    height: '100%',
    display: 'inline-block',
    float: 'left',
    marginTop: '2vh',
    paddingTop: '0px',
};

const select = {
    width: '80%',
    height: '3vh',
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
            <div style={style}>
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
