import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import styles from "./CardComp.module.css";
import { Grid } from "@mui/material";

const CardComp = ({ image, id, stat, sendSelection, game }) => {
  const screenSize = window.innerWidth;

  const cardStyles = {
    width: screenSize > 500 ? "225px" : "25vw",
    height: screenSize > 500 ? "260px" : "17vh",
    m: 1.5,
    display: "inline-block",
    boxShadow: "2px 20px 30px rgba(0,0,0,0.4)",
  };
  const selectedHandler = () => {
    if (stat && game == "Memory Game") return;
    sendSelection(image, id);
  };

  return (
    <Grid
      item
      className={!stat ? styles.card : styles.activeCard}
      xs={3}
      md={2}
    >
      <Card sx={cardStyles} onClick={selectedHandler}>
        <CardContent>
          <img
            src={image}
            alt="img"
            className={!stat ? styles.imageStyle : styles.activeImg}
          ></img>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardComp;
