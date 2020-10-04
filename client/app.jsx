import React from 'react';
import ReactDOM from 'react-dom';
import About from './about';
import SimButton from './SimButton';
import Simulation from './Simulation';

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
