import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { getGenres, addMovie } from '../store/actions/MovieActions';

const formStyle = {
    margin: '10vh auto',
};

class AddMovieForm extends React.Component {
    state = {
        title: '',
        description: '',
        image_url: '',
        genre: '',
        image: '',
        imageUploadError: '',
    };

    componentDidMount() {
        this.props.getGenres();
    }

    submit = (form, { resetForm }) => {
        if (this.state.image === '') {
            this.setState({
                imageUploadError:
                    'Missing image! Upload image to complete action...',
            });
        }
        let newMovieData = {
            title: form.title,
            image_url: '',
            description: form.description,
            genre_id: form.genre,
            image: this.state.image,
        };
        this.props.addMovie(newMovieData);
        resetForm({});
        this.setState({ image: '' });
    };

    onChangeImage = (e) => {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        console.log(files);
        this.createImage(files[0]);
    };
    createImage = (file) => {
        let reader = new FileReader();
        reader.onload = (e) => {
            this.setState({
                image: e.target.result,
            });
        };
        reader.readAsDataURL(file);
    };

    signupSchema = Yup.object().shape({
        title: Yup.string()
            .min(3, 'Too Short!')
            .max(255, 'Too Long!')
            .required('Required'),
        description: Yup.string()
            .min(2, 'Too Short!')
            .max(255, 'Too Long!')
            .required('Required'),
        genre: Yup.string()
            .min(1, 'Must be valid genre id!')
            .max(7, 'Must be valid genre id!')
            .required('Required'),
    });

    render() {
        return (
            <div style={formStyle}>
                <Formik
                    onSubmit={this.submit}
                    initialValues={this.state}
                    validationSchema={this.signupSchema}
                >
                    {() => (
                        <Form>
                            <Field
                                name="title"
                                type="text"
                                placeholder="Title"
                            />
                            <ErrorMessage component="div" name="title" />
                            <br />
                            <Field
                                name="description"
                                type="text"
                                placeholder="Description"
                            />
                            <ErrorMessage component="div" name="description" />
                            <br />
                            <input
                                type="file"
                                accept="jpg/png"
                                onChange={this.onChangeImage}
                            />
                            <div
                                display={
                                    this.state.imageUploadError === ''
                                        ? 'none'
                                        : 'display'
                                }
                            >
                                {this.state.imageUploadError}
                            </div>
                            <br />
                            <Field name="genre" as="select">
                                {this.props.genres.map((genre) => (
                                    <option key={genre.id} value={genre.id}>
                                        {genre.name}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage component="div" name="Genre" />
                            <br />
                            <button
                                className="btn btn-outline-warning"
                                type="submit"
                            >
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
                {this.state.image !== '' ? (
                    <img
                        src={this.state.image}
                        width="300px"
                        height="200px"
                        alt="Cannot show"
                    />
                ) : (
                    ''
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        genres: state.movie.genres,
    };
};

const mapDispatchToProps = {
    getGenres,
    addMovie,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AddMovieForm)
);
