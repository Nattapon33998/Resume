import React from "react";
import { makeStyles, AppBar, Toolbar, Button } from "@material-ui/core";

import NavbarInteract from "./NavbarInteract";

import { useHistory, NavLink } from "react-router-dom";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
    padding: "10px 40px",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <div className={classes.title}>
            <Button color="inherit" onClick={() => history.push("/")}>
              Nattapon Sukthaworn
            </Button>
          </div>
          <NavbarInteract />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
