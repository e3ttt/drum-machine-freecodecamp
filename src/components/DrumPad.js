import { useRef } from 'react';

import { keyToSound } from '../App';

const DrumPad = props => {
  const audio = useRef(null);
  const container = useRef(null);

  return (
    <div
      className="drum-pad"
      id={`${props.triggerKey}-container`}
      ref={container}
      onClick={() => {
        audio.current.currentTime = 0;
        audio.current.play();
      }}
      onMouseDown={() => {
        container.current.style.backgroundColor = '#8dffcd';
        props.setDisplay(
          keyToSound.find(item => item.key === props.triggerKey).description,
        );
      }}
      onMouseUp={() => (container.current.style.backgroundColor = '')}
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
