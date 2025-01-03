import React, { Suspense, useState } from "react";
import { NavLink } from "react-router-dom";
import PageLoader from "../components/page-loader";
import Subnav from "./subnav";
import Footer from "./footer";
import { AppBar, Box, Container, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <NavLink to="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <HomeIcon sx={{ mr: 1 }} />
          <Typography variant="h6" noWrap component="div">
            Microfrontend Site
          </Typography>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

interface LayoutProps {
  children: React.ReactNode
};

const Layout = ({ children }: LayoutProps) => {
  return (
    
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Subnav />
        <Container sx={{ flex: 1, mt: '5px', py: 2 }}>
          {children}
        </Container>
        <Footer />
      </Box>
  );
};

export default Layout;