import React from 'react';

const comment = {
    width: '100%',
    height: 'auto',
    margin: '1vh 0vw',
    border: '1px solid black',
    backgroundColor: 'yellowgreen',
};

const writter = {
    width: '20%',
    display: 'inline-block',
    float: 'left',
};

const body = {
    width: '80%',
    height: '100%',
    borderLeft: '1px solid black',
    display: 'inline-block',
};

const Comment = (props) => {
    return (
        <div style={comment}>
            <div style={writter}>{props.comment.user.name}</div>
            <div style={body}>{props.comment.body}</div>
        </div>
    );
};

export default Comment;
