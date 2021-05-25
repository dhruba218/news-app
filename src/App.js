
import './App.css';
import Home from "./Routing/Home";
import About from "./Routing/About";
import Contact from "./Routing/Contact";
import Error from "./Routing/Error";

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>

        
        <Link to=""> </Link>
        <Link to="/about"> </Link>
        <Link to="/contact"> </Link>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          {/* <Redirect to="/about" /> */}
          <Route component={Error} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
