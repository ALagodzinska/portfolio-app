import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import * as React from "react";
import CrwnClothing from "../../pictures/cwn-clothing.png";
import Forkify from "../../pictures/forkify.jpg";
import GameOfLife from "../../pictures/gameOfLife.jpg";
import HermesChat from "../../pictures/hermesChat.png";
import Mapty from "../../pictures/mapty.jpg";

const Projects = () => {
  return (
    <Box sx={{ pt: { xs: "40px", md: "130px" } }}>
      <Typography
        align="center"
        sx={{ py: 5, typography: { xs: "h4", md: "h2" } }}
      >
        PROJECTS
      </Typography>
      <Box
        direction="row"
        justifyContent="center"
        sx={{ pb: 2, maxWidth: "750px", mx: "auto" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                ":hover": {
                  boxShadow: 20,
                },
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={CrwnClothing}
                title="CRWN clothing"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Clothing Website
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Clothing store website created using React and Redux.
                </Typography>
                <Typography
                  sx={{ fontSize: "65%", pt: 1 }}
                  color="text.secondary"
                >
                  TypeScript, JavaScript, React, Redux, Stripe, Firebase
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  flexGrow: 1,
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  paddingRight: "20px",
                }}
              >
                <IconButton
                  edge="end"
                  aria-label="github"
                  href="https://stacy-clothing.netlify.app/"
                >
                  <LanguageIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="github"
                  href="https://github.com/ALagodzinska/Crown-Clothing"
                >
                  <GitHubIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                ":hover": {
                  boxShadow: 20,
                },
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={HermesChat}
                title="Hermes Chat App"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Real-Time Chat
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Real-time SignalR chat application using MVC ASP .NET Core web
                  application.
                </Typography>
                <Typography
                  sx={{ fontSize: "65%", pt: 1 }}
                  color="text.secondary"
                >
                  C#,.NET, JavaScript, SignalR, Azure SQL DB
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  flexGrow: 1,
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  paddingRight: "20px",
                }}
              >
                <IconButton
                  edge="end"
                  aria-label="github"
                  href="https://github.com/ALagodzinska/ChatApp"
                >
                  <GitHubIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                ":hover": {
                  boxShadow: 20,
                },
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={GameOfLife}
                title="Game Of Life"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Console Game
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  C# Console application - Conway's Game of Life.
                </Typography>
                <Typography
                  sx={{ fontSize: "65%", pt: 1 }}
                  color="text.secondary"
                >
                  C#, Console Application, Json
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  flexGrow: 1,
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  paddingRight: "20px",
                }}
              >
                <IconButton
                  edge="end"
                  aria-label="github"
                  href="https://github.com/ALagodzinska/ConwaysGameOfLife"
                >
                  <GitHubIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                ":hover": {
                  boxShadow: 20,
                },
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={Forkify}
                title="Forkify App"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Recipes Library
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  App that can easily search for and save your favorite recipes,
                  or create and add your very own recipes to the collection.
                </Typography>
                <Typography
                  sx={{ fontSize: "65%", pt: 1 }}
                  color="text.secondary"
                >
                  JavaScript, Scss, Babel, Forkify API
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  flexGrow: 1,
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  paddingRight: "20px",
                }}
              >
                <IconButton
                  edge="end"
                  aria-label="github"
                  href="https://forkify-recipes-stacy.netlify.app/"
                >
                  <LanguageIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="github"
                  href="https://github.com/ALagodzinska/Forkify"
                >
                  <GitHubIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={12} md={6}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                ":hover": {
                  boxShadow: 20,
                },
              }}
            >
              <CardMedia sx={{ height: 140 }} image={Mapty} title="Mapty App" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Workout Tracker
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Application to track and view workouts on a map, add a workout
                  route and sort all workouts.
                </Typography>
                <Typography
                  sx={{ fontSize: "65%", pt: 1 }}
                  color="text.secondary"
                >
                  JavaScript, leaflet, open-meteo API
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  flexGrow: 1,
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  paddingRight: "20px",
                }}
              >
                <IconButton
                  edge="end"
                  aria-label="github"
                  href="https://alagodzinska.github.io/MaptyApp/"
                >
                  <LanguageIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="github"
                  href="https://github.com/ALagodzinska/MaptyApp"
                >
                  <GitHubIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
