import { useState } from "react";

export default function Form({ style }) {
  const [check, setCheck] = useState(false);

  function CheckTheBox(e) {
    setCheck(e.target.checked);
  }

  return (
    <div style={style}>
      <label>
        <span>
          <input type="checkbox" checked={check} onChange={CheckTheBox} /> check
          or uncheck
          <p>{check ? "check" : "unchecked"}</p>
        </span>
      </label>
    </div>
  );
}
