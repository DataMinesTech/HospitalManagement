import React, { useState } from "react";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/userActions";
import Logo from "../../../images/Datamines-logo.svg";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = ({ isOpen, setIsOpen, user }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = () => {
    dispatch(logout());
    history.push("/");
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      elevation={0}
      color="inherit"
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Container maxWidth="2xl">
        <Toolbar disableGutters>
          <div>
            <img src={Logo} alt="logo" width={140} />
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <div class="col-md-3 text-end">
                  {user ? (
                    <>
                      <button
                        type="button"
                        onClick={onLogout}
                        class="btn btn-outline-primary me-2"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

export const PageHeader = ({ title }) => {
  return (
    <div className="sub-header">
      <AppBar
        elevation={0}
        color="inherit"
        position="sticky"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Container maxWidth="2xl">
          <Toolbar disableGutters>
            <div className="sub-header-title">{title}</div>

            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}
            ></Box>

            <Box sx={{ flexGrow: 0 }}>
              {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
