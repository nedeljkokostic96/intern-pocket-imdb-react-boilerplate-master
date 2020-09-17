import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addReaction } from '../store/actions/MovieActions';

const likeButton = {
    minWidth: '10vw',
};

const likePanel = {
    margin: '2vh',
    bootom: '3vh',
};

class Like extends React.Component {
    state = {
        likes: 0,
        dislikes: 0,
    };

    componentDidMount() {
        let likes = 0;
        let dislikes = 0;
        this.props.reactions.map((reaction) =>
            reaction.liked ? likes++ : dislikes++
        );
        this.setState({ likes, dislikes });
    }

    handleClick = (event) => {
        const liked = event.target.name === 'like' ? 1 : 0;
        this.props.addReaction({
            liked: liked,
            movieId: this.props.movieId,
        });
        this.props.refresh();
    };

    render() {
        return (
            <div style={likePanel}>
                <button
                    name="like"
                    style={likeButton}
                    className="btn btn-primary"
                    onClick={this.handleClick}
                >
                    Like [{this.state.likes}]
                </button>
                <button
                    name="dislike"
                    style={likeButton}
                    className="btn btn-danger"
                    onClick={this.handleClick}
                >
                    Dislike [{this.state.dislikes}]
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addReaction,
};

export default withRouter(connect(null, mapDispatchToProps)(Like));
