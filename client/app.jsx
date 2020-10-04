import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
=======
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
>>>>>>> ccae52dcf0c46df6803660fbfd2252717bd148bd
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

const buttonBlock = {
  display: 'block',
};

const rightBlock ={
  display: 'block',
};

const imgStyle = {
  zIndex: '3',
  marginLeft: '25%',
}

function App() {
  return (
    <div>
      <SimButton type="lagrange" name="Lagrange1" lagrangeNum={1} />
      <SimButton type="lagrange" name="Lagrange2" lagrangeNum={2} />
      <About />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
