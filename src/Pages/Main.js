import React from "react";
import bg from "../images/bg.svg";
import { makeStyles, Container, Grid, Paper } from "@material-ui/core";

import MyCard from "../Components/Menu/MyCard";

const useStyles = makeStyles({
  mainBg: {
    backgroundSize: "cover",
  },
  front: {
    background: "#add",
    position: "relative",
    zIndex: "3",
    // margin: "-60px 300px 0px",
  },
});

const Main = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <img src={bg} className={classes.mainBg} />
        {/* <h1>1</h1> */}
        <div className={classes.front}>
          <h1>Hiii</h1>
        </div>
      </div>
      <Container maxWidth="md">
        <Grid container>
          <Grid item>
            {/* <MyCard />
            <MyCard /> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Main;
