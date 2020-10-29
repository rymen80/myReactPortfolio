import * as React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from "@material-ui/core"
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing(3),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));



export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Button
                        component={Link}
                        to='/'
                        color="inherit">
                        About</Button>
                    <Button
                        to='/discover'
                        component={Link}
                        color="inherit">
                        Discover
                    </Button>
                    <Button
                        to='/search'
                        component={Link}
                        color="inherit">
                        Search
                    </Button>

                 </Toolbar>
            </AppBar>
        </div>
    );
}


