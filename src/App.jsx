import { Typography } from "@mui/material";
import MemoryBoardGame from "./Components/MemoryGame";
import { useState } from "react";
import GameButton from "./Components/GameButton";

const games = ["Memory Game"];

function App() {
  const [game, setGame] = useState(null);
  const [gridSize, setGridSize] = useState(3);

  const sendGameHandler = (e) => {
    setGame(e);
  };
  const sendSizeHander = (e) => {
    setGridSize((prev) => (prev == 6 ? 3 : prev + 1));
  };

  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(275deg, rgba(74,112,122,1) 0%, rgba(35,191,189,1) 100%)",
          minHeight: "100vh",
        }}
      >
        {game == null && (
          <Typography
            variant="h4"
            sx={{ justifyContent: "center", display: "flex" }}
          >
            GAMES:{" "}
          </Typography>
        )}
        {game == null &&
          games.map((gameName) => {
            return (
              <GameButton
                key={gameName}
                gameName={gameName}
                gridSize={gridSize}
                sendGameHandler={sendGameHandler}
                sendSizeHander={sendSizeHander}
              />
            );
          })}
        {game == "Memory Game" && <MemoryBoardGame size={gridSize} />}
      </div>
    </>
  );
}

export default App;
