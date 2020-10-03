import React from 'react';
import ReactDOM from 'react-dom';
import Simulation from './Simulation';
import SimButton from './SimButton';

function App() {
  return <SimButton type="start" name="start" />;
}

ReactDOM.render(<App />, document.getElementById('root'));
