import React, { useRef } from "react";
import { useGameContext } from "../../context/GameContext";
import { fieldSize } from "../../constant/sizes";

const Field: React.FunctionComponent<any> = ({}): React.JSX.Element => {
  const { fieldMatrix, getColor } = useGameContext();

  // Mapeando a matriz para criar as divs com cores diferentes
  const divs = fieldMatrix.map((row, rowIndex) => (
    <div >
      <div key={rowIndex} style={{ display: "flex",position:"relative"}}>
        {row.map((color, colIndex) => (
          <div
            key={colIndex}
            style={{
              backgroundColor: `${getColor(fieldMatrix[rowIndex][colIndex])}`,
              width: fieldSize,
              height: fieldSize,
              boxShadow: `${fieldMatrix[rowIndex][colIndex] === 0 ? '':
              'inset 0 0 24px rgba(0, 0, 0, 0.9)'}`,
              transition:'200ms ease-in-out'
            }}
          />
        ))}
      </div>{" "}
    </div>
  ));

  return <div style={{position:'relative', left:'0px', top:'0px', height:"0px" }}>{divs}</div>;
};

export default Field;





