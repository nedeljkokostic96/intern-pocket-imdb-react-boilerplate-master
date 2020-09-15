import React from 'react';

const mybtn = {
    fontWeight: 'bold',
    margin: '1vh 0.3vw',
};

const Pagination = (props) => {
    const buttons = [];
    for (let i = 1; i <= props.pagesCount; i++) {
        const buttonClass =
            props.currentButton === i ? 'btn btn-secondary' : 'btn btn-light';
        buttons.push(
            <button
                type="button"
                key={i}
                style={mybtn}
                className={buttonClass}
                onClick={props.onClick}
                value={i}
                name={'button' + i}
            >
                {i}
            </button>
        );
    }
    return <div>{buttons}</div>;
};

export default Pagination;
