import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';


import MeImage from '../images/mePic1.jpeg'
import { SvgIcon } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 455,
    height: '45vw',
  },
});

export default function AboutMeCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="320"
          image= {MeImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ryan Mendez
          </Typography>
          <Typography  gutterBottom variant="body1" color="textSecondary" component="h1">
          Full Stack Web Developer with a background in live entertainment and hospitality. I have life-long dedication to learning. I love using my experience in live events as a guide when developing immersive user-friendly applications. Known to my past colleagues as a humble team player eager to work collaboratively to get the job done.  

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton component={LinkedInIcon} fontSize="large" color="primary" onClick={() => window.open("https://www.linkedin.com/in/ryan-mendez-24231874/", "_blank")}/>
        <IconButton component={GitHubIcon} fontSize="large" color="primary"  onClick={() => window.open("http://github.com/rymen80", "_blank")}/>
      </CardActions>
    </Card>
  );
}
