import { useState, useRef } from "react";
import CardComp from "../Cards/CardComp";

const MatchPieces = ({ images }) => {
  const containerRef = useRef();

  const [matched, setMatched] = useState([]);
  const [isDragging, setIsDragging] = useState();

  const draggingStyles = {
    display: "inline",
    boxShadow: "2px 20px 30px rgba(0,0,0,0.15)",
  };
  const styles = { display: "inline" };

  const sendMatch = (e, i) => {
    // console.log(e.target);
  };

  const dragStart = (e, index) => {
    // console.log({ x: e.clientX, y: e.clientY });

    setIsDragging(index);

    let copy = JSON.parse(JSON.stringify(images));
    let draggedItem = copy[index];
    draggedItem["stat"] = "temp";
    images.splice(index, 0, draggedItem);

    const item = e.target.closest(".card");
    const dragBoundingRect = item.getBoundingClientRect();

    let x = e.clientX;
    let y = e.clientY;

    item.style.position = "fixed";
    item.style.zIndex = 10;
    item.style.width = `${dragBoundingRect.width}px`;
    item.style.height = `${dragBoundingRect.height}px`;
    item.style.top = `${dragBoundingRect.top - y / 2}px`;
    item.style.left = `${dragBoundingRect.left}px`;
    item.style.cursor = `grabbing`;

    const dragMove = (e) => {
      console.log(images);
      // console.log({ x: e.clientX, y: e.clientY });

      const posX = e.clientX - x;
      const posY = e.clientY - y;

      item.style.transform = `translate(${posX}px,${posY}px)`;
    };
    document.onpointermove = dragMove;

    const dragEnd = (e) => {
      console.log({ x: e.clientX, y: e.clientY });

      document.onpointerup = "";
      document.onpointermove = "";
      setIsDragging();
      item.style = "";
      item.style.display = "inline";

      images.forEach((image, i) =>
        image.stat == "temp" ? images.splice(i, 1) : ""
      );
    };
    document.onpointerup = dragEnd;
  };

  return (
    <div className="container" ref={containerRef}>
      {images.map((e, i) => {
        return (
          <div
            className="card"
            key={i}
            style={isDragging == i ? draggingStyles : styles}
            draggable
            onPointerDown={(element) => dragStart(element, i)}
          >
            <CardComp
              image={e.img}
              id={i}
              stat={true}
              sendSelection={sendMatch}
              game={"Match Pieces"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MatchPieces;
