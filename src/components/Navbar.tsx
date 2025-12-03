import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemText,
  Button,
  Box,
  useMediaQuery,
  useScrollTrigger,
  Slide,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 20 });

  const toggleDrawer = useCallback((open: boolean) => {
    setDrawerOpen(open);
  }, []);

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={trigger ? 4 : 0}
        sx={{ transition: "all 0.3s ease" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "primary.main",
              textDecoration: "none",
            }}
            component={Link}
            to="/about"
          >
            Garvit Soni
          </Typography>

          {isMobile ? (
            <>
              <IconButton sx={{cursor:"pointer"}} onClick={() => toggleDrawer(true)} color="inherit">
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => toggleDrawer(false)}
              >
                <Box sx={{ width: 220 }} role="presentation">
                  <List>
                    {navLinks.map((link) => (
                      <ListItemButton
                        
                        key={link.path}
                        component={Link}
                        to={link.path}
                        onClick={() => toggleDrawer(false)}
                      >
                        <ListItemText
                          primary={link.label}
                          sx={{
                            "&:hover": {
                              color: "primary.main",
                              transition: "color 0.2s ease",
                              cursor:"pointer"
                            },
                          }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  component={Link}
                  to={link.path}
                  sx={{
                    fontWeight: 500,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "primary.main",
                      transform: "translateY(-2px)",
                      cursor:"pointer"
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Slide>
  );
}
