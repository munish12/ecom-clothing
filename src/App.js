import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage/hompage.component";
import shopPage from "./pages/shop/shop.component";
import { Header } from "./components/header/header-component";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={shopPage} />
      </Switch>
    </>
  );
}

export default App;
