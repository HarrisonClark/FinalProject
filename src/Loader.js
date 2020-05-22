import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Typography } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '10px',
  },
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        <CircularProgress />
      </Typography>
    </div>
  );
}
