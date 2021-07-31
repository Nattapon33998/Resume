import React from "react";
import { Button, Menu, MenuItem, makeStyles, Tooltip } from "@material-ui/core";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  Pad: {
    padding: "10px 40px",
  },
});

const NavbarInteract = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        color="inherit"
        className={classes.Pad}
        onClick={handleClick}
      >
        {<AccountTreeOutlinedIcon />}Projects
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Wonder Bounding Land</MenuItem>
        <MenuItem onClick={handleClose}>Pirate of Digestive Island</MenuItem>
        <MenuItem onClick={handleClose}>School Route</MenuItem>
        <MenuItem onClick={handleClose}>Chock Chana</MenuItem>
      </Menu>

      {/* Facebook */}
      <Tooltip
        title="Follow me on Facebook"
        placement={window.innerWidth > 959 ? "top" : "left"}
      >
        <Button
          href="https://www.facebook.com/nattapon.sukthaworn/"
          target="_blank"
        >
          <FacebookIcon style={{ color: grey[50] }} />
        </Button>
      </Tooltip>

      {/* Git hub */}
      <Tooltip
        title="Follow me on Github"
        placement={window.innerWidth > 959 ? "top" : "left"}
      >
        <Button href="https://github.com/Nattapon33998" target="_blank">
          <GitHubIcon style={{ color: grey[50] }} />
        </Button>
      </Tooltip>
    </div>
  );
};

export default NavbarInteract;
