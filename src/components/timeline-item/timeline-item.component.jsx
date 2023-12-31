import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import TimelinePicture from "../timeline-picture/timeline-picture.component";
import CourseList from "./course-list.component";
import ProjectList from "./project-list.component";
import FilterVintageRoundedIcon from "@mui/icons-material/FilterVintageRounded";
import { Fragment } from "react";

const TimelineElement = ({ item, direction }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <TimelineItem
      sx={isMobile ? { flexDirection: "column !important", pt: 6 } : {}}
    >
      <TimelineOppositeContent
        variant="body2"
        color="text.secondary"
        sx={isMobile ? { margin: "auto" } : {}}
      >
        <TimelinePicture
          imgSrc={item.image}
          alt="selfLearning"
          direction={direction}
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
          {item.title}
        </Typography>
        {item.place && (
          <Fragment>
            <br />
            <Typography variant="body2" component="span">
              {item.place}
            </Typography>
          </Fragment>
        )}
        <Typography>{item.description}</Typography>
        <Divider sx={{ py: 1 }} />
        {item.courses && <CourseList courseList={item.courses} />}
        {item.projects && <ProjectList projects={item.projects} />}
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineElement;
