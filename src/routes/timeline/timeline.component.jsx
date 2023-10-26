import FilterVintageRoundedIcon from "@mui/icons-material/FilterVintageRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  unstable_createMuiStrictModeTheme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Fragment } from "react";
import TimelinePicture from "../../components/timeline-picture/timeline-picture.component";
import AccentureBootcampIcon from "../../pictures/accenture-bootcamp-logo.jpg";
import AccentureIcon from "../../pictures/accenture-logo.jpg";
import RtuLogo from "../../pictures/rtu-logo.png";
import SelfLearningPicture from "../../pictures/self-learning.png";
import SheGoesTechIcon from "../../pictures/sgt-logo.jpg";

const TimelineJourney = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ pt: { xs: "40px", md: "130px" } }}>
      <Typography
        // variant={{ xs: "h3", md: "h2" }}
        align="center"
        sx={{ py: 5, typography: { xs: "h3", md: "h2" } }}
      >
        PROFESSIONAL JOURNEY
      </Typography>
      <Box
        direction="row"
        justifyContent="center"
        sx={{ pb: 2, maxWidth: "750px", mx: "auto" }}
      >
        <Timeline position="alternate">
          <TimelineItem sx={isMobile ? { flexDirection: "column" } : {}}>
            <TimelineOppositeContent
              variant="body2"
              color="text.secondary"
              sx={isMobile ? { margin: "auto" } : {}}
            >
              <TimelinePicture
                imgSrc={SelfLearningPicture}
                alt="selfLearning"
              />
            </TimelineOppositeContent>
            <TimelineSeparator sx={isMobile ? { display: "none" } : {}}>
              <TimelineConnector />
              <TimelineDot color="secondary">
                <FilterVintageRoundedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" align="center" pb={1}>
                Self-learning
              </Typography>
              <Typography>
                I am actively enhancing my programming skills through online
                courses and hands-on project creation.
              </Typography>
              <Divider sx={{ py: 1 }} />
              <Typography align="center" sx={{ fontWeight: "bold", pt: 1.5 }}>
                Courses
              </Typography>
              <List sx={{ py: 0 }}>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary="SQL Course - University of Waterloo" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary="The Complete Javascript course - Udemy" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary="Complete React Developer - Udemy" />
                </ListItem>
              </List>
              <Typography align="center" sx={{ pt: 1.5, fontWeight: "bold" }}>
                Projects
              </Typography>
              <List sx={{ py: 0 }}>
                <ListItem
                  sx={{ py: 0 }}
                  secondaryAction={
                    <Fragment>
                      <IconButton
                        edge="end"
                        aria-label="github"
                        href="https://stacy-clothing.netlify.app/"
                        sx={{ mr: 0.5 }}
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
                    </Fragment>
                  }
                >
                  <ListItemText primary="Crown Clothing Website" />
                </ListItem>
                <ListItem
                  sx={{ py: 0 }}
                  secondaryAction={
                    <Fragment>
                      <IconButton
                        edge="end"
                        aria-label="github"
                        href="https://forkify-recipes-stacy.netlify.app/"
                        sx={{ mr: 0.5 }}
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
                    </Fragment>
                  }
                >
                  <ListItemText primary="Forkify Recipe App" />
                </ListItem>
                <ListItem
                  sx={{ py: 0 }}
                  secondaryAction={
                    <Fragment>
                      <IconButton
                        edge="end"
                        aria-label="github"
                        href="https://alagodzinska.github.io/MaptyApp/"
                        sx={{ mr: 0.5 }}
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
                    </Fragment>
                  }
                >
                  <ListItemText primary="Mapty Workouts Tracking" />
                </ListItem>
              </List>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              <TimelinePicture
                imgSrc={AccentureIcon}
                alt="accenture"
                direction="right"
              />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="secondary">
                <FilterVintageRoundedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Software Engineer Intern
              </Typography>
              <br />
              <Typography variant="body2" component="span">
                Accenture
              </Typography>
              <Typography>
                With the mentor's support, I accomplished several independent
                C#/.NET projects and gained experience in Azure DevOps. I
                acquired and put into practice code design principles while
                developing these projects.
              </Typography>
              <Typography align="center" sx={{ pt: 1, fontWeight: "bold" }}>
                Projects
              </Typography>
              <List sx={{ py: 0 }}>
                <ListItem
                  sx={{ py: 0 }}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="github"
                      href="https://github.com/ALagodzinska/ConwaysGameOfLife"
                    >
                      <GitHubIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary="Conways Game Of Life" />
                </ListItem>
                <ListItem
                  sx={{ py: 0 }}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="github"
                      href="https://github.com/ALagodzinska/Savanna-Game"
                    >
                      <GitHubIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary="Savanna Game" />
                </ListItem>
              </List>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              <TimelinePicture imgSrc={AccentureBootcampIcon} alt="bootcamp" />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="secondary">
                <FilterVintageRoundedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Accenture .NET Bootcamp
              </Typography>
              <br />
              <Typography variant="body2" component="span">
                Accenture
              </Typography>
              <Typography>
                In this Bootcamp, I advanced my C# programming skills, mastered
                Entity Framework for database interaction, explored APIs, and
                deepened my understanding of web application development. I
                collaborated on a Real-Time Chat Application project using C#,
                MVC, and SignalR, successfully deploying it to Azure Cloud.
              </Typography>
              <Typography align="center" sx={{ pt: 1, fontWeight: "bold" }}>
                Projects
              </Typography>
              <List sx={{ py: 0 }}>
                <ListItem
                  sx={{ py: 0 }}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="github"
                      href="https://github.com/ALagodzinska/ChatApp"
                    >
                      <GitHubIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary="Hermes Chat App" />
                </ListItem>
              </List>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              <TimelinePicture
                imgSrc={SheGoesTechIcon}
                alt="sheGoesTech"
                direction="right"
              />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="secondary">
                <FilterVintageRoundedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                SHE GOES TECH Bootcamp
              </Typography>
              <br />
              <Typography variant="body2" component="span">
                SHE GOES TECH
              </Typography>
              <Typography>
                During the Bootcamp, I was introduced to the fundamentals of
                programming, gained proficiency in C#, and gained insights into
                JavaScript, HTML, and CSS. I had the opportunity to create
                various console applications and developed a web application
                using the MVC pattern.
              </Typography>
              <Typography align="center" sx={{ pt: 1, fontWeight: "bold" }}>
                Projects
              </Typography>
              <List sx={{ py: 0 }}>
                <ListItem
                  sx={{ py: 0 }}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="github"
                      href="https://github.com/ALagodzinska/StudentsAttendanceManagementApp"
                    >
                      <GitHubIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary="Attendance Management Application" />
                </ListItem>
              </List>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              <TimelinePicture imgSrc={RtuLogo} alt="rtu" />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="secondary">
                <FilterVintageRoundedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Bachelor's in Business Administration and Management
              </Typography>
              <br />
              <Typography variant="body2" component="span">
                Riga Technical University
              </Typography>
              <Typography>
                I have a Bachelor's degree in Business Administration. My thesis
                was about finding better ways for small businesses to plan their
                marketing. This education gave me a strong base in business
                management and practical knowledge about finance and marketing.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Box>
  );
};

export default TimelineJourney;
