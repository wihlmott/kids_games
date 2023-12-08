import { Card, Grid, Typography } from "@mui/material";

const GameButton = ({
  gameName,
  gridSize,
  sendGameHandler,
  sendSizeHander,
}) => {
  const buttonStyles = {
    m: "auto",
    mt: "50px",
    maxWidth: "350px",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  };

  const settingStyle = {
    p: 3,
    pl: 3.3,
    pr: 3.7,
    borderRadius: "50%",
    boxShadow: "-0.5px -0.5px 4px 3px rgba(0,0,0,0.75) inset",
  };

  const textStyles = {
    m: "auto",
    pl: 6,
    pt: 2,
    pb: 2,
    mr: 0,
  };

  const setGameHandler = () => sendGameHandler(gameName);

  const setGridSizeHandler = () => sendSizeHander(true);

  return (
    <Card sx={buttonStyles}>
      <Grid container>
        <Grid xs={10} sx={textStyles} onClick={setGameHandler} item>
          <Typography>{gameName}</Typography>
        </Grid>
        <Grid xs={2} item>
          <Card sx={settingStyle} onClick={setGridSizeHandler}>
            {gridSize}
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
};

export default GameButton;
