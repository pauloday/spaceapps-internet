import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  // eslint-disable-next-line no-undef
  const viz = new Spacekit.Simulation(document.getElementById('sim'), {
    basePath: './',
    startDate: Date.now(),
  });
  console.log(viz);
  return (
    <div>
      howdy
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
