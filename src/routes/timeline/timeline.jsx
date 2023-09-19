import {
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import RtuLogo from "../../pictures/rtu-logo.png";
import SheGoesTechIcon from "../../pictures/sgt-logo.jpg";
import AccentureBootcampIcon from "../../pictures/accenture-bootcamp-logo.jpg";
import AccentureIcon from "../../pictures/accenture-logo.jpg";
import SelfLearningPicture from "../../pictures/self-learning.png";
import TimelinePicture from "../../components/timeline-picture/timeline-picture.component";
import FilterVintageRoundedIcon from "@mui/icons-material/FilterVintageRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { Fragment } from "react";

const TimelineJourney = () => {
  return (
    <Box sx={{ pt: "130px", pb: "120px" }}>
      <Typography variant="h2" align="center" sx={{ py: 5 }}>
        PROFESSIONAL JOURNEY
      </Typography>
      <Box>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              <TimelinePicture imgSrc={SelfLearningPicture} />
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
                Self-learning
              </Typography>
              <Typography>
                I am actively enhancing my programming skills through online
                courses and hands-on project creation.
              </Typography>
              <Typography align="center" sx={{ fontWeight: "bold" }}>
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
              <Typography align="center" sx={{ pt: 1, fontWeight: "bold" }}>
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
                  <ListItemText primary="Mapty Workouts Tracking App" />
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
              <TimelinePicture imgSrc={AccentureIcon} />
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
              <TimelinePicture imgSrc={AccentureBootcampIcon} />
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
              <Typography>
                With this Bootcamp I delved into advanced C# programming and
                gained proficiency in utilizing Entity Framework to interact
                with databases, grasped the fundamentals of APIs and expanded my
                knowledge of web application development. I collaborated on a
                group project. Together, we designed and developed a Real-Time
                Chat Application using C#, MVC, and SignalR. Subsequently, we
                successfully deployed the project to the Azure Cloud platform.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              <TimelinePicture imgSrc={SheGoesTechIcon} />
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
              <Typography>Because this is the life you love!</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              <TimelinePicture imgSrc={RtuLogo} />
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
              <Typography>Because you need rest</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Box>
  );
};

export default TimelineJourney;
