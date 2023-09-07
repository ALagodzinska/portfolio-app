import { Box, Container, Link, Stack, Typography } from "@mui/material";

// https://mui.com/material-ui/react-app-bar/#responsive-app-bar-with-drawer

function App() {
  return (
    <Container maxWidth="xl" id="home">
      <Box
        sx={{
          py: 2,
        }}
      >
        <Stack direction={"row"} spacing={3}>
          <Link href="#home">Home Page</Link>
          <Link href="#about-me">About Me</Link>
          <Link href="#timeline">Timeline</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#email">Email</Link>
        </Stack>
      </Box>
      <Box>
        <Box id="about-me">
          <Typography variant="h2">About Me</Typography>
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
        <Box id="timeline">
          <Typography variant="h2">Timeline</Typography>
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
        <Box id="projects">
          <Typography variant="h2">Projects</Typography>
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
        <Box id="email">
          <Typography variant="h2">Email</Typography>
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
