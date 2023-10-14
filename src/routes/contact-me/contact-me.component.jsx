import { Box, Grid, Typography } from "@mui/material";

const ContactMe = () => {
  return (
    <Box sx={{ pt: "130px", pb: "120px" }}>
      <Typography variant="h2" align="center" sx={{ py: 5 }}>
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
        <Box sx={{ maxWidth: "300px" }}>
          <Grid container>
            <Grid item xs={10}>
              a.lagodzinska@outlook.com
            </Grid>
            <Grid item xs={2}>
              copy
            </Grid>
            <Grid item xs={10}>
              Anastasija Lagodzinska
            </Grid>
            <Grid item xs={2}>
              linkedin
            </Grid>
            <Grid item xs={10}>
              ALagodzinska
            </Grid>
            <Grid item xs={2}>
              github
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactMe;
