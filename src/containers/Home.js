import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    getMovies,
    getHotestMovies,
    getUsersMovieList,
} from '../store/actions/MovieActions';
import MovieCard from '../component/MovieCard';
import Pagination from '../component/Pagination';
import Search from '../component/Search';
import Filter from '../component/Filter';

const homeStyle = {
    textAlign: 'center',
    background: 'LightCyan',
    alignContent: 'center',
};

const content = {
    display: 'inline-block',
    borderLeft: '1px solid black',
    width: '80%',
    textAlign: 'left',
    marginTop: '2vh',
    paddingTop: '0px',
};

const sideBar = {
    margin: '0px',
    padding: '0px',
    height: 'auto',
    display: 'inline-block',
    float: 'left',
    width: '20%',
    marginTop: '2vh',
    textAlign: 'center',
};

const linkToHotest = {
    display: 'block',
    color: 'black',
    textDecoration: 'none',
    border: '1px solid red',
    width: '80%',
    margin: '1vh 10%',
};

class Home extends Component {
    state = {
        activePage: 1,
        numberOfHotest: 10,
    };

    componentDidMount() {
        this.props.getUsersMovieList();
        this.props.getMovies({ page: this.state.activePage });
        this.props.getHotestMovies({
            numberOfHotest: this.state.numberOfHotest,
        });
    }

    // componentWillUpdate(nextProps) {
    //     console.log(nextProps);
    // }

    handlePageChange = (event) => {
        this.setState({ activePage: event.target.value });
        this.props.getMovies({ page: parseInt(event.target.value) });
    };

    renderMovies = () => {
        const data =
            this.props.movies.data === undefined
                ? this.props.movies
                : this.props.movies.data;
        console.log(data);
        return data.map((movie) => (
            <MovieCard
                list={this.props.usersMovieList}
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
                <div style={sideBar}>
                    <Filter />
                    <h3>Hot movies</h3>
                    {this.props.hotestMovies.map((movie) => (
                        <a
                            style={linkToHotest}
                            key={movie.movie.id}
                            href={'/movies/' + movie.movie.id}
                        >
                            {movie.movie.title} [{movie.likes}]
                        </a>
                    ))}
                </div>
                <div style={content}>{this.renderMovies()}</div>
                {this.renderPagination()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movie.all,
        hotestMovies: state.movie.hotestMovies,
        usersMovieList: state.movie.usersMovieList,
    };
};

const mapDispatchToProps = {
    getMovies,
    getHotestMovies,
    getUsersMovieList,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
