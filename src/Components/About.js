import React from 'react';
import './../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '1000px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'justify',
    color: "#3c1a5b",
    backgroundColor: "#fff748",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
      <div className="App">
          <div className={classes.root}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <h2>WHO WE ARE</h2>
                    <p>SHOE STORE is an online portal that provides a unique & dependable SHOE shopping experience across Pakistan. We are the official online retail platform for SERVIS, NDURE, SHOE PLANET, CALZA, LIZA and TOZ. It is our goal to give you high-quality shoe products & the best service in the easiest possible manner.</p>
                    <br />
                    <p>SHOE STORE is basically a project of SERVICE SALES CORPORATION (PVT.) LTD., (SSC) which has been Pakistan's leading retailer SINCE 1954, has always been at the forefront of taking new initiatives to provide best experience to our customers across Pakistan. Our operative business is divided into the segments of wholesale and retail. SSC is a leading player with more than 500 retail stores and exceeding 1500 independent retailers in its wholesale network across Pakistan. It operates with the sales lines Servis, Ndure, Shoe Planet & CALZA. We are a team that takes immense pride in our rich heritage. We work day in and day out to keep our legacy alive.</p>
                </Paper>
            </Grid>
          </div>
      </div>
    
  );
}
