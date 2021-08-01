import React from "react";
import bg from "../images/bg.svg";
import { makeStyles, Container, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  mainBg: {
    // width: "100%",
    backgroundSize: "cover",
    position: "relative",
  },
});

const Main = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <img src={bg} className={classes.mainBg} />
        <h1 styles={{ position: "absolute" }}>Hiii</h1>
      </div>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Main;
