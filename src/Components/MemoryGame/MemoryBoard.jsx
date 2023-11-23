import { useEffect, useState } from "react";
import CardComp from "./CardComp";

const MemoryBoard = ({ images }) => {
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);

  const [found, setFound] = useState([]);

  const sendSelection = (image, index) => {
    console.log(image, index);

    firstChoice
      ? setSecondChoice([image, index])
      : setFirstChoice([image, index]);
  };

  const check = () =>
    firstChoice[0] == secondChoice[0]
      ? setFound((prev) => [...prev, firstChoice[0]])
      : "";

  const reset = () => {
    setTimeout(() => {
      setFirstChoice(null);
      setSecondChoice(null);
    }, 1000);
  };

  useEffect(() => {
    firstChoice ? check() : "";

    secondChoice ? reset() : "";
  }, [secondChoice]);

  return (
    <>
      {images.map((e, i) => {
        return (
          <CardComp
            image={e.img}
            id={i}
            stat={
              (firstChoice
                ? firstChoice[0] == e.img && firstChoice[1] == i
                : "") ||
              (secondChoice
                ? secondChoice[0] == e.img && secondChoice[1] == i
                : "") ||
              found.find((element) => element == e.img)
            }
            key={i}
            sendSelection={sendSelection}
          />
        );
      })}
    </>
  );
};

export default MemoryBoard;
