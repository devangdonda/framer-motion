import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ModeSwitch from "./ModeSwitch";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { id: "home", comp: "Home" },
  { id: "profession", comp: "Profession" },
  { id: "contact", comp: "Contact" },
];

function Navbar(props) {
  const theme = useTheme();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const isDarkMode = theme.palette.mode === "dark";

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h5"
        sx={{
          fontStyle: "italic",
          fontWeight: "bold",
          my: 2,
          color: theme.palette.primary.contrastText,
        }}
        component={Link}
        to="home"
      >
        Muszelus
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding component={Link} to={item.id}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={item.comp}
                sx={{ color: isDarkMode ? "rgba(0, 0, 0, 0.87)" : "#fff" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Box sx={{ display: "flex"}}>
        <CssBaseline />
        <AppBar component="nav" color="primary" enableColorOnDark>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "italic",
                fontWeight: "bold",
                textDecoration: 'none',
                flexGrow: 1,
                color: theme.palette.primary.contrastText,
                display: { xs: "none", sm: "block" },
              }}
              component={Link}
              to="home"
            >
              Muszelus
            </Typography>
            <ModeSwitch />
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {navItems.map((item) => (
                <motion.div
                  sx={{ padding: "10px" }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: theme.palette.primary.dark,
                    color: theme.palette.primary.contrastText,
                    borderRadius: 20,
                  }}
                  initial={{
                    borderRadius: 20,
                  }}
                  transition={{
                    type: "spring",
                    damping: 15,
                    duration: 0.05,
                    ease: "easeInOut",
                  }}
                >
                  <Button
                    key={item.id}
                    sx={{
                      color: theme.palette.primary.contrastText,
                      borderRadius: "10px",
                    }}
                    component={Link}
                    to={item.id}
                  >
                    {item.comp}
                  </Button>
                </motion.div>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: isDarkMode ? "#90caf9" : "#1976d2",
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </motion.div>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
