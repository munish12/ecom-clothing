import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage/hompage.component";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/hats" component={HatsPage} />
      </Switch>
    </>
  );
}

export default App;
