import Timeline from "@mui/lab/Timeline";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import TimelineElement from "../../components/timeline-item/timeline-item.component";
import * as itemConstants from "../../constants/timeline-item.constants.js";

const TimelineJourney = () => {
  return (
    <Box sx={{ pt: { xs: "40px", md: "130px" } }}>
      <Typography
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
          <TimelineElement item={itemConstants.selfLearningItem} />
          <TimelineElement
            item={itemConstants.accentureItem}
            direction={"right"}
          />
          <TimelineElement item={itemConstants.bootcampItem} />
          <TimelineElement
            item={itemConstants.sheGoesTechItem}
            direction={"right"}
          />
          <TimelineElement item={itemConstants.RTUItem} />
        </Timeline>
      </Box>
    </Box>
  );
};

export default TimelineJourney;
