import { Box, List, Typography } from "@mui/material";
import ProjectListItem from "./project-list-item.component";

const ProjectList = ({ projects }) => {
  return (
    <Box>
      <Typography align="center" sx={{ pt: 1.5, fontWeight: "bold" }}>
        Projects
      </Typography>
      <List sx={{ py: 0 }}>
        {projects.map((project, index) => (
          <ProjectListItem project={project} key={index} />
        ))}
      </List>
    </Box>
  );
};

export default ProjectList;
