import { useState } from "react";

export default function MyInput({ style }) {
  let DefText = "Enter Text";
  const [text, setText] = useState(DefText);

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div style={style}>
      <input value={text} onChange={handleChange} />
      <p>{text}</p>
      <button onClick={() => setText(DefText)}>Reset</button>
    </div>
  );
}
