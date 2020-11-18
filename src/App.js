import './App.css';

import hiHat from './sounds/hi-hat.mp3';
import china from './sounds/china-cymbal.mp3';
import bassDrum from './sounds/bass-drum.mp3';
import floor from './sounds/floor-tom.mp3';
import snare from './sounds/snare-drum.mp3';
import medium from './sounds/medium-tom.mp3';
import crash from './sounds/crash-cymbal.mp3';
import ride from './sounds/ride-cymbal.mp3';
import splash from './sounds/splash-cymbal.mp3';

import DrumPad from './components/DrumPad';

function App() {
  return (
    <div className="App" id="drum-machine">
      <div id="display">Display</div>
      <div className="drum-pad-container">
        <DrumPad triggerKey="Q" sound={bassDrum} />

        <DrumPad triggerKey="W" sound={floor} />

        <DrumPad triggerKey="E" sound={snare} />

        <DrumPad triggerKey="A" sound={medium} />

        <DrumPad triggerKey="S" sound={china} />

        <DrumPad triggerKey="D" sound={crash} />

        <DrumPad triggerKey="Z" sound={ride} />

        <DrumPad triggerKey="X" sound={splash} />

        <DrumPad triggerKey="C" sound={hiHat} />
      </div>
    </div>
  );
}

export default App;
