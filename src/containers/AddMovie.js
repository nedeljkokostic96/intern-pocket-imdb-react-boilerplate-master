import React, { useState } from 'react';
import AddMovieForm from '../component/AddMovieForm';
import OMDBForm from '../component/OMDBForm';

const panel = {
    border: '1px solid black',
    with: '100%',
    height: '80vh',
    textAlign: 'center',
};

const AddMovie = () => {
    const [manually, setManually] = useState(true);

    const handleMenyClick = (event) => {
        event.target.name === 'manually'
            ? setManually(true)
            : setManually(false);
    };

    return (
        <div style={panel}>
            <div>
                <button
                    onClick={handleMenyClick}
                    name="manually"
                    className="btn btn-outline-success"
                >
                    Add manually
                </button>
                <button
                    onClick={handleMenyClick}
                    name="omdb"
                    className="btn btn-outline-primary"
                >
                    Add from OMDB
                </button>
            </div>
            {manually ? <AddMovieForm /> : <OMDBForm />}
        </div>
    );
};

export default AddMovie;
