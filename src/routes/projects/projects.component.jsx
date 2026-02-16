import * as React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import CrwnClothing from "../../pictures/cwn-clothing.png";
import Forkify from "../../pictures/forkify.jpg";
import GameOfLife from "../../pictures/gameOfLife.jpg";
import HermesChat from "../../pictures/hermesChat.png";
import Mapty from "../../pictures/mapty.jpg";
import WorkoutApp from "../../pictures/workoutApp.png";
import CakeRush from "../../pictures/cakeRush.png";

const cardSx = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  ":hover": { boxShadow: 20 },
};

const actionsSx = {
  flexGrow: 1,
  alignItems: "flex-end",
  justifyContent: "flex-end",
  paddingRight: "20px",
};

const Projects = () => {
  const scrollerRef = React.useRef(null);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  // How many columns are visible per breakpoint?
  const visibleCols = isMdUp ? 3 : isSmUp ? 2 : 1;

  // How many rows per breakpoint? (2 rows only on md+)
  const rows = isMdUp ? 2 : 1;

  // MUI gap=2 => theme.spacing(2) => "16px"
  const gapPx = parseFloat(theme.spacing(2)); // 16

  // Column width so that exactly `visibleCols` fit in the viewport
  // total gaps between columns = (visibleCols - 1) * gapPx
  const colWidth = `calc((100% - ${(visibleCols - 1) * gapPx}px) / ${visibleCols})`;

  const scrollByPage = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;

    // One page = container width (this matches "exactly one view" across breakpoints)
    const amount = el.clientWidth;

    el.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const projects = [
    {
      title: "Fitness App",
      desc: "Fitness workout tracking iOS application built with React Native.",
      tech: "React Native, JavaScript",
      image: WorkoutApp,
      imageTitle: "Fitness App",
      github: "https://github.com/ALagodzinska/Fitness-App",
    },
    {
      title: "Clothing Website",
      desc: "Clothing store website created using React and Redux.",
      tech: "TypeScript, JavaScript, React, Redux, Stripe, Firebase",
      image: CrwnClothing,
      imageTitle: "CRWN clothing",
      live: "https://stacy-clothing.netlify.app/",
      github: "https://github.com/ALagodzinska/Crown-Clothing",
    },
    {
      title: "Cake Rush",
      desc: "Java Swing interactive desktop memory game.",
      tech: "Java, Java Swing, JSON, JUnit",
      image: CakeRush,
      imageTitle: "Cake Rush",
      github: "https://github.com/ALagodzinska/CakeRush",
    },
    {
      title: "Console Game",
      desc: "C# Console application - Conway's Game of Life.",
      tech: "C#, Console Application, Json",
      image: GameOfLife,
      imageTitle: "Game Of Life",
      github: "https://github.com/ALagodzinska/ConwaysGameOfLife",
    },
    {
      title: "Real-Time Chat",
      desc: "Real-time SignalR chat application using MVC ASP .NET Core web application.",
      tech: "C#,.NET, JavaScript, SignalR, Azure SQL DB",
      image: HermesChat,
      imageTitle: "Hermes Chat App",
      github: "https://github.com/ALagodzinska/ChatApp",
    },
    {
      title: "Recipes Library",
      desc: "App that can easily search for and save your favorite recipes, or create and add your very own recipes to the collection.",
      tech: "JavaScript, Scss, Babel, Forkify API",
      image: Forkify,
      imageTitle: "Forkify App",
      live: "https://forkify-recipes-stacy.netlify.app/",
      github: "https://github.com/ALagodzinska/Forkify",
    },
    {
      title: "Workout Tracker",
      desc: "Application to track and view workouts on a map, add a workout route and sort all workouts.",
      tech: "JavaScript, leaflet, open-meteo API",
      image: Mapty,
      imageTitle: "Mapty App",
      live: "https://alagodzinska.github.io/MaptyApp/",
      github: "https://github.com/ALagodzinska/MaptyApp",
    },

    // Add more projects to see scrolling clearly
  ];

  return (
    <Box sx={{ pt: { xs: "40px", md: "130px" } }}>
      <Typography
        align="center"
        sx={{ py: 5, typography: { xs: "h4", md: "h2" } }}
      >
        PROJECTS
      </Typography>

      <Box sx={{ position: "relative", maxWidth: "950px", mx: "auto", pb: 2 }}>
        <IconButton
          onClick={() => scrollByPage("left")}
          sx={{
            display: { xs: "none", sm: "flex" },
            position: "absolute",
            left: -22,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "background.paper",
            boxShadow: 2,
            "&:hover": { bgcolor: "background.paper" },
          }}
          aria-label="scroll left"
        >
          <ChevronLeftIcon />
        </IconButton>

        <IconButton
          onClick={() => scrollByPage("right")}
          sx={{
            display: { xs: "none", sm: "flex" },
            position: "absolute",
            right: -22,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "background.paper",
            boxShadow: 2,
            "&:hover": { bgcolor: "background.paper" },
          }}
          aria-label="scroll right"
        >
          <ChevronRightIcon />
        </IconButton>

        <Box
          ref={scrollerRef}
          sx={{
            display: "grid",
            gridAutoFlow: "column",
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            gridAutoColumns: colWidth,
            gap: 2,
            overflowX: "auto",
            scrollBehavior: "smooth",
            px: 1,
            pb: 1,
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {projects.map((p) => (
            <Box key={p.title} sx={{ scrollSnapAlign: "start" }}>
              <Card sx={cardSx}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={p.image}
                  title={p.imageTitle}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {p.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {p.desc}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "65%", pt: 1 }}
                    color="text.secondary"
                  >
                    {p.tech}
                  </Typography>
                </CardContent>

                <CardActions sx={actionsSx}>
                  {p.live && (
                    <IconButton edge="end" aria-label="live site" href={p.live}>
                      <LanguageIcon />
                    </IconButton>
                  )}
                  {p.github && (
                    <IconButton edge="end" aria-label="github" href={p.github}>
                      <GitHubIcon />
                    </IconButton>
                  )}
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
