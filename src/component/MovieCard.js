import React from 'react';
import Like from './Like';
import WatchListPanel from './WatchListPanel';

const card = {
    border: '1px solid black',
    background: 'rgba(0, 0, 0, 0.5)',
    minHeight: '100vh',
    minWidth: '10%',
    width: '30%',
    height: 'auto',
    display: 'inline-block',
    margin: '0vh 3% 4vh',
    textAlign: 'center',
};

const link = {
    color: 'white',
    fontSize: '2vh',
    textAlign: 'center',
    margin: '0% 40%',
};

const MovieCard = ({ movie, page }) => {
    const image = {
        width: '100%',
        height: '60%',
        margin: '0%',
    };
    return (
        <div style={card}>
            <img style={image} src={movie.image_url} alt="Cant be loaded..." />
            <h3>{movie.title}</h3>
            <h4>{movie.genre.name}</h4>
            <p>Views: {movie.views}</p>
            <div>{movie.description}</div>
            <a style={link} href={'/movies/' + movie.id}>
                Details...
            </a>
            <Like page={page} reactions={movie.likes} movieId={movie.id} />
            <WatchListPanel movie={movie} />
        </div>
    );
};

export default MovieCard;
