import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NewspaperIcon from "@mui/icons-material/Newspaper";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <NewspaperIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component={Link}
          to="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          CityAPI
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button
            component={Link}
            to="/"
            sx={{ my: 2, color: "white", display: "block" }}
          >
            News & Weather
          </Button>
          <Button
            component={Link}
            to="/history"
            sx={{ my: 2, color: "white", display: "block" }}
          >
            Search History
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
