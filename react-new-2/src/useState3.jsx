import { useState } from "react";

export default function Form({ style }) {
  const [check, setCheck] = useState(false);
  const [checkRad, setCheckRad] = useState("");

  function CheckTheBox(e) {
    setCheck(e.target.checked);
  }

  function CheckTheRad(Val) {
    setCheckRad(Val);
  }

  const [Rad1, Rad2, Rad3] = ["Rad1", "Rad2", "Rad3"];

  return (
    <div style={style}>
      <label>
        <span>
          <input type="checkbox" checked={check} onChange={CheckTheBox} /> check
          or uncheck
          <p>{check ? "check" : "unchecked"}</p>
        </span>
      </label>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "250px",
          position: "relative",
        }}
      >
        <label>
          <input
            type="radio"
            value={Rad1}
            checked={checkRad === Rad1}
            onChange={() => CheckTheRad(Rad1)}
          />
          {Rad1}
        </label>
        <label>
          <input
            type="radio"
            value={Rad2}
            checked={checkRad === Rad2}
            onChange={() => CheckTheRad(Rad2)}
          />
          {Rad2}
        </label>
        <label>
          <input
            type="radio"
            value={Rad3}
            checked={checkRad === Rad3}
            onChange={() => CheckTheRad(Rad3)}
          />
          {Rad3}
        </label>
      </div>
    </div>
  );
}
