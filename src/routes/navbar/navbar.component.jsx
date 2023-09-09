import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import FilterVintageTwoToneIcon from "@mui/icons-material/FilterVintageTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import { ImportContacts } from "@mui/icons-material";
import React, { Fragment } from "react";

const drawerWidth = 240;
const navItems = [
  { link: "#about-me", title: "ABOUT ME" },
  { link: "#timeline", title: "PROFESSIONAL JOURNEY" },
  { link: "#projects", title: "PROJECTS" },
  { link: "#cv", title: "RESUME" },
  { link: "#contact-form", title: "CONTACT ME" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(() => !drawerOpen);
  };

  const drawerInside = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ py: 1.5 }}>
        <FilterVintageTwoToneIcon />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.link} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} href={item.link}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Fragment>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Link href="#home" color={"primary.contrastText"}>
            <FilterVintageTwoToneIcon
              sx={{
                display: { xs: "none", md: "block" },
                cursor: "pointer",
              }}
            />
          </Link>

          <Stack
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
            }}
            justifyContent="center"
            direction="row"
          >
            {navItems.map((item) => (
              <Button key={item.link} href={item.link} sx={{ color: "#fff" }}>
                {item.title}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawerInside}
      </Drawer>
    </Fragment>
  );
};

export default Navbar;
