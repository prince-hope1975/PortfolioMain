import React from "react";
import {BrowserRouter as Router,
Switch,
Route,
Link} from "react-router-dom"
import Nav from "./components/Nav";
import Main from "./pages/Home";
import About from "./pages/About"
// import Projects from "./pages/Projects";

const App = () => {
  return (
    <Router>
      <div>
        <Nav Link={Link}/>
        <Switch>

        <Route path="/" exact >
          <Main />
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        </Switch>
      </div>
    </Router>
  );
};
// const About = ()=>(<div>About Us</div>)
export default App;
