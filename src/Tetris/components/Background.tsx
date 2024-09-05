import React, { useRef } from "react";
import { useGameContext } from "../../context/GameContext";
import { fieldSize } from "../../constant/sizes";

const Background: React.FunctionComponent<any> = ({}): React.JSX.Element => {
  const { fieldMatrix, selectedShape, rotation } = useGameContext();

  // Mapeando a matriz para criar as divs com cores diferentes
  const divs = fieldMatrix.map((row, rowIndex) => (
    <div
      key={rowIndex}
      style={{
        display: "flex",
        position: "relative",
        left: "0px",
        top: "0px",
        boxShadow: "inset 0 0 2px rgba(0, 0, 0, 0.7)",
      }}
    >
      {row.map((color, colIndex) => (
        <div
          key={colIndex}
          style={{
            // backgroundColor: "#f0f0f0",
            // opacity:0.1,
            width: `${fieldSize}`,
            height: `${fieldSize}`,
            // border: "1px solid #2f2f2f",
            boxShadow: "inset 0 0 2px rgba(0, 0, 0, 0.7)",
          }}
        />
      ))}
    </div>
  ));

  return (
    <div style={{ position: "relative", left:'0px', top:'0px', height:"0px", zIndex:10 }}>{divs}</div>
  );
};

export default Background;
