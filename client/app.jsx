import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import About from './about';
import SimButton from './SimButton';
import {distance, blockedSignal} from './distance';

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
  const [connectionStrength, setConnectionStrength] = useState(0);
  const [ping, setPing] = useState(0);
  const [lagranges, setLagranges] = useState([false, false, false]);
  const pingUpdater = () => {
    
  }
  return (
    <div>
      <nav>
        <div style={Container}>
        <div style={leftBlock}>
        </div>
          <div style={centerBlock}>
            <div style={{width:'100%'}}>
              <img src="internetonmars.png"  width="600" height="100" style={imgStyle} ></img>
            </div>
            <div style={{justifyContent: 'center', flexDirection: 'row'}}>
              <SimButton type="start" name="Start" />
              <SimButton type="stop" name="stop" />
              <SimButton type="lagrange" name="Lagrange1" lagrangeNum={1} connectivity={connectionStrength} setConnection={setConnectionStrength} ping={ping} setPing={setPing} lagranges={lagranges} setLagranges={setLagranges}/>
              <SimButton type="lagrange" name="Lagrange2" lagrangeNum={2} connectivity={connectionStrength} setConnection={setConnectionStrength} ping={ping} setPing={setPing} lagranges={lagranges} setLagranges={setLagranges}/>
              <About />
            </div>
            <div style={{color: "#fff"}}>Connectivity: {connectionStrength}; Ping: {ping}</div>
          </div>
        <div style={rightBlock} />
       </div>
      </nav>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
