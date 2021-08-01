import React from "react";
import { Button, Menu, MenuItem, makeStyles, Tooltip } from "@material-ui/core";

import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import BookIcon from "@material-ui/icons/Book";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  Pad: {
    padding: "10px 30px",
  },
});

const NavbarInteract = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (pathName) => {
    setAnchorEl(null);
    history.push(pathName);
  };

  const history = useHistory();

  return (
    <div>
      {/* Experience */}
      <Button
        color="inherit"
        className={classes.Pad}
        onClick={() => history.push("/experience")}
      >
        <FlashOnIcon /> Experiences
      </Button>
      {/* </NavLink> */}

      {/* Education */}
      <Button
        color="inherit"
        className={classes.Pad}
        onClick={() => history.push("/education")}
      >
        <BookIcon />
        Education
      </Button>

      {/* Projects */}
      <Button
        aria-haspopup="true"
        color="inherit"
        className={classes.Pad}
        onClick={handleClick}
      >
        {<AccountTreeOutlinedIcon />}Projects
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => handleClose("/wonder")}>
          Wonder Bounding Land
        </MenuItem>
        <MenuItem onClick={() => handleClose("/Pirate")}>
          Pirate of Digestive Island
        </MenuItem>
        <MenuItem onClick={() => handleClose("/school")}>School Route</MenuItem>
        <MenuItem onClick={() => handleClose("/chock")}>Chock Chana</MenuItem>
      </Menu>

      {/* Facebook */}
      <Tooltip
        title="Follow me on Facebook"
        placement={window.innerWidth > 959 ? "top" : "left"}
      >
        <Button
          href="https://www.facebook.com/nattapon.sukthaworn/"
          target="_blank"
          color="inherit"
        >
          <FacebookIcon />
        </Button>
      </Tooltip>

      {/* Git hub */}
      <Tooltip
        title="Follow me on Github"
        placement={window.innerWidth > 959 ? "top" : "left"}
        color="inherit"
      >
        <Button href="https://github.com/Nattapon33998" target="_blank">
          <GitHubIcon />
        </Button>
      </Tooltip>

      {/* Download */}
      <Tooltip
        title="Download my resume"
        placement={window.innerWidth > 959 ? "top" : "left"}
      >
        <Button href="" target="_blank" color="inherit">
          <CloudDownloadIcon />
        </Button>
      </Tooltip>
    </div>
  );
};

export default NavbarInteract;
