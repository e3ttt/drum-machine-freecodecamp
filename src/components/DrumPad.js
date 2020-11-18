import { useRef } from 'react';

const DrumPad = props => {
  const audio = useRef(null);
  return (
    <div
      className="drum-pad"
      id={`${props.triggerKey}-container`}
      onClick={() => {
        audio.current.currentTime = 0;
        audio.current.play();
        console.log(`${props.triggerKey}-container`);
      }}
    >
      <audio
        id={props.triggerKey}
        className="clip"
        src={props.sound}
        ref={audio}
      ></audio>
      {props.triggerKey}
    </div>
  );
};

export default DrumPad;
