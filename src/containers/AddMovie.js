import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { getGenres, addMovie } from '../store/actions/MovieActions';

class AddMovie extends React.Component {
    state = {
        title: '',
        description: '',
        image_url: '',
        genre: '',
    };

    componentDidMount() {
        this.props.getGenres();
    }

    submit = (form) => {
        console.log(form);
        let newMovieData = {
            title: form.title,
            description: form.description,
            image_url: form.image_url,
            genre_id: form.genre,
        };
        console.log(newMovieData);
        this.props.addMovie(newMovieData);
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
        image_url: Yup.string().required('Required'),
        genre: Yup.string()
            .min(1, 'Must be valid genre id!')
            .max(7, 'Must be valid genre id!')
            .required('Required'),
    });

    render() {
        return (
            <Formik
                onSubmit={this.submit}
                initialValues={this.state}
                validationSchema={this.signupSchema}
            >
                {() => (
                    <Form>
                        <Field name="title" type="text" placeholder="Title" />
                        <ErrorMessage component="div" name="title" />
                        <br />
                        <Field
                            name="description"
                            type="text"
                            placeholder="Description"
                        />
                        <ErrorMessage component="div" name="description" />
                        <br />
                        <Field
                            name="image_url"
                            type="text"
                            placeholder="Image URL"
                        />
                        <ErrorMessage component="div" name="image_url" />
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
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
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
    connect(mapStateToProps, mapDispatchToProps)(AddMovie)
);
