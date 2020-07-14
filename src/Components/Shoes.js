import React from 'react';
import Shoe from './../Shoe.json';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 20,
        padding: 'auto',
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: 'auto',
        maxWidth: 1000,
    },
    image: {
        width: 200,
        height: 200,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

function Shoes() {
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <Grid container spacing={2}>
                {Object.entries(Shoe).map(([shoekey, { name, img }]) => {
                    return (

                        <Grid item xs={6} sm={4}>
                            <Link key={shoekey} to={`/shoes/${shoekey}`}>
                                <Paper className={classes.paper}>

                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <ButtonBase className={classes.image}>
                                                <img className={classes.img} src={img} alt={name} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item xs>
                                                    <Typography gutterBottom variant="subtitle1">
                                                        {name}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle1" style={{ cursor: 'pointer' }}>
                                                        Add to Cart
                                                            </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1">$19.00</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Paper>
                            </Link>
                        </Grid>

                    )
                })
                }
            </Grid>
        </div >
    )
}
export default Shoes;
