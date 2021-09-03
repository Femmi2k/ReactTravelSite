import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import SignUp from "./components/Pages/SignUp";
import Products from "./components/Pages/Products";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/ReactTravelSite" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/products" exact component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
