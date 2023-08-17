import React, { useRef } from 'react';
import do_note from '../assets/sounds/do.wav';
import re_note from '../assets/sounds/re.wav';
import mi_note from '../assets/sounds/mi.wav';
import fa_note from '../assets/sounds/fa.wav';
import sol_note from '../assets/sounds/sol.wav';
import la_note from '../assets/sounds/la.wav';
import si_note from '../assets/sounds/si.wav';
import NoteIcon from './icons/NoteIcon';

const Notes = () => {
  const audioDo = useRef();
  const audioRe = useRef();
  const audioMi = useRef();
  const audioFa = useRef();
  const audioSol = useRef();
  const audioLa = useRef();
  const audioSi = useRef();

  return (
    <section className="notes container">
      <h5 className="title">Many of us do not know the names and the meaning of the musical notes</h5>
      <p className="note-text" onClick={() => audioDo.current.play()}>
        Do - Dominus - Lord God
        <span className="note-icon">
          <NoteIcon />
        </span>
      </p>
      <audio ref={audioDo}>
        <source src={do_note} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <p className="note-text" onClick={() => audioRe.current.play()}>
        Re - rerum - Matter
        <span className="note-icon">
          <NoteIcon />
        </span>
      </p>
      <audio ref={audioRe}>
        <source src={re_note} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <p className="note-text" onClick={() => audioMi.current.play()}>
        Mi - miraculum - Miracle
        <span className="note-icon">
          <NoteIcon />
        </span>
      </p>
      <audio ref={audioMi}>
        <source src={mi_note} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <p className="note-text" onClick={() => audioFa.current.play()}>
        Fa - familias planetarium - (Family of planets) the Solar System
        <span className="note-icon">
          <NoteIcon />
        </span>
      </p>
      <audio ref={audioFa}>
        <source src={fa_note} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <p className="note-text" onClick={() => audioSol.current.play()}>
        Sol - solis - the Sun
        <span className="note-icon">
          <NoteIcon />
        </span>
      </p>
      <audio ref={audioSol}>
        <source src={sol_note} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <p className="note-text" onClick={() => audioLa.current.play()}>
        La - lactea via - the Milky Way (constellation)
        <span className="note-icon">
          <NoteIcon />
        </span>
      </p>
      <audio ref={audioLa}>
        <source src={la_note} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <p className="note-text" onClick={() => audioSi.current.play()}>
        <span className="note-icon">
          <NoteIcon />
        </span>
        Si - siderae - the Sky.
      </p>
      <audio ref={audioSi}>
        <source src={si_note} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="squiggly-0">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0" />
            <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
          </filter>
          <filter id="squiggly-1">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>

          <filter id="squiggly-2">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>
          <filter id="squiggly-3">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>

          <filter id="squiggly-4">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>
        </defs>
      </svg>
    </section>
  );
};

export default Notes;
