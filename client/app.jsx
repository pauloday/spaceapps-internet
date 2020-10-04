import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import About from './about';
import SimButton from './SimButton';
import Simulation from './Simulation';

const active = {
  color: "black",
  background: "dodgerblue",
  borderColor: "dodgerblue",
  borderRadius: "5px",
  border: "solid 1px",
};

const Container = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  backgroundColor: 'black',
};


const leftBlock = {
  display: 'block',
  width: '33%',
};

const rightBlock ={
  display: 'block',
  width: '33%',
};

const centerBlock = {
  display: 'flex',
  flexDirection: 'column',
};
const imgStyle = {
  zIndex: '3',
}

function App() {
  return (
    <Router>
      <div>
        <nav>
         <div style={Container}>
          <div style={leftBlock}>
          </div>
            <div style={centerBlock}>
              <div style={{width:'100%'}}>
                <img src="internetonmars.png"  width="600" height="100" style={imgStyle} ></img>
              </div>
              <div style={{justifyContent: 'center'}}>
                <ul>
                  <li>
                    <NavLink to="/about" style={active}>About</NavLink>
                  </li>
                  <li>
                    <SimButton type="lagrange" name="Lagrange1" lagrangeNum={1} />
                  </li>
                </ul>
              </div>
            </div>
          <div style={rightBlock} />
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
