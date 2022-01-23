import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { CustomButton } from "../../components/custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";
import { SignInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.style.scss";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pasword: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", pasword: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <div className="sign-in">
          <h2>I already have an account</h2>
          <p className="mb-4">Sign in with your email and password</p>
          <Form onSubmit={this.handleSubmit}>
            <FormInput
              value={this.state.email}
              handleChange={this.handleChange}
              type="Email"
              placeholder="Enter email"
              name="email"
              label="Email"
              required
            />
            <FormInput
              value={this.state.password}
              handleChange={this.handleChange}
              type="password"
              placeholder="Enter password"
              name="password"
              label="Password"
              required
            />
          </Form>
          <CustomButton variant="dark" type="submit" size="lg px-5 mt-4 me-3">
            Sign in
          </CustomButton>
          <CustomButton variant="outline-dark" onClick={SignInWithGoogle}  size="lg px-5 mt-4">
            Sign in With Google
          </CustomButton>
        </div>
      </>
    );
  }
}
