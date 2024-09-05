
import React, { useRef } from "react";
import { useGameContext } from "../../context/GameContext";
import { fieldSize } from "../../constant/sizes";

const Drop: React.FunctionComponent<any> = ({}): React.JSX.Element => {
  const { getColor, selectedShape, selectedShapeRow, fieldMatrix, xPosition, rotation } =
    useGameContext();

  return (
    <div
      style={{
        position: "relative",
        marginTop: `calc(${selectedShapeRow} * ${fieldSize})`,
        // transition: ${gameTime}ms linear,
        left: `calc(${xPosition} * ${fieldSize})`,
        top:"0px"
      }}
    >
      {selectedShape.value[rotation].map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {row.map((color, colIndex) => (
            <div
              key={colIndex}
              style={{
                backgroundColor: `${selectedShape.value[rotation][rowIndex][colIndex] === 0 ? getColor(
                  0
                ):
              getColor(selectedShape.color)}`,
                width: fieldSize,
                height: fieldSize,

              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Drop;

