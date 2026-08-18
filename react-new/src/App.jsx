import { useState } from "react";
import heroImg from "./assets/hero.png";
import "./App.css";
import FNexported from "./FNexport";
import CountFN from "./countFN";
import "./class.css";

function App() {
  const [count, setCount] = useState(0);
  const [showIMG, setShowIMG] = useState(false);

  const cnt = "click me";
  const obj = {
    Name: "Ghost-NV",
    heroImg: heroImg,
    click: count,
  };

  const clicky = () => {
    setCount((a) => a + 1); // Functional Updater
    // setCount(count + 1); // not recommended

    setShowIMG(true);
  };

  const clickNo = (e) => {
    e.preventDefault(); // No annoying list
    setCount(count - 1);
  };

  const objStyle = {
    margin: 30,
    userSelect: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: count * 3,
  };

  return (
    <div style={objStyle}>
      <button className={"counter"} onClick={clicky} onContextMenu={clickNo}>
        <CountFN countTxt={cnt}>:</CountFN>
        <span className="color">{obj.click}</span>
      </button>
      <RenderIMG Visible={showIMG} countAlt={count} />
    </div>
  );
}

function RenderIMG({ Visible, countAlt }) {
  if (Visible == true) {
    const moveDown = countAlt * 5;
    return (
      <FNexported
        className={` spin ${countAlt >= 10 ? "imgRct" : ""}`}
        // could use className="", but no JS could be used inside of it
        style={{
          height: "100px",
          width: "100px",
          marginTop: `${moveDown}px`,
          transition: "all 0.4s ease-in-out",
        }}
      />
    );
  } else {
    return <span>CLICK THE BUTTON!</span>;
  }
}

export default App;
