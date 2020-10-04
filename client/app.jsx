import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import About from './about';
import SimButton from './SimButton';
import Simulation, {earth, mars} from './Simulation';
import {distance, blockedSignal, oneWayTimeOfTravel} from './distance';

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
    const earthLoc = earth.getPosition(Simulation.getJd()).map(Spacekit.auToKm);
    const marsLoc = mars.getPosition(Simulation.getJd()).map(Spacekit.auToKm);
    const defaultL = [Infinity, Infinity, Infinity];
    const l1Loc = lagranges[0] ? lagranges[0].getPosition(Simulation.getJd()).map(Spacekit.auToKm) : defaultL;
    const l2Loc = lagranges[1] ? lagranges[1].getPosition(Simulation.getJd()).map(Spacekit.auToKm) : defaultL;
    const l1ToEarth = distance(earthLoc[0], earthLoc[1], l1Loc[0], l1Loc[1]);
    const l2ToEarth = distance(earthLoc[0], earthLoc[1], l2Loc[0], l2Loc[1]);
    const l1ToMars = distance(marsLoc[0], marsLoc[1], l1Loc[0], l1Loc[1]);
    const l2ToMars = distance(marsLoc[0], marsLoc[1], l2Loc[0], l2Loc[1]);
    const l1Trip = l1ToEarth + l1ToMars;
    const l2Trip = l2ToEarth + l2ToMars;
    if (l1Trip < l2Trip) {
      setPing(oneWayTimeOfTravel(l1Trip));
    } else {
      setPing(oneWayTimeOfTravel(l2Trip));
    }
  };
  setInterval(pingUpdater, 1000);
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
