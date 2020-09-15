import React from 'react';

const MovieCard = ({ movie, onClick }) => {
    const image = {
        width: '100%',
        height: '60%',
        margin: '0%',
    };
    const card = {
        border: '1px solid black',
        background: 'rgba(0, 0, 0, 0.5)',
        minHeight: '80vh',
        minWidth: '10%',
        width: '30%',
        height: 'auto',
        display: 'inline-block',
        margin: '4vh 3%',
    };
    return (
        <div style={card}>
            <img style={image} src={movie.image_url} alt="Cant be loaded..." />
            <h3>{movie.title}</h3>
            <div>{movie.description}</div>
            <a href={'/movies/' + movie.id}>Details...</a>
        </div>
    );
};

export default MovieCard;
