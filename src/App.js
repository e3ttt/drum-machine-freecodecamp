import './App.css';

function App() {
  return (
    <div className="App" id="drum-machine">
      <div id="display">Display</div>
      <div className="drum-pad-container">
        <div className="drum-pad" id="bass-drum">
          <audio id="Q" className="clip" src=""></audio>Q
        </div>
        <div className="drum-pad" id="floor-tom">
          <audio id="W" className="clip" src=""></audio>W
        </div>
        <div className="drum-pad" id="snare-drum">
          <audio id="E" className="clip" src=""></audio>E
        </div>
        <div className="drum-pad" id="tom-tom">
          <audio id="A" className="clip" src=""></audio>A
        </div>
        <div className="drum-pad" id="hi-hat">
          <audio id="S" className="clip" src=""></audio>S
        </div>
        <div className="drum-pad" id="crash-cymbal">
          <audio id="D" className="clip" src=""></audio>D
        </div>
        <div className="drum-pad" id="ride-cymbal">
          <audio id="Z" className="clip" src=""></audio>Z
        </div>
        <div className="drum-pad" id="splash-cymbal">
          <audio id="X" className="clip" src=""></audio>X
        </div>
        <div className="drum-pad" id="china-cymbal">
          <audio id="C" className="clip" src=""></audio>C
        </div>
      </div>
    </div>
  );
}

export default App;
