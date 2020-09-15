import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getMovies } from '../store/actions/MovieActions';
import MovieCard from '../component/MovieCard';
import Pagination from '../component/Pagination';

const homeStyle = {
    textAlign: 'center',
    background: 'LightCyan',
    alignContent: 'center',
};

class Home extends Component {
    state = {
        activePage: 1,
    };

    componentDidMount() {
        this.props.getMovies({ page: this.state.activePage });
    }

    handlePageChange = (event) => {
        this.props.getMovies({ page: parseInt(event.target.value) });
    };

    renderMovies = () => {
        const data =
            this.props.movies.data === undefined
                ? this.props.movies
                : this.props.movies.data;
        return data.map((movie) => <MovieCard key={movie.id} movie={movie} />);
    };

    renderPagination = () => {
        if (this.props.movies.data !== undefined) {
            return (
                <div>
                    <Pagination
                        pagesCount={this.props.movies.last_page}
                        currentButton={this.props.movies.current_page}
                        onClick={this.handlePageChange}
                    />
                </div>
            );
        }
    };

    render() {
        return (
            <div style={homeStyle}>
                <p>Welcome to Pocket IMDb</p>
                <h4>Movies</h4>
                {this.renderPagination()}
                {this.renderMovies()}
                {this.renderPagination()}
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
