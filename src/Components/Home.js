import React from 'react';
import './../Shoe.css';
import './../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: '1500px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "#3c1a5b",
        backgroundColor: "#fff748",
    
    },
    image: {
        // width: 1500,
        height: 500,
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className="App">
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={4} container spacing={3}>
                        <Grid item xs={12}>
                            <Link to="/shoes">
                                <Paper className={classes.paper}>
                                    <img className={classes.img} src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/03/11/12/best-mens-running-shoes-2020-indybest.jpg" />
                                    <h3>MEN SHOES</h3>
                                </Paper>
                            </Link>
                        </Grid>
                        <Grid item xs={12}>
                            <Link to="/womenshoe">
                                <Paper className={classes.paper}>
                                <img className={classes.img} src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/02/17/16/best-womens-trainers-indybest.jpg?w968h681" />
                                <h3>WOMEN SHOES</h3>
                                </Paper>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper className={classes.paper}>
                            <img className={classes.img} src="https://assets.materialup.com/uploads/c6b7a1c9-d39c-44b6-9819-3e04a3e9bbf2/preview.gif"/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
