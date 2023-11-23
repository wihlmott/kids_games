import { useEffect, useState } from "react";

import MemoryBoard from "./MemoryGame/MemoryBoard";

import { images } from "./../config";
import { MemoryBoardContext } from "./../Context";

const MemoryBoardGame = ({ size }) => {
  const [imagesCtx, setImagesCtx] = useState([]);

  useEffect(() => {
    const shuffled = images.sort(() => Math.random() - 0.5);
    const short = shuffled.slice(0, size);

    const newArr = [...short, ...short].sort(() => Math.random() - 0.5);

    setImagesCtx(newArr);
  }, []);

  return (
    <>
      <MemoryBoardContext.Provider value={[imagesCtx, setImagesCtx]}>
        <MemoryBoard images={imagesCtx} />
      </MemoryBoardContext.Provider>
    </>
  );
};

export default MemoryBoardGame;
