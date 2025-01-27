import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EngineeringIcon from "@mui/icons-material/Engineering";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GavelIcon from "@mui/icons-material/Gavel";
import ThemeIcon from "@mui/icons-material/Brightness4";
import LanguageIcon from "@mui/icons-material/Language";
import LoginIcon from "@mui/icons-material/Login";
import PeopleIcon from "@mui/icons-material/People";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElServices, setAnchorElServices] = useState(null); // Pour le menu déroulant des services
  const [anchorElPartners, setAnchorElPartners] = useState(null); // Pour le menu déroulant des partenaires
  const { mode, toggleTheme } = useContext(ThemeContext);
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (setAnchor) => (event) => {
    setAnchor(event.currentTarget);
  };

  const handleMenuClose = (setAnchor) => () => {
    setAnchor(null);
  };

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        <ListItem button onClick={() => navigate("/")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Accueil" />
        </ListItem>
        <ListItem button onClick={() => navigate("/about")}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="À propos" />
        </ListItem>
        <ListItem button onClick={handleMenuOpen(setAnchorElServices)}>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button onClick={handleMenuOpen(setAnchorElPartners)}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Partenaires" />
        </ListItem>
        <ListItem button onClick={toggleTheme}>
          <ListItemIcon>
            <ThemeIcon />
          </ListItemIcon>
          <ListItemText primary={mode === "light" ? "" : ""} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LanguageIcon />
          </ListItemIcon>
          <select
            value={i18n.language}
            onChange={handleLanguageChange}
            style={{ marginLeft: 8, background: "none", border: "none", color: "inherit" }}
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </ListItem>
        <ListItem button onClick={() => navigate("/login")}>
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <ListItemText primary="Se connecter" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Hidden mdUp>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Typography variant="h6" sx={{ flexGrow: 1, cursor: "pointer" }} onClick={() => navigate("/")}>
          GestAgro
        </Typography>

        <Hidden smDown>
          <Button color="inherit" onClick={() => navigate("/")} startIcon={<HomeIcon />}>
            Accueil
          </Button>
          <Button color="inherit" onClick={() => navigate("/about")} startIcon={<InfoIcon />}>
            À propos
          </Button>
          <Button
            color="inherit"
            onClick={handleMenuOpen(setAnchorElServices)}
            startIcon={<BuildIcon />}
          >
            Services
          </Button>
          <Button
            color="inherit"
            onClick={handleMenuOpen(setAnchorElPartners)}
            startIcon={<PeopleIcon />}
          >
            Partenaires
          </Button>
          <Button color="inherit" onClick={toggleTheme} startIcon={<ThemeIcon />}>
            {mode === "light" ? "Mode sombre" : "Mode clair"}
          </Button>
          <LanguageIcon />
          <select
            value={i18n.language}
            onChange={handleLanguageChange}
            style={{
              marginLeft: 8,
              background: "none",
              border: "none",
              color: "inherit",
              fontSize: "inherit",
            }}
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
          <Button
            color="secondary"
            variant="contained"
            startIcon={<LoginIcon />}
            onClick={() => navigate("/login")}
            sx={{ ml: 2 }}
          >
            Se connecter
          </Button>
        </Hidden>
      </Toolbar>

      <Menu
        anchorEl={anchorElServices}
        open={Boolean(anchorElServices)}
        onClose={handleMenuClose(setAnchorElServices)}
        keepMounted
      >
        <MenuItem onClick={() => navigate("/agriculteurs")}>
          <AgricultureIcon style={{ color: "green", marginRight: "0.5rem" }} />
          Agriculteurs
        </MenuItem>
        <MenuItem onClick={() => navigate("/clients")}>
          <ShoppingCartIcon style={{ color: "blue", marginRight: "0.5rem" }} />
          Clients
        </MenuItem>
        <MenuItem onClick={() => navigate("/fournisseurs")}>
          <EngineeringIcon style={{ color: "orange", marginRight: "0.5rem" }} />
          Fournisseurs
        </MenuItem>
      </Menu>

      <Menu
        anchorEl={anchorElPartners}
        open={Boolean(anchorElPartners)}
        onClose={handleMenuClose(setAnchorElPartners)}
        keepMounted
      >
        <MenuItem onClick={() => navigate("/partenaires/transporteurs")}>
          <LocalShippingIcon style={{ color: "brown", marginRight: "0.5rem" }} />
          Transporteurs
        </MenuItem>
        <MenuItem onClick={() => navigate("/partenaires/agronomes")}>
          <AgricultureIcon style={{ color: "green", marginRight: "0.5rem" }} />
          Agronomes
        </MenuItem>
        <MenuItem onClick={() => navigate("/partenaires/ong")}>
          <VolunteerActivismIcon style={{ color: "red", marginRight: "0.5rem" }} />
          ONG
        </MenuItem>
        <MenuItem onClick={() => navigate("/partenaires/institutions-financieres")}>
          <AccountBalanceIcon style={{ color: "blue", marginRight: "0.5rem" }} />
          Institutions financières
        </MenuItem>
        <MenuItem onClick={() => navigate("/partenaires/decideurs")}>
          <GavelIcon style={{ color: "goldenrod", marginRight: "0.5rem" }} />
          Décideurs
        </MenuItem>
      </Menu>

      <Hidden smUp>
        <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle}>
          {drawer}
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

export default Navbar;
 