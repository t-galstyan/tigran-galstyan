import React, { useRef, useState } from 'react';
import ArrowDownIcon from './icons/ArrowDownIcon';

const NefSi = () => {
  const paragraph = useRef(null);
  const [height, setHeight] = useState(170);
  const [isOpened, setIsOpened] = useState(false);

  const handleCollapse = () => {
    if (paragraph.current) {
      if (!isOpened) {
        console.log(paragraph.current.scrollHeight);
        setHeight(paragraph.current.scrollHeight);
      } else {
        setHeight(170);
      }
      setIsOpened(!isOpened);
    }
  };

  return (
    <section className="nef-si container">
      <p className="title">Scientific work, science fiction Nef-Si</p>
      <div className={`collapse ${isOpened ? 'open' : ''}`}>
        <p className="desc" ref={paragraph} style={{ height: height }}>
          The essence of Life is the diversity of Existence in Reality. And this choice is carried out by any Substantia
          in their own created "World" or Reality. But Substantia is the eternity, infiniteness in the Emptiness:
          revelation, revelation, revelation… Once in my past I appeared in the middle of this peculiar "revelation" and
          "Reality". I was standing in front of the "Light". In my world it was a phenomenon upon which no one ever
          deliberated. It was there, it was an existence independent of us and inside us. It was our friend but
          sometimes also our unwanted visitor which no one saw, heard and moreover spoke to. And, thus, with the help of
          a female guide, all of a sudden, I appeared before this "Light". And, imagine, it turned into a peculiar
          mirror, into a superdense and surprisingly viscous substance. I couldn"t resist the temptation and
          unconsciously tried to touch it, feel it, penetrate "it" and, finally, found myself in an emptiness. Was it
          Existence or Non-Existence? I have no idea, but it seemed all eternity, where the time was not beyond your
          control and was not moving on its own but was inside you, and you yourself were the time. I always had limited
          knowledge and imagination about my size and appearance: like a wretched little man who lived in a limited
          space of a little planet of the vast and infinite universe. But there I was a total completeness, a
          perfection, a miracle, proportion and synthesis. I was a unique phenomenon by my nature and essence. And
          amidst this bliss suddenly a "crazy" idea came to my mind: I wondered whether I am the only one in this world,
          in the great and infinite Universe. Because of this question of mine the Light started to transform, divide,
          fragment, and I, who at that moment seemed to be a gigantic being from an immortal race, appeared before an
          unknown star. In my world where I had come from, I had heard about one star that we called Sun. But here they
          called it Nef-Si. That name was unwillingly born in my mind or rather in my essence. I tried to understand
          what it meant, and I suddenly appeared on triple planets that were as if tied to one other. It was a very
          amazing scene. Those were three identical spheres circling in opposite directions but glued to each other by
          means of a thick mass that reminded of a "river" that seemed to be flowing between those three globes uniting
          them and not letting them fall apart. I stood there petrified yet fascinated by the whole scene when it
          suddenly started to circle and reveal itself. It began to radiate, more precisely to absorb the light that
          came from the star, and rapidly to transform, then by letting it pass through itself, seemed to change the
          format, color and meaning of the light. Thereafter, I began to perceive the forms of life existing on those
          moving planets. It was at that very moment that I realized that both the star and the triple spherical planets
          were not static, standing motionless side by side. I noticed that they were moving in the same coordinated
          trajectory that reminded of a multitude of ellipses getting bigger and smaller inside each other. It emitted a
          specific sound that was similar to the sound of a heavy rain on my planet. But then it stopped, and it seemed
          to me that I was standing by a waterfall: at least, the sound reminded me of it. And unconsciously I focused
          my attention on the "flowing river" and, to my surprise, I noticed some manlike creatures there that were
          looking at me with a huge, light blue, yet slightly greenish pair of eyes… Why do I emphasize it? Because when
          they turned away their faces, and stood with their backs towards me, on the back of their heads there appeared
          another pair of eyes. And that simply terrified me. I tried to understand what was going on, but my "Mind"
          seemed to be leaving me. I was speechless and turned into an absolutely powerless, feeble being. It seemed as
          if these manlike creatures were stealing my "Mind" by force or may be were seizing from me the ability to
          think by turning me into a kind of a "plant". Then I saw myself and realized that by my outer appearance I
          resembled a unique tree, one of those that grew on my native Earth. In the beginning, it seemed as if I was an
          ornamental tree, then I looked more like an apple tree. And those manlike creatures were approaching me,
          ruthlessly "snatching" my fruits, my apples and "ate" them. What I called eating was quite different from the
          process of how we ordinary people eat on our native Earth. At that point I understood that the fruits that
          they were snatching from me were previously my "ideas". They were feeding themselves with my thoughts…Later I
          saw other "manlike creatures" of bigger size and it seemed to me that those ones differed from each other, as
          if they were male and female. But the ones that were female were not eating but only looking attentively into
          their male"s eyes and consuming the energy, which their males acquired by devouring my thoughts. And when I
          tried to resist and not let them consume "my ideas", I perceived that I was not the only human being who had
          ended up there. There were too many like me as if we were a club of curious people gathered here. And I
          recalled my native planet Earth where we treated the trees so ruthlessly. And I saw that there was a lot of
          greenery here, but there were no trees. None of the plants had a fruit on it. The other thing that greatly
          surprised me in those manlike creatures was that they were speaking and communicating with their star
          referring to it as Nef-Si. They raised their hands that had 3 or 4 fingers. Actually, the males had only 3
          fingers, while the females had 4. And the star was "speaking" and answering their questions. What was most
          amazing is that you didn"t have any kind of natural sense, just the feeling of "pain". It had become the only
          meaning and motivation of Existence there. Every one of us lived with pain, for pain and was driven by it. And
          it gave everyone the Supreme Pleasure. In fact, at this last point we all, the manlike creatures, were
          unconsciously reborn, began to feel again as if regaining our natural senses, standards and features. Oh, what
          happy moments were they! Yet, the Pain again drowned out everything, and I was again losing my natural essence
          and reality. But at that point the "Light" transformed again, regained its previous natural appearance, and I
          abruptly woke up from this sleep that seemed like immortality to me and realized that the "Light" that we
          have, that very "Light" gives us our Reality, Nature, Standard and Feature. And I was infinitely happy and
          grateful. Our thoughts are (or may serve as) a fuel for intergalactic flights in this extraordinary spaceship
          called Nef-Si.
        </p>
        <button
          className="collapse-button"
          onClick={() => {
            handleCollapse();
          }}
        >
          Read More
          <ArrowDownIcon />
        </button>
      </div>
    </section>
  );
};

export default NefSi;
