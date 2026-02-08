import { IconButton, ListItem, ListItemText } from "@mui/material";
import { Fragment } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const ProjectListItem = ({ project }) => {
  return (
    <ListItem
      sx={{ py: 0 }}
      secondaryAction={
        <Fragment>
          {project.websiteLink && (
            <IconButton
              edge="end"
              aria-label="website"
              href={project.websiteLink}
              sx={{ mr: 0.5 }}
            >
              <LanguageIcon />
            </IconButton>
          )}
          {project.githubLink && (
            <IconButton
              edge="end"
              aria-label="github"
              href={project.githubLink}
            >
              <GitHubIcon />
            </IconButton>
          )}
        </Fragment>
      }
    >
      <ListItemText primary={project.title} />
    </ListItem>
  );
};

export default ProjectListItem;
