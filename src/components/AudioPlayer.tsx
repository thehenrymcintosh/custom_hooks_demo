import React, {useState, useEffect} from 'react'

type Props = {
  source: string,
}

export default function AudioPlayer({source}: Props) {
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const pause = () => {
    setPlaying(false);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    };
  };
  useEffect(
    () => {
      let audio = new Audio(source);
      setAudio(audio);
      audio.addEventListener("ended", pause );
      return () => {
        audio.removeEventListener("ended", pause);
        audio.remove();
      }
    },
    [source, audio],
  );

  useEffect(() => {
    if (!audio) return;
    if (playing) {
      audio.play()
    } else {
      audio.pause();
    }
    return () => {
      audio.pause();
    }
  }, [playing, audio])

  return (
    <button onClick={() => setPlaying(!playing) }> {playing ? "Pause" : "Play"} </button>
  )
}