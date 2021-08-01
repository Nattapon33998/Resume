import React, { Component } from "react";

import Navbar from "./Components/NavBar/Navbar";
import Main from "./Pages/Main";

import Grid from "@material-ui/core/Grid";

import { Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/experience">
            <h1>Experience</h1>
            <h1>Experience</h1>
          </Route>
          <Route exact path="/education">
            <h1>Education</h1>
            <h1>Education</h1>
          </Route>
          <Route exact path="/pirate">
            <h1>Pirate of Digestive Island</h1>
            <h1>Pirate of Digestive Island</h1>
          </Route>
          <Route exact path="/wonder">
            <h1>Wonder bounding land</h1>
            <h1>Wonder bounding land</h1>
          </Route>
          <Route exact path="/school">
            <h1>School</h1>
            <h1>School</h1>
          </Route>
          <Route exact path="/chock">
            <h1>ChockChana</h1>
            <h1>ChockChana</h1>
          </Route>
        </Switch>

        {/* <Grid container>
          <Grid item xs={12}>
            <Main />
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid> */}
      </div>
    );
  }
}
