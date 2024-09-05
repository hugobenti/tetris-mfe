import React from "react";
import { GameProvider } from "../context/GameContext";
import Background from "./components/Background";
import Drop from "./components/Drop";
import Field from "./components/Field";
import NextShapes from "./components/NextShapes";
import Score from "./components/Score";

const Tetris: React.FunctionComponent<any> = ({}): React.JSX.Element => {

  return (
    <GameProvider>
    <div style={{position:"absolute", top:`0px`, left:`0px`}}>
      <Field />
      <Background />
      <Drop/>
      {/* <NextShapes /> */}
      {/* <Score/> */}
    </div>
  </GameProvider>
  );
};

export default Tetris;

