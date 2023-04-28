import { useRef } from 'react';

const DrumPad: React.FC<{ label: string, audio:string, handleClick: (ref: React.RefObject<HTMLAudioElement>) => void }> = ({ label, audio, handleClick }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  return (
    <button onClick={()=>handleClick(audioRef)} className="drum-pad">
       <div className="inner-wrapper">
          {label}
          <audio ref={audioRef}>
            <source src={audio} />
          </audio>
       </div>
   </button>
)
}

const data = [
  {label: "Q", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
  {label: "W", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
  {label: "E", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
  {label: "A", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
  {label: "S", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
  {label: "D", audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
  {label: "Z", audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
  {label: "X", audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
  {label: "C", audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}
]

export default function Home() { 

  return (
    <>
     <main>
      <h1>Gilbert Drum Machine</h1>
      <div id="drum-machine">
        <div id="display">
          {data.map((item) => (
            <DrumPad handleClick={(audioRef) =>{
              if(audioRef && audioRef.current){
                audioRef.current.play()
                }
              }} 
              key={item.label} {...item}
             />
          ))}
        </div>
      </div>
      </main>
    </>
  )
}
