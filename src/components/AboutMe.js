import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import AboutMeCard from './AboutMeCard'
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
         <AboutMeCard/>
             
        </Container>
      </React.Fragment>
    </Paper>
  );
}