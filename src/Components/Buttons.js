import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

const Buttons = () => {
//   const classes = useStyles();

  return (
    <div>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
      <Button>
          test
      </Button>
      <AccessAlarmIcon/>
    </div>
  );
}

export default Buttons;