import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { logIn } from "../../store/actions/AuthActions";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (field) => (event) =>
    this.setState({ [field]: event.target.value });

  submit = (form) => {
    let logInData = {
      email: form.email,
      password: form.password,
    };
    this.props.logIn(logInData);
  };

  signupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .max(255, "Too Long!")
      .required("Required"),
    password: Yup.string().required("Required"),
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
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginError: state.error.loginError,
  };
};

const mapDispatchToProps = {
  logIn,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
