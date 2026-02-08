import { Box, Grid, Stack, Typography } from "@mui/material";
import { Fragment } from "react";
import MyPhoto from "../../pictures/portfolio-pic.jpg";
import {
  CsharpIcon,
  JavaScriptIcon,
  HtmlIcon,
  CssIcon,
  SqlIcon,
  DotNetIcon,
  ReactIcon,
  VSCodeIcon,
  VSIcon,
  GitIcon,
  NpmIcon,
  AzureIcon,
  JavaIcon,
  RIcon,
  CppIcon,
  JupyterIcon,
} from "../../icons/icons";

const AboutMe = () => {
  return (
    <Box sx={{ pt: { xs: "40px", md: "130px" } }}>
      <Box>
        <Typography variant="h6" align="center">
          My name is Anastasija Lagodzinska
        </Typography>
        <Typography variant="body2" align="center" sx={{ pb: 2 }}>
          SOFTWARE DEVELOPER
        </Typography>
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={{ pb: 2, maxWidth: "750px", mx: "auto" }}
      >
        <Grid item md={6} sx={{ px: 2 }}>
          <img src={MyPhoto} alt="Me" width={"100%"} height={"auto"} />
        </Grid>
        <Grid item md={6}>
          <Typography
            fontSize={{ xs: "16px", sm: "20px" }}
            sx={{ pb: { xs: 1, sm: 2 }, px: { xs: 2, sm: 0 } }}
          >
            My journey into the world of software development began
            independently by learning online with a hunger for knowledge and a
            love for a good challenge.
          </Typography>
          <Typography
            fontSize={{ xs: "16px", sm: "20px" }}
            sx={{ pb: { xs: 1, sm: 2 }, px: { xs: 2, sm: 0 } }}
          >
            I'm dedicated to continuous learning, always seeking new
            possibilities to expand my skills. I love the opportunity to solve
            puzzles and find efficient, creative solutions to real-world
            problems.
          </Typography>
          <Typography
            fontSize={{ xs: "16px", sm: "20px" }}
            sx={{ px: { xs: 2, sm: 0 } }}
          >
            Feel free to explore my portfolio and see how my passion for coding
            comes to life through my projects.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs="auto">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1, md: 2 }}
            justifyContent={"flex-end"}
          >
            <Typography variant="overline">Programming Languages:</Typography>
            <Stack direction={"row"} spacing={1}>
              <JavaIcon />
              <RIcon />
              <CsharpIcon />
              <JavaScriptIcon />
              <CppIcon />
              <HtmlIcon />
              <CssIcon />
              <SqlIcon />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs="auto">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1, md: 2 }}
          >
            <Typography variant="overline" align="center">
              Tools:
            </Typography>
            <Stack direction={"row"} spacing={1}>
              <VSCodeIcon />
              <VSIcon />
              <GitIcon />
              <NpmIcon />
              <JupyterIcon />
              <AzureIcon />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1, md: 2 }}
            justifyContent={"center"}
          >
            <Typography variant="overline" align="center">
              Frameworks:
            </Typography>
            <Stack direction={"row"} spacing={1} justifyContent={"center"}>
              <DotNetIcon />
              <ReactIcon />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
