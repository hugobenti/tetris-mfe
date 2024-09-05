import React, { createContext, useContext, useEffect, useState } from "react";
import {
  newField,
  newRow,
  shape,
  shape1,
  shape2,
  shape3,
  shape4,
  shape5,
  shape6,
  shape7,
} from "../constant/shapes";

export interface GameContextData {
  fieldMatrix: number[][];
  selectedShape: shape;
  rotation: number;
  selectedShapeRow: number;
  score: number;
  xPosition: number;
  getColor: (n: number | string) => string;
  nextShapeList: shape[];
}

const GameContext = createContext<GameContextData>({} as GameContextData);

type GameProviderProps = {
  children?: JSX.Element;
  initialTheme?: "Default" | "DarkBlack" | "DarkBlue";
};

export const GameProvider: React.FunctionComponent<GameProviderProps> = ({
  children,
  initialTheme = "Default",
}): JSX.Element => {
  const [score, setScore] = useState<number>(0);
  const [gameTime, setGameTime] = useState<number>(300);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [nextShapeList, setNextShapeList] = useState<shape[]>([]);
  const [fieldMatrix, setFieldMatrix] = useState<number[][]>(newField);

  const getColor = (n: number | string): string => {
    if (typeof n === "string") return n;
    if (n === 1) return "#DD0000";
    if (n === 2) return "#00DD00";
    if (n === 3) return "#0000DD";
    if (n === 4) return "#DDDD00";
    if (n === 5) return "#00DDDD";
    if (n === 6) return "#DD00DD";
    if (n === 7) return "#880000";
    if (n === 8) return "#008800";
    if (n === 9) return "#000088";
    if (n === 100) return "#898989";
    return "transparent";
  };

  // Shape
  const [rotation, setRotation] = useState<number>(0);
  const [selectedShape, setSelectedShape] = useState<shape>(shape1);
  const [selectedShapeRow, setSelectedShapeRow] = useState<number>(0);
  const [xPosition, setXPosition] = useState<number>(
    Math.floor(fieldMatrix[0].length / 2) -
      Math.floor(selectedShape.value[rotation][0].length / 2)
  );

  const getRandomHexColor = (): string => {
    const letters = "456789ABCD";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 10)];
    }

    return color;
  };

  const setNewShape = () => {
    console.log(nextShapeList);
    setSelectedShape(nextShapeList[0]);
    setNextShapeList(nextShapeList.slice(1));
  };

  const addShape = () => {
    const rdm = Math.floor(1 + Math.random() * 7);
    let newShape: shape = shape1;
    switch (rdm) {
      case 1:
        newShape = shape1;
        break;
      case 2:
        newShape = shape2;
        break;
      case 3:
        newShape = shape3;
        break;
      case 4:
        newShape = shape4;
        break;
      case 5:
        newShape = shape5;
        break;
      case 6:
        newShape = shape6;
        break;
      case 7:
        newShape = shape7;
        break;
    }
    newShape.color = getRandomHexColor();
    nextShapeList.push(newShape);
  };

  const newShape = () => {
    addShape();
    setSelectedShapeRow(0);
    setRotation(0);
    setXPosition(
      Math.floor(fieldMatrix[0].length / 2) -
        Math.floor(selectedShape.value[0].length / 2)
    );
    setNewShape();
  };

  const writeShapeInMatrix = () => {
    selectedShape.value[rotation].forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (selectedShape.value[rotation][rowIndex][colIndex] !== 0)
          fieldMatrix[selectedShapeRow + rowIndex][xPosition + colIndex] = 100;
      });
    });
  };

  const verifyGameOver = () => {
    const hasNonZero = fieldMatrix[0].some((num) => num !== 0);
    if (hasNonZero) setGameOver(true);
  };

  const verifyFullLines = () => {
    let auxScore = 0;
    fieldMatrix.forEach((row, index) => {
      if (!row.includes(0)) {
        fieldMatrix.splice(index, 1);
        fieldMatrix.unshift(newRow);
        auxScore += 1;
      }
    });
    setScore(auxScore + score);
  };

  const verifyColision = (): void => {
    let colision = false;

    // colisao com o chão
    if (
      selectedShapeRow ===
      fieldMatrix.length - selectedShape.value[rotation].length
    ) {
      writeShapeInMatrix();
      colision = true;
    }

    // colisao com peça
    else
      selectedShape.value[rotation].forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
          if (selectedShape.value[rotation][rowIndex][colIndex] !== 0)
            if (
              fieldMatrix[selectedShapeRow + rowIndex + 1][
                xPosition + colIndex
              ] !== 0
            ) {
              colision = true;
            }
        });
      });

    verifyGameOver();
    if (colision && !gameOver) {
      writeShapeInMatrix();
      newShape();
    }
    if (!colision && !gameOver)
      setSelectedShapeRow((prevState) => {
        const nextRow = prevState + 1;
        return nextRow >
          fieldMatrix.length - selectedShape.value[rotation].length
          ? 0
          : nextRow;
      });
    verifyFullLines();
  };

  const verifySideColision = (x: number): boolean => {
    if (xPosition + x < 0 || xPosition + x >= fieldMatrix[0].length)
      return true;
    let colision = false;
    selectedShape.value[rotation].forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (selectedShape.value[rotation][rowIndex][colIndex] !== 0) {
          if (
            fieldMatrix[selectedShapeRow + rowIndex][
              xPosition + colIndex + x
            ] !== 0
          ) {
            colision = true;
          }
        }
      });
    });

    return colision;
  };

  const verifyBottomColision = (): boolean => {
    if (
      selectedShapeRow ===
      fieldMatrix.length - selectedShape.value[rotation].length
    )
      return true;
    let colision = false;
    selectedShape.value[rotation].forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (selectedShape.value[rotation][rowIndex][colIndex] !== 0) {
          if (
            fieldMatrix[selectedShapeRow + rowIndex + 1][
              xPosition + colIndex
            ] !== 0
          ) {
            colision = true;
          }
        }
      });
    });

    return colision;
  };

  const verifSpinColision = (): void => {
    const newRotation = rotation + 1 > 3 ? 0 : rotation + 1;
    if (
      selectedShape.value[newRotation][0].length !==
        selectedShape.value[rotation][0].length &&
      xPosition > 0
    )
      setXPosition(
        (prev) =>
          prev -
          (selectedShape.value[newRotation][0].length -
            selectedShape.value[rotation][0].length)
      );

    if (
      selectedShapeRow + selectedShape.value[newRotation].length >=
      fieldMatrix.length
    )
      setSelectedShapeRow(
        (prev) =>
          prev -
          (prev + selectedShape.value[newRotation].length - fieldMatrix.length)
      );

    // com peças agora que redefinio a posicao

    // selectedShape.value[newRotation].forEach((row, rowIndex) => {
    //   row.forEach((col, colIndex) => {
    //     if (selectedShape.value[rotation][rowIndex][colIndex] !== 0)
    //       if (
    //         fieldMatrix[selectedShapeRow + rowIndex + 1][
    //           xPosition + colIndex
    //         ] !== 0
    //       ) {
    //         colision = true;
    //       }
    //   });
    // });
  };

  useEffect(() => {
    newShape();
    for (let i = 0; i < 3; i += 1) {
      addShape();
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "ArrowLeft") {
        // Lógica para lidar com a seta para a esquerda
        console.log(verifySideColision(-1));
        if (!verifySideColision(-1)) {
          setXPosition((prevState) => {
            const newValue = prevState - 1;
            return newValue < 0 ? 0 : newValue;
          });
        }
      } else if (event.key === "ArrowRight") {
        // Lógica para lidar com a seta para a direita
        console.log(verifySideColision(1));
        if (!verifySideColision(1)) {
          setXPosition((prevState) => {
            const newValue = prevState + 1;
            return newValue >
              fieldMatrix[0].length - selectedShape.value[rotation][0].length
              ? fieldMatrix[0].length - selectedShape.value[rotation][0].length
              : newValue;
          });
        }
      } else if (event.key === "ArrowUp") {
        verifSpinColision();
        setRotation((prevState) => {
          const newValue = prevState + 1;
          return newValue > 3 ? 0 : newValue;
        });
      } else if (event.key === "ArrowDown") {
        if (!verifyBottomColision())
          setSelectedShapeRow((prevState) => {
            const nextRow = prevState + 1;
            return nextRow;
          });
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [xPosition, selectedShapeRow]);

  // Interval principal!
  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver) verifyColision();
    }, gameTime);

    return () => {
      clearInterval(interval);
    };
  }, [xPosition, selectedShapeRow, selectedShape]);

  return (
    <GameContext.Provider
      value={{
        fieldMatrix,
        getColor,
        selectedShape,
        selectedShapeRow,
        xPosition,
        rotation,
        nextShapeList,
        score,
      }}
    >
      {/* Toast Wrapper */}
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = (): GameContextData => useContext(GameContext);
