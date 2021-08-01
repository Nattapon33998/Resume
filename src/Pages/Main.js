import React from "react";
import bg from "../images/bg.svg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  mainBg: {
    // width: "100%",
    backgroundSize: "cover",
  },
});

const Main = () => {
  const classes = useStyles();
  return (
    <div>
      <img src={bg} className={classes.mainBg}></img>
      <h1>Hiii</h1>
      <h1>Hiii</h1>
      <h1>Hiii</h1>
      <h1>Hiii</h1>
      <h1>Hiii</h1>
    </div>
  );
};

export default Main;
