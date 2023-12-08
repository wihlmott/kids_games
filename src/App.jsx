import { Typography } from "@mui/material";
import Board from "./Components/Board";
import { useState } from "react";
import GameButton from "./Components/GameButton";

const games = [
  { title: "Memory Game", heading: "Find the matching tiles", gridSize: 3 },
  {
    title: "Match The Pieces",
    heading: "Drag the matching tiles together",
    gridSize: 3,
  },
];

function App() {
  const [game, setGame] = useState(null);
  const [gridSize, setGridSize] = useState(3);

  const [heading, setHeading] = useState("GAMES");

  const sendGameHandler = (e) => {
    setGame(e);

    games.forEach((element) =>
      element.title == e ? setHeading(element.heading) : ""
    );
  };

  const sendSizeHander = () => {
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
        <Typography
          variant="h4"
          sx={{ justifyContent: "center", display: "flex" }}
        >
          {heading}
        </Typography>

        {game == null &&
          games.map((gameName) => {
            return (
              <GameButton
                key={gameName.title}
                gameName={gameName.title}
                gridSize={gridSize} //needs to be set independently of other button
                sendGameHandler={sendGameHandler}
                sendSizeHander={sendSizeHander}
              />
            );
          })}
        {game != null && <Board size={gridSize} game={game} />}
      </div>
    </>
  );
}

export default App;
