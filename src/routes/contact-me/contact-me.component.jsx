import { Box, Grid, IconButton, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactMe = () => {
  return (
    <Box
      sx={{ pt: { xs: "40px", md: "130px" }, pb: { xs: "40px", md: "120px" } }}
    >
      <Typography
        align="center"
        sx={{ py: 5, typography: { xs: "h4", md: "h2" } }}
      >
        CONTACT ME
      </Typography>
      <Box
        direction="row"
        justifyContent={"center"}
        sx={{ pb: 2, maxWidth: "750px", mx: "auto" }}
      >
        <Typography variant="h4" align="center">
          Ready to Collaborate?
        </Typography>
        <Typography variant="body1" align="center">
          Get in touch today and let's start building something amazing
          together!
        </Typography>
        <Box
          sx={{
            pt: 2,
            width: "320px",
            margin: "0 auto",
          }}
        >
          <Grid container>
            <Grid item xs={10} pt={1}>
              a.lagodzinska@outlook.com
            </Grid>
            <Grid item xs={2}>
              <IconButton
                edge="end"
                aria-label="email"
                href="mailto:alagodzinska@outlook.com"
              >
                <EmailIcon color={"secondary"} />
              </IconButton>
            </Grid>
            <Grid item xs={10} pt={1}>
              Anastasija Lagodzinska
            </Grid>
            <Grid item xs={2}>
              <IconButton
                edge="end"
                aria-label="linkedin"
                href="https://www.linkedin.com/in/anastasija-lagodzinska-251491136/"
              >
                <LinkedInIcon color={"secondary"} />
              </IconButton>
            </Grid>
            <Grid item xs={10} pt={1}>
              ALagodzinska
            </Grid>
            <Grid item xs={2}>
              <IconButton
                edge="end"
                aria-label="github"
                href="https://github.com/ALagodzinska"
              >
                <GitHubIcon color={"secondary"} />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactMe;
