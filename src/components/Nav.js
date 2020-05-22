import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Breadcrumbs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Home, AccountBox, SendRounded } from '@material-ui/icons';

const Nav = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '10px',
      marginLeft: '10px',
      marginBottom: '10px',
    },
    link: {
      display: 'flex',
      textDecoration: 'none',
      color: '#3f51b5',
    },
    icon: {
      marginLeft: theme.spacing(0.25),
      marginRight: theme.spacing(0.1),
      width: 20,
      height: 20,
    },
    grid: {
      direction: 'row',
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.grid}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/" className={classes.link}>
            Home
            <Home className={classes.icon} />
          </Link>
          <Link to="/profile" className={classes.link}>
            Profile
            <AccountBox className={classes.icon} />
          </Link>
          <Link to="/dm" className={classes.link}>
            DMs
            <SendRounded className={classes.icon} />
          </Link>
        </Breadcrumbs>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/login" className={classes.link}>
            Login
          </Link>
          <Link to="/logout" className={classes.link}>
            Logout
          </Link>
        </Breadcrumbs>
      </Grid>
    </div>
  );
};

export default Nav;
