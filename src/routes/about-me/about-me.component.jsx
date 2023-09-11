import { Box, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import MyPhoto from "../../pictures/portfolio-pic.png";

const AboutMe = () => {
  return (
    <Fragment>
      <Typography variant="h2" align="center" sx={{ py: 3 }}>
        ABOUT ME
      </Typography>
      <Box>
        <Typography variant="h6" align="center">
          Nice to meet you!
        </Typography>
        <Typography variant="h6" align="center">
          My Name is ANASTASIJA LAGODZINSKA!
        </Typography>
        <Typography variant="body2" align="center" sx={{ pb: 2 }}>
          JUNIOR SOFTWARE DEVELOPER
        </Typography>
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={3} sx={{ px: 2 }}>
          <img src={MyPhoto} alt="Me" width={"100%"} height={"auto"} />
        </Grid>
        <Grid item xs={5} md={4}>
          <Typography fontSize={"1.5vw"} sx={{ pb: 2 }}>
            My journey into the world of software development began
            independently by learning online with a hunger for knowledge and a
            love for a good challenge.
          </Typography>
          <Typography fontSize={"1.5vw"} sx={{ pb: 2 }}>
            I'm dedicated to continuous learning, always seeking new
            possibilities to expand my skills. I love the opportunity to solve
            puzzles and find efficient, creative solutions to real-world
            problems.
          </Typography>
          <Typography fontSize={"1.5vw"}>
            Feel free to explore my portfolio and see how my passion for coding
            comes to life through my projects.
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AboutMe;
