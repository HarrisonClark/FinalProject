import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Paper as MuiPaper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(150),
      height: theme.spacing(40),
    },
  },
}));

const Paper = ({ content }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiPaper elevation={3} variant="outlined" square>
        {content}
      </MuiPaper>
    </div>
  );
};

export default Paper;
