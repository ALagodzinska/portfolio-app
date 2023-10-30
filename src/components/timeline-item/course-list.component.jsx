import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const CourseList = ({ courseList }) => {
  return (
    <Box>
      <Typography align="center" sx={{ fontWeight: "bold", pt: 1.5 }}>
        Courses
      </Typography>
      <List sx={{ py: 0 }}>
        {courseList.map((course, index) => (
          <ListItem sx={{ py: 0 }} key={index}>
            <ListItemText primary={course} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CourseList;
