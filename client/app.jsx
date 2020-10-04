import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import About from './about';
import Simulation from './Simulation';

const active = {
  fontWeight: 'bold',
  color: 'red',
};

const Container = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-end',
  backgroundColor: 'black',
};

const button = {
  display: 'inline-block',
  padding: '0.35em 1.2em',
  border: '0.1em solid #FFFFFF',
  margin: '0 0.3em 0.3em 0',
  borderRadius: '0.12em',
  boxSizing: 'border-box',
  textDecoration: 'none',
  fontFamily: "'Roboto',sans-serif",
  fontWeight: '300',
  color: '#FFFFFF',
  textAlign: 'center',
  transition: 'all 0.2s',
};

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="container" style={Container}>
            <div className="button-container" style={Container}>
              <div className="button" style={button}>
                <NavLink to="/" activeStyle={active}>Simulation</NavLink>
              </div>
              <div className="button" style={button}>
                <NavLink to="/about" showModal>About</NavLink>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/about">
            <About showModal />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
