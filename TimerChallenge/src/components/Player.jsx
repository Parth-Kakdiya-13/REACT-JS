import { useRef } from "react";
import { useState } from "react";

export default function Player() {


  const [enteredName, setEnteredName] = useState(null);
  const playerName = useRef();

  function handlecClick() {
    setEnteredName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">

      <h2>Welcome {enteredName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handlecClick} >Set Name</button>
      </p>
    </section>
  );
}
