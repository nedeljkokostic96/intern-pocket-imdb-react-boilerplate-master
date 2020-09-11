import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../../store/actions/AuthActions";

class Register extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  };

  handleInputChange = (field) => (event) =>
    this.setState({ [field]: event.target.value });

  submit = (form) => {
    let registerData = {
      email: form.email,
      password: form.password,
      name: form.name,
    };
    this.props.register(registerData);
  };

  signupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .max(255, "Too Long!")
      .required("Required"),
    password: Yup.string().min(6, "Too short").required("Required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    name: Yup.string()
      .min(2, "Too Short!")
      .max(255, "Too Long!")
      .required("Required"),
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
            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage component="div" name="email" />
            <br />
            <Field name="password" type="password" placeholder="Password" />
            <ErrorMessage component="div" name="password" />
            <br />
            <Field
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
            />
            <ErrorMessage component="div" name="confirmPassword" />
            <br />
            <Field name="name" type="text" placeholder="Name" />
            <ErrorMessage component="div" name="name" />
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
    registerError: state.error.registerError,
  };
};

const mapDispatchToProps = {
  register,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Register)
);
