import React, { useRef } from "react";
import { useGameContext } from "../../context/GameContext";

const Score: React.FunctionComponent<any> = ({}): React.JSX.Element => {
  const { score } = useGameContext();

  return (
    <div
      style={{
        position: "absolute",
        left: `10vw`,
      }}
    >
      <p
        style={{
          color: "white",
          width: "20vw",
          textAlign: "center",
          fontSize: "24px",
        }}
      >
        Score: {score}
      </p>
    </div>
  );
};

export default Score;
