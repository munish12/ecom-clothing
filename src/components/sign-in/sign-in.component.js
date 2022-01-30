import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { CustomButton } from "../../components/custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";
import { SignInWithGoogle, auth } from "../../firebase/firebase.utils";
import "./sign-in.style.scss";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    // this.setState({ email: "", password: "" });
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
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
              onChange={this.handleChange}
              type="Email"
              placeholder="Enter email"
              name="email"
              label="Email"
              required
              autoComplete="off"
            />
            <FormInput
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              placeholder="Enter password"
              name="password"
              label="Password"
              required
              autoComplete="off"
            />
            <CustomButton variant="dark" type="submit" size="lg px-5 mt-4 me-3">
              Sign in
            </CustomButton>
            <CustomButton
            variant="outline-dark"
            onClick={SignInWithGoogle}
            size="lg px-5 mt-4"
          >
            Sign in With Google
          </CustomButton>
          </Form>

   
        </div>
      </>
    );
  }
}
