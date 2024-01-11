import { React, useState } from 'react';
import getJoke from '../api/jokeData';

function Home() {
  const [joke, setJoke] = useState('Wanna Hear a Joke?');
  const [buttonStatement, setButtonStatement] = useState('Heck Yeah!');
  const [delivery, setDelivery] = useState('');
  const [counter, setCounter] = useState(0);

  function hearAJoke() {
    if (counter === 0) {
      getJoke()
        .then((data) => {
          setJoke(data.setup);
          setButtonStatement('uhh.. punchline?');
          setDelivery(data.delivery);
          setCounter(1);
        });
    } else if (counter === 1) {
      setJoke(delivery);
      setButtonStatement('hahaha Again!');
      setCounter(0);
    }
  }

  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h1>{ joke }</h1>
        <button type="button" onClick={hearAJoke}>{ buttonStatement } </button>
      </div>

    </>
  );
}

export default Home;
