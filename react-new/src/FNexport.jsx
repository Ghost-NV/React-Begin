import reactLogo from "./assets/react.svg";

export default function FNexport(prop) {
  return (
    <img
      src={reactLogo}
      style={prop.style}
      className={prop.className}
      alt="React Logo"
    />
  );
}
