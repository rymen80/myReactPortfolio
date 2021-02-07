import React from "react";

import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Image from "../images/aboutMe.jpg";
import '../images/aboutMe.css'

const styles = {
  paperContainer: {
    height: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "calc(100vw + 48px)",
    margin: -24,
    padding: 24,
    fontSize: "15px",
  },
  
};

export default function AboutMe() {
  return (
    <Paper style={styles.paperContainer}>
      <React.Fragment>
        <Container maxWidth="sm">
          <div>
            <p>
              Hello, my Name is Ryan Mendez and welcome to my portfolio site.
              First and foremost I am the father of two beautiful girls and
              husband to an extraordinary woman. I grew up in California's
              Central Valley in a small town called Tulare but have lived in San
              Francisco for the last 18 years. I enjoy fishing, hiking and
              playing video games. If I could have any job in the world I would
              be a Stand Up Comedian as I have always enjoyed making people
              laugh. I worked for the same company for 15 as an accounting
              representative and later assistant controller. I've always been
              interested in software development and decided a few years ago to
              give it a try so I left my job and embarked on this journey.
            </p>
             </div>
        </Container>
      </React.Fragment>
    </Paper>
  );
}
