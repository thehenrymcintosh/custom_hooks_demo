import React, {useState, useEffect, useReducer } from 'react'

type Props = {
  source: string,
}

export default function AudioPlayer({source}: Props) {
  const [playing, setPlaying] = useState(false);

  useEffect(
    () => {
      let audio = new Audio(source);
      function pause() {
        setPlaying(false);
      }
      audio.addEventListener("ended", pause );
      return () => {
        audio.removeEventListener("ended", pause);
        audio.remove();
      }
    },
    [source],
  );

  return (
    <button onClick={() => !playing && setPlaying(!playing) }> {playing ? "Pause" : "Play"} </button>
  )
}