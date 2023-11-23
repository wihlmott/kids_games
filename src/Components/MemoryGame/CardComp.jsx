import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styles from "./CardComp.module.css";
import { Grid } from "@mui/material";

const CardComp = ({ image, id, stat, sendSelection }) => {
  const screenSize = window.innerWidth;

  const cardStyles = {
    width: screenSize > 400 ? "225px" : "25vw",
    height: screenSize > 400 ? "260px" : "18vh",
    m: 1.5,
    display: "inline-block",
  };
  const selectedHandler = () => {
    if (stat) return;
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
