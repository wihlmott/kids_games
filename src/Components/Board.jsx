import { useEffect, useState } from "react";

import { images } from "../config";
import { BoardContext } from "../Context";
import MemoryBoard from "./MemoryGame/MemoryBoard";
import MatchPieces from "./MatchPieces/MatchPieces";

const Board = ({ size, game }) => {
  const [imagesCtx, setImagesCtx] = useState([]);

  useEffect(() => {
    const shuffled = images.sort(() => Math.random() - 0.5);
    const short = shuffled.slice(0, size);
    const newArr = [...short, ...short].sort(() => Math.random() - 0.5);

    setImagesCtx(newArr);
  }, []);

  return (
    <>
      <BoardContext.Provider value={[imagesCtx, setImagesCtx]}>
        {game == "Memory Game" && <MemoryBoard images={imagesCtx} />}
        {game == "Match The Pieces" && <MatchPieces images={imagesCtx} />}
      </BoardContext.Provider>
    </>
  );
};

export default Board;
