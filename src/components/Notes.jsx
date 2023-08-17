import React, { useRef } from 'react';
import do_note from '../assets/sounds/do.wav';
import re_note from '../assets/sounds/re.wav';
import mi_note from '../assets/sounds/mi.wav';
import fa_note from '../assets/sounds/fa.wav';
import sol_note from '../assets/sounds/sol.wav';
import la_note from '../assets/sounds/la.wav';
import si_note from '../assets/sounds/si.wav';

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
        <span className="note">Do</span>
        <span className="hidden-text">
          <span> - Dominus - Lord God</span>
        </span>
      </p>
      <audio ref={audioDo}>
        <source src={do_note} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <p className="note-text" onClick={() => audioRe.current.play()}>
        <span className="note">Re</span>
        <span className="hidden-text"> - rerum - Matter</span>
      </p>
      <audio ref={audioRe}>
        <source src={re_note} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <p className="note-text" onClick={() => audioMi.current.play()}>
        <span className="note">Mi</span>
        <span className="hidden-text"> - miraculum - Miracle</span>
      </p>
      <audio ref={audioMi}>
        <source src={mi_note} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <p className="note-text long" onClick={() => audioFa.current.play()}>
        <span className="note">Fa</span>
        <span className="hidden-text "> - familias planetarium - (Family of planets) the Solar System</span>
      </p>
      <audio ref={audioFa}>
        <source src={fa_note} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <p className="note-text" onClick={() => audioSol.current.play()}>
        <span className="note">Sol</span>
        <span className="hidden-text"> - solis - the Sun</span>
      </p>
      <audio ref={audioSol}>
        <source src={sol_note} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <p className="note-text medium" onClick={() => audioLa.current.play()}>
        <span className="note">La</span>
        <span className="hidden-text"> - lactea via - the Milky Way (constellation)</span>
      </p>
      <audio ref={audioLa}>
        <source src={la_note} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <p className="note-text" onClick={() => audioSi.current.play()}>
        <span className="note">Si</span>
        <span className="hidden-text"> - siderae - the Sky.</span>
      </p>
      <audio ref={audioSi}>
        <source src={si_note} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
};

export default Notes;
