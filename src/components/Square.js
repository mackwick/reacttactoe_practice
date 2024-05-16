import { useState } from "react";

function Square({ name, func }) {
  return (
    <button className="square" onClick={func}>
      {name}
    </button>
  );
}

export default Square;
