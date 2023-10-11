import { Box, Container, Typography } from "@mui/material";
import Navbar from "./routes/navbar/navbar.component";
import AboutMe from "./routes/about-me/about-me.component";
import TimelineJourney from "./routes/timeline/timeline";
import Projects from "./routes/projects/projects.component";

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
          <Typography variant="h2">Resume</Typography>
          <Typography variant="body1">
            Aconsectetur dui id risus congue pulvinar. Nam ultricies euismod
            interdum. Maecenas accumsan elit et nibh dignissim, sit amet
            accumsan tellus maximus. Fusce vitae vulputate orci, sed efficitur
            odio. Aenean odio ante, tristique ut aliquam quis, bibendum a velit.
            Phasellus vitae mollis quam. Donec rutrum leo sed lectus ornare
            pretium. Duis ultricies ut sem sed finibus. Nullam nec faucibus
            purus. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Etiam sed viverra quam. Aliquam
            scelerisque accumsan pellentesque. Aliquam porttitor nulla felis,
            quis ultrices ante egestas ac. Nulla sed laoreet ante. Duis viverra
            mattis ornare. Ut placerat porttitor enim, sit amet lobortis eros
            laoreet sed.
          </Typography>
        </Box>
        <Box id="contact-form">
          <Typography variant="h2">Contact Me</Typography>
          <Typography variant="body1">
            Aliquam ornare, odio id varius facilisis, tortor lectus bibendum
            lorem, vitae pulvinar velit ex sit amet risus. Etiam fringilla
            lectus mi, eget faucibus quam commodo ac. Praesent tincidunt
            hendrerit leo quis tempus. Pellentesque sed commodo dui. Fusce sit
            amet turpis ac justo efficitur tincidunt vel vel arcu. Curabitur id
            libero orci. Maecenas a quam velit. Fusce pulvinar molestie laoreet.
            Nulla auctor aliquam nisl, bibendum pellentesque sapien consectetur
            vitae. Proin consectetur rutrum est ut pharetra. Nulla lectus
            turpis, scelerisque id ex eget, tempus consectetur tortor. Mauris
            consectetur dui id risus congue pulvinar. Nam ultricies euismod
            interdum. Maecenas accumsan elit et nibh dignissim, sit amet
            accumsan tellus maximus. Fusce vitae vulputate orci, sed efficitur
            odio. Aenean odio ante, tristique ut aliquam quis, bibendum a velit.
            Phasellus vitae mollis quam. Donec rutrum leo sed lectus ornare
            pretium. Duis ultricies ut sem sed finibus. Nullam nec faucibus
            purus. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Etiam sed viverra quam. Aliquam
            scelerisque accumsan pellentesque. Aliquam porttitor nulla felis,
            quis ultrices ante egestas ac. Nulla sed laoreet ante. Duis viverra
            mattis ornare. Ut placerat porttitor enim, sit amet lobortis eros
            laoreet sed.
          </Typography>
        </Box>
      </Box>
      <Box>Footer</Box>
    </Container>
  );
}

export default App;
