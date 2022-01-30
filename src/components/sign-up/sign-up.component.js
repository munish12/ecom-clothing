import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { CustomButton } from "../../components/custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";
import { auth, createUserProfleDocument } from "../../firebase/firebase.utils";
import "../sign-in/sign-in.style.scss";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log("got email");
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password dont match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfleDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <>
        <div className="sign-up">
          <h2>I do not have an account</h2>
          <p className="mb-4">Sign in with your email and password</p>
          <Form onSubmit={this.handleSubmit}>
            <FormInput
              value={displayName}
              onChange={this.handleChange}
              type="text"
              placeholder="Enter email"
              name="displayName"
              label="Display Name"
              required
              autoComplete="off"
            />
            <FormInput
              value={email}
              onChange={this.handleChange}
              type="Email"
              placeholder="Enter email"
              name="email"
              label="Email"
              required
              autoComplete="off"
            />
            <FormInput
              value={password}
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
              name="password"
              label="Password"
              required
              autoComplete="off"
            />
            <FormInput
              value={confirmPassword}
              onChange={this.handleChange}
              type="password"
              placeholder="Enter password"
              name="confirmPassword"
              label="Confirm Password"
              required
              autoComplete="off"
            />
            <CustomButton variant="dark" type="submit" size="lg px-5 mt-4 me-3">
              Sign Up
            </CustomButton>
          </Form>
        </div>
      </>
    );
  }
}
