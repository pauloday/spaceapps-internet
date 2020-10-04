import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import About from './about';
import SimButton from './SimButton';
import Simulation from './Simulation';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <button href="/about" style={{color: "black", background: "dodgerblue", borderColor: "dodgerblue", borderRadius: "5px", border: "solid 1px"}}>About</button>
              </li>
          </ul>
        </nav>
        <SimButton type="lagrange" name="Lagrange1" lagrangeNum={1} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
