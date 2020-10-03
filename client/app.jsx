import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Spacekit from '../spacekit';

const Home = React.lazy(() => import('./home.jsx'));
const About = React.lazy(() => import('./about.jsx'));
const Simulation = React.lazy(() => import('./simulation.jsx'));

function App() {
  // esli9n disable-next-line no-undef
  const viz = new Spacekit.Simulation(document.getElementById('sim'), {
    basePath: './',
    startDate: Date.now(),
  });
  console.log(viz);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Internet On Mars!</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/simulation">Simulation</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/simulation">
            <Simulation />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
