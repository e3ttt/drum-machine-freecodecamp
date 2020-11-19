import { useEffect, useState } from 'react';
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

export const keyToSound = [
  { key: 'Q', sound: bassDrum, description: 'Bass Drum' },
  { key: 'W', sound: floor, description: 'Floor tom' },
  { key: 'E', sound: snare, description: 'Snare drum' },
  { key: 'A', sound: medium, description: 'Medium tom' },
  { key: 'S', sound: china, description: 'China cymbal' },
  { key: 'D', sound: crash, description: 'Crash cymbal' },
  { key: 'Z', sound: ride, description: 'Ride cymbal' },
  { key: 'X', sound: splash, description: 'Splay cymbal' },
  { key: 'C', sound: hiHat, description: 'Hi-Hat' },
];

function App() {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', event => {
      const drumPad = document.querySelector(
        `#${event.key.toUpperCase()}-container`,
      );

      if (drumPad) {
        drumPad.click();
        setDisplay(
          keyToSound.find(item => item.key === event.key.toUpperCase())
            .description,
        );
        drumPad.style.backgroundColor = '#8dffcd';
      }
    });

    document.addEventListener('keyup', event => {
      const drumPad = document.querySelector(
        `#${event.key.toUpperCase()}-container`,
      );

      if (drumPad) {
        drumPad.style.backgroundColor = '';
      }
    });
  }, []);

  const handleDisplay = description => {
    setDisplay(description);
  };

  return (
    <div className="App" id="drum-machine">
      <h1>Drum Machine</h1>
      <div id="display">{display}</div>
      <div className="drum-pad-container">
        {keyToSound.map(item => (
          <DrumPad
            key={item.key}
            triggerKey={item.key}
            sound={item.sound}
            setDisplay={handleDisplay}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
