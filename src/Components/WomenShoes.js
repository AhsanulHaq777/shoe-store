import React from 'react';
import WomenShoe from './../WomenShoe.json';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 20,
        padding: 'auto',
        
    },

    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: 'auto',
        maxWidth: 1000,
        backgroundColor: "#fff748",
        
    },
    image: {
        // width: 200,
        // height: 200,
        boxShadow: '10px 10px 10px #3c1a5b',
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    btn: {
        color: "#fff748",
        backgroundColor: "#3c1a5b",
        
    }
}));

function WomenShoes() {
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <Grid container spacing={3}>
                {Object.entries(WomenShoe).map(([shoekey, { name, img }]) => {
                    return (

                        <Grid item xs={12} sm={6} lg={4} spacing={2}>
                            
                                <Paper className={classes.paper}>

                                    <Grid container spacing={2}>
                                        <Grid item xs={6} sm={6}>
                                        <Link key={shoekey} to={`/womenshoe/${shoekey}`}>
                                            <ButtonBase className={classes.image}>
                                                <img className={classes.img} src={img} alt={name} />
                                            </ButtonBase>
                                            </Link>
                                        </Grid>
                                        <Grid item xs={6} sm={6} container>
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item xs>
                                                    <Typography gutterBottom variant="subtitle1">
                                                        {name}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs>
                                                <Typography variant="subtitle1">$19.00</Typography>
                                                    
                                                </Grid>
                                            </Grid>
                                            <Grid item xs>
                                            <Link key={shoekey} to={`/womenshoe/${shoekey}`}>
                                                     <Button className={classes.btn} variant="contained">Cart</Button> 
                                                     </Link>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Paper>
                           
                        </Grid>

                    )
                })
                }
            </Grid>
        </div >
    )
}
export default WomenShoes;
