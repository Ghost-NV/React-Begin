import "./App.css";
import "./class.css";
import heroImg from "./assets/hero.png";
import State1 from "./useState1";
import State2 from "./useState2";
import State3 from "./useState3";
import State4 from "./useState4";

function App() {
  const objStyle = {
    margin: 30,
    userSelect: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const objStyle2 = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    borderTop: "1px solid teal",
    padding: "15px",
  };

  const RenderedTasks = [
    { id: 1, text: "Well done" },
    { id: 2, text: "Well half done" },
    { id: 3, text: "Well NEVER be done" },
    { id: 5, text: "Go find a life you little jerky failure" },
  ];

  const TasksMap = RenderedTasks.map((Task) => {
    return (
      <li key={Task.id} style={{ listStyle: "none" }}>
        {Task.text}
      </li>
    );
  });

  return (
    <div style={objStyle}>
      <header className="App-header">
        <img
          style={{ width: "200px", height: "200px" }}
          src={heroImg}
          className="App-logo"
          alt="logo"
        />
        <ul className="flexFlexy">{TasksMap}</ul>
      </header>
      <State1 style={objStyle2} />
      <State4 style={objStyle2} />
      <State2 style={objStyle2} />
      <State3 style={objStyle2} />
    </div>
  );
}

export default App;
