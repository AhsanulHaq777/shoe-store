import React from 'react';
import { useParams } from 'react-router-dom';
import Shoe from './../Shoe.json';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

// function ShoeDetail() {
//     const { id } = useParams();
//     const shoe = Shoe[id];
//     if(!shoe){
//         return <h2>Product not found!</h2>
//     }
//     return (
//         <div>
//             <h2>Detail of the selected shoe</h2>
//             <div>
//                 <h4>{shoe.name}</h4>
//                 <img src={shoe.img} alt={shoe.name} />
//             </div>
//         </div>
//     );
// }
// export default ShoeDetail;


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000,
    backgroundColor: "#fff748",
  },
  image: {
    width: 600,
    height: 600,
    boxShadow: '10px 10px 10px #3c1a5b',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ShoeDetail() {
  const classes = useStyles();
  const { id } = useParams();
    const shoe = Shoe[id];

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} src={shoe.img} alt={shoe.name} />
              {/* <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" /> */}
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                {shoe.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Sneakers with soft sole and lases
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
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
    </div>
  );
}
