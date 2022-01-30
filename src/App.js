import "./App.scss";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage/hompage.component";
import shopPage from "./pages/shop/shop.component";
import { Header } from "./components/header/header-component";
import { SignInAndSignUpPage } from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfleDocument } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser: user });
      // createUserProfleDocument(user);
      // console.log(user);
      if (userAuth) {
        const userRef = await createUserProfleDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          // console.log(snapshot.data());
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            () => {
              // console.log(this.state);
            }
          );
          console.log(this.state);
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={shopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </>
    );
  }
}

export default App;
