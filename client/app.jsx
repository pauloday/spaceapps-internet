import React from 'react';
import ReactDOM from 'react-dom';
import Simulation from './Simulation';
import SimButton from './SimButton';

function App() {
  return (
  <div>
   <SimButton type="start" name="start" />;
   <SimButton type="stop" name="stop" />;
   <SimButton type="Roadster" name="Roadster" />;
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
