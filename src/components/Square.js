function Square({ name }) {
  function handleClick() {
    console.log("clicked!");
  }

  return (
    <button className="square" onClick={handleClick}>
      {name}
    </button>
  );
}

export default Square;
