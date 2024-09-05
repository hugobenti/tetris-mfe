







import React, { useRef } from "react";
import { useGameContext } from "../../context/GameContext";
import { fieldSize } from "../../constant/sizes";

const NextShapes: React.FunctionComponent<any> = ({}): React.JSX.Element => {
  const { getColor, nextShapeList } = useGameContext();

  return (
    <div
      style={{
        position: "absolute",
        left: "70%",
      }}
    >
      <p style={{color:'white', width: '100%', textAlign:'center', fontSize:'24px'}}>Next shapes</p>
      {nextShapeList.length > 0 &&
        nextShapeList.map((shape, shapeIndex) => (
          <div key={shapeIndex} style={{  padding: '24px 48px'}}>
            {shape &&
              shape.value[0].map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: "flex", alignItems:'center', justifyContent:'center' }}>
                  {row.map((color, colIndex) => (
                    <div
                      key={colIndex}
                      style={{
                        backgroundColor: `${
                          shape.value[0][rowIndex][colIndex] === 0
                            ? getColor(0)
                            : getColor(shape.color)
                        }`,
                        width: fieldSize,
                        height: fieldSize,
                      }}
                    />
                  ))}
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default NextShapes;

