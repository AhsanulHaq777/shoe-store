import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './../Shoe.css';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div  className={classes.root}>
            {/* <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        Shoes Store
                    </Typography>
                    <div className="links">
                        <Link to="/" >Home</Link> {' | '}
                        <Link to="/shoes" >Shoes</Link> {' | '}
                        <Link to="/about" >About</Link>
                    </div>
                </Toolbar>
            </AppBar> */}
            

            <div className="topnav">
                <Link to="/" className="title , active">SHOE STORE</Link>
                <Link to="/">Home</Link>
                <Link to="/shoes">Shoes</Link>
                <Link to="/about">About</Link>
            </div>



        </div>
    );
}
