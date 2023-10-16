import { Box, Container, Typography } from "@mui/material";
import Navbar from "./routes/navbar/navbar.component";
import AboutMe from "./routes/about-me/about-me.component";
import TimelineJourney from "./routes/timeline/timeline.component";
import Projects from "./routes/projects/projects.component";
import Resume from "./routes/resume/resume.component";
import ContactMe from "./routes/contact-me/contact-me.component";

function App() {
  return (
    <Container maxWidth="xl" id="home">
      <Box
        sx={{
          py: 2,
        }}
      >
        <Navbar />
      </Box>
      <Box>
        <Box id="about-me">
          <AboutMe />
        </Box>
        <Box id="timeline">
          <TimelineJourney />
        </Box>
        <Box id="projects">
          <Projects />
        </Box>
        <Box id="cv">
          <Resume />
        </Box>
        <Box id="contact-form">
          <ContactMe />
        </Box>
      </Box>
      <Box sx={{ borderTop: "solid 1px gray", py: 2, pl: 1 }}>
        ⓒ 2023, Anastasija Lagodzinska
      </Box>
    </Container>
  );
}

export default App;
