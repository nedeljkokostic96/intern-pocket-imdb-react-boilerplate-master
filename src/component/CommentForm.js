import React from 'react';
import { addComment } from '../store/actions/MovieActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const textArea = {
    width: '80%',
    height: '5vh',
    display: 'inline-block',
};

const button = {
    width: '19%',
    height: '5vh',
    marginTop: '0px',
    display: 'inline-block',
    float: 'right',
    disabled: true,
};

const commentPanel = {
    padding: '2vh 1vw',
};

class CommentForm extends React.Component {
    state = {
        text: '',
        isValid: false,
    };

    componentDidMount() {}

    checkValidity = () => {
        return this.state.text.length > 0 && this.state.text.length <= 500;
    };

    handleChange = (event) => {
        this.setState({ text: event.target.value });
    };

    handleClick = () => {
        if (this.checkValidity()) {
            this.props.addComment({
                commentBody: this.state.text,
                movieId: this.props.movieId,
            });
            this.setState({ text: '' });
            this.props.refresh();
        }
    };

    render() {
        return (
            <div style={commentPanel}>
                <textarea
                    value={this.state.text}
                    style={textArea}
                    onChange={this.handleChange}
                />
                {this.checkValidity() ? (
                    <button style={button} onClick={this.handleClick}>
                        Add comment
                    </button>
                ) : (
                    <button style={button} disabled>
                        Add comment
                    </button>
                )}
            </div>
        );
    }
}

const mapDispatchToProps = {
    addComment,
};

export default withRouter(connect(null, mapDispatchToProps)(CommentForm));
