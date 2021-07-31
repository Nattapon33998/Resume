import React from "react";
import { makeStyles, AppBar, Toolbar, Button } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";

import NavbarInteract from "./NavbarInteract";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
    padding: "10px 40px",
  },
  NavPad: {
    padding: "10px 40px",
  },
  minHeight: "50px",
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" styles={{ backgroundColor: blueGrey[500] }}>
        <Toolbar>
          {/* <Typography variant="h5" className={classes.title}>
            Nattapon
          </Typography> */}
          <div className={classes.title}>
            <Button color="inherit">Nattapon</Button>
          </div>
          <NavbarInteract />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
