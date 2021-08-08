import React from "react";
import { makeStyles, Container, Grid, Paper } from "@material-ui/core";
import classNames from "classnames";

import bg from "../images/bg.svg";
import profilePicture from "../images/Nattapon.jpg";

import mainStyle from "../Styles/mainStyle";

import MyCard from "../Components/Menu/MyCard";

const useStyles = makeStyles(mainStyle);

const Main = () => {
  const classes = useStyles();
  const profileStyle = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <div>
        <img src={bg} className={classes.mainBg} />
        <div className={classes.cover}>
          <Grid container justifyContent="center">
            <Grid item>
              <div className={classes.profile}>
                <div>
                  <img src={profilePicture} className={profileStyle} />
                </div>
                <div className={classes.nameA}>
                  <h1>Nattapon Sukthaworn</h1>
                  <h4>Programer</h4>
                </div>
              </div>
            </Grid>
          </Grid>
          <div className={classes.description}>
            <p>
              An artist of considerable range, Chet Faker — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
