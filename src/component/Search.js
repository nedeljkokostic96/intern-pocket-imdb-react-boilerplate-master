import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getMoviesLike } from '../store/actions/MovieActions';
import { debounce } from 'lodash';

const searchStyle = {
    height: 'auto',
    width: '100%',
    textAlign: 'center',
};

const searchInner = {
    height: 'auto',
    minWidth: '158px',
    width: '8.2vw',
    backgroundColor: 'white',
    border: '1px solid black',
    borderTop: '0px',
    marginLeft: 'auto',
    marginRight: 'auto',
};

class Search extends React.Component {
    state = {
        search: '',
    };

    componentDidMount() {
        document.addEventListener('click', (event) => {
            const searchBox = document.getElementById('search-box');
            const targetElement = event.target;
            if (targetElement !== searchBox) {
                this.setState({ search: '', all: [] });
            }
        });
    }

    handleChange = (event) => {
        const { value } = event.target;
        this.setState((prevState) => {
            return {
                search: value,
            };
        });
        this.props.getMoviesLike({ title: value });
    };

    render() {
        const allSearches = this.props.movies.map((search) => (
            <div key={search.id}>
                <a href={'movies/' + search.id}>{search.title}</a>
            </div>
        ));
        return (
            <div style={searchStyle}>
                <div style={searchInner} id="search-box">
                    <input
                        type="text"
                        name="search"
                        value={this.state.search}
                        placeholder="Search"
                        onChange={this.handleChange}
                    />
                    {allSearches}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movie.moviesLike,
    };
};

const mapDispatchToProps = {
    getMoviesLike,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
