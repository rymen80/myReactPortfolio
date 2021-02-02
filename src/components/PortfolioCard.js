import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Image from "../images/nightIn.png";
import BgImage from '../images/keyboard.jpeg'


const useStyles = makeStyles((theme) => ({
     root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    }));

const styles = {
    paperContainer: {
        height: '100vh',
        backgroundImage: `url(${BgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        margin: -24,
        padding: 24,

    }

};


export default function PortfolioCard() {
    const classes = useStyles();
    
    
    return (
        <Paper style={styles.paperContainer}>
            <React.Fragment>
                <Container maxWidth="sm">
                    <CssBaseline/>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <Paper className={classes.paper}><Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={Image}
                                            title="NightIn App"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                night in
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Simplify your night with night in.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Share
                                        </Button>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>

                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}><Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={Image}
                                            title="NightIn App"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                night in
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Simplify your night with night in.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Share
                                        </Button>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>

                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}><Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={Image}
                                            title="NightIn App"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                night in
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Simplify your night with night in.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Share
                                        </Button>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>

                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}><Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={Image}
                                            title="NightIn App"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                night in
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Simplify your night with night in.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Share
                                        </Button>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>

                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </React.Fragment>
        </Paper>
    );
}


