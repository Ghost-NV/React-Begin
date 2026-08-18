export default function count({ countTxt = "click", children }) {
  return (
    <>
      <span>{countTxt}</span>
      {children}
    </>
  );
}
