import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getMovies } from '../store/actions/MovieActions';
import MovieCard from '../component/MovieCard';
import Pagination from '../component/Pagination';
import Search from '../component/Search';

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
        this.setState({ activePage: event.target.value });
        this.props.getMovies({ page: parseInt(event.target.value) });
    };

    renderMovies = () => {
        const data =
            this.props.movies.data === undefined
                ? this.props.movies
                : this.props.movies.data;
        return data.map((movie) => (
            <MovieCard
                key={movie.id}
                page={this.state.activePage}
                movie={movie}
            />
        ));
    };

    renderPagination = () => {
        if (this.props.movies.data !== undefined) {
            const data = this.props.movies;
            return (
                <div>
                    <Pagination
                        pagesCount={data.last_page}
                        currentButton={data.current_page}
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
                <Search />
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
