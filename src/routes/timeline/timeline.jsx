import {
  Box,
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
import SelfLearningPicture from "../../pictures/self-learning.png";
import TimelinePicture from "../../components/timeline-picture/timeline-picture.component";
import FilterVintageRoundedIcon from "@mui/icons-material/FilterVintageRounded";

const TimelineJourney = () => {
  return (
    <Box sx={{ pt: "130px", pb: "120px" }}>
      <Typography variant="h2" align="center" sx={{ py: 3 }}>
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
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              <TimelineDot color="secondary">
                <FilterVintageRoundedIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Self-learning
              </Typography>
              <Typography>
                I am actively enhancing my programming skills through online
                courses and hands-on project creation.
              </Typography>
              <Typography align="center">Courses</Typography>
              <Typography fontSize={12}>
                SQL Course - University of Waterloo
              </Typography>
              <Typography fontSize={12}>
                The Complete Javascript course - Udemy
              </Typography>
              <Typography fontSize={12}>
                Complete React Developer - Udemy
              </Typography>
              <Typography align="center">Projects</Typography>
              <List sx={{ py: 0 }}>
                <ListItem sx={{ py: 0 }}>
                  <Link href="https://stacy-clothing.netlify.app/">
                    <ListItemText primary="Crown Clothing Website" />
                  </Link>
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <Link href="https://forkify-recipes-stacy.netlify.app/">
                    <ListItemText primary="Forkify Recipe App" />
                  </Link>
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <Link href="https://alagodzinska.github.io/MaptyApp/">
                    <ListItemText primary="Mapty Workouts Tracking App" />
                  </Link>
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
              10:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              <TimelineDot color="secondary">
                <FilterVintageRoundedIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Code
              </Typography>
              <Typography>Because it&apos;s awesome!</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              <TimelineDot color="secondary">
                <FilterVintageRoundedIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Sleep
              </Typography>
              <Typography>Because you need rest</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              <TimelineDot color="secondary">
                <FilterVintageRoundedIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Repeat
              </Typography>
              <Typography>Because this is the life you love!</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Box>
  );
};

export default TimelineJourney;
