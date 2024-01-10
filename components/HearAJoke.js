import { useEffect, useState } from 'react';

function HearAJoke() {
  const [joke, setJoke] = useState({ setup: '' });

  function loadJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any?format=json&safe-mode&type=twopart')
      .then((response) => response.json())
      .then((data) => setJoke(data));
  }

  useEffect(() => { loadJoke(); }, []);

  return (
    <>
      <h1>Wanna Hear a Joke?</h1>
      <h2>{ joke.setup }</h2>
      <button type="button" onClick={loadJoke}>Heck Yeah!</button>
    </>
  );
}

export default HearAJoke;
