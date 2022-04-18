import React, { useContext } from "react";
import Container from "@mui/material/Container";
import Hidden from "@mui/material/Hidden";
import useMediaQuery from "@mui/material/useMediaQuery";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { AppContext } from "../utils";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Paper } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/material/styles";
 import { useDispatch } from "react-redux";
import { logoutuser } from "./../redux/actions/authuser.js";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
//----------dropdown code -----------
const StyledMenu = styled((props) => (

  <Menu
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    minWidth: 180,
    color: "white",
    backgroundImage: "linear-gradient(to bottom right, #FF6503, #FF8105)",

    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
  },
}));
// -----End o code of option dropdown--------

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto",
    alignItems: "center"
  },
  paper: {
    backgroundImage: "linear-gradient(to bottom right, #FF6503, #FF8105)",
    justifyContent: "center"
  },
  hover: {
    "&:hover": {
      color: "#FFB800"
    }
  },

  listText: {
    textAlign: "center",
    textDecoration: "none",
    cursor: "pointer",
    color: "#ffffff",
    fontSize: "16px",
    fontFamily: "Helvetice-Bold"
  }
});

export default function Header() {

  const cookies = new Cookies();

  const navigate = useNavigate();
  
const dispatch = useDispatch();

const logoutUser = () => {
  // dispatch(logoutuser());
     cookies.remove("jwtToken", { path: "/", domain: "localhost" });
    

     setTimeout(() => {
       navigate("/", { replace: true });
     });
  // this dispatch is for clear state 
      dispatch(logoutuser());
};

  const { account, connect, disconnect } = useContext(AppContext);
  // ------code for options dropdowns ----------
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // Second option
  const [anchorE2, setAnchorE2] = React.useState(null);
  const open2 = Boolean(anchorE2);
  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };
  // third option
  const [anchorE3, setAnchorE3] = React.useState(null);
  const open3 = Boolean(anchorE3);
  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorE3(null);
  };
  // fourth option
  const [anchorE4, setAnchorE4] = React.useState(null);
  const open4 = Boolean(anchorE4);
  const handleClick4 = (event) => {
    setAnchorE4(event.currentTarget);
  };
  const handleClose4 = () => {
    setAnchorE4(null);
  };
  // ---------End of dropdown code-------
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const matches = useMediaQuery("(max-width:960px)");
  const matches1 = useMediaQuery("(max-width:1279px)");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box mt={-20} display="flex" justifyContent="center">
        <HashLink smooth to="/home#home" style={{ textDecoration: "none" }}>
          <img width="100px" src="/images/logo.png" alt="" />
        </HashLink>
      </Box>
      <List>
        {/* {["HOME", "QUICKS LINKS", "UTILITIES", "DOCUMENTS", "COMMUNITY"].map(
          (text, index) => ( */}
        <ListItem
          button
          style={{
            justifyContent: "center",
          }}
          // key={text}
        >
          <HashLink smooth to="/home#home" style={{ textDecoration: "none" }}>
            <ListItemText className={classes.listText} primary={"HOME"} />
          </HashLink>
        </ListItem>

        <ListItem
          button
          style={{
            justifyContent: "center",
          }}
        >
          <HashLink smooth to="/home#about" style={{ textDecoration: "none" }}>
            <ListItemText
              className={classes.listText}
              primary={"QUICK LINKS"}
            />
          </HashLink>
        </ListItem>

        <ListItem
          button
          style={{
            justifyContent: "center",
          }}
        >
          <HashLink
            smooth
            to="/home#rogdollcatnft"
            style={{ textDecoration: "none" }}
          >
            <ListItemText className={classes.listText} primary={"UTILITIES"} />
          </HashLink>
        </ListItem>

        <ListItem
          button
          style={{
            justifyContent: "center",
          }}
        >
          <ListItemText className={classes.listText} primary={"DOCUMENTS"} />
        </ListItem>

        <ListItem
          button
          style={{
            justifyContent: "center",
          }}
        >
          <ListItemText className={classes.listText} primary={"COMMUNITY"} />
        </ListItem>
        {/* )
        )} */}
      </List>
      <Box mb={1} display="flex" justifyContent="center">
        {account ? (
          <Box
            width="90%"
            height="42px"
            bgcolor="#098CDC"
            borderRadius="8px"
            sx={{ cursor: "pointer" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#ffffff"
            fontWeight="500"
            fontSize="16px"
            onClick={() => disconnect()}
            style={{ zIndex: 1 }}
          >
            {account.slice(0, 4) + "..." + account.slice(-4)}
          </Box>
        ) : (
          <Box
            sx={{
              width: "fit-content",
              border: "3px solid #FF8504",
              borderRadius: "30px",
              margin: "auto",
              boxShadow: 4,
            }}
          >
            <Box
              zIndex={1}
              sx={{
                cursor: "pointer",
              }}
              bgcolor="transparent"
              width="180px"
              height="42px"
              fontFamily="Helvetice-Bold"
              border="1px solid white"
              borderRadius="30px"
              fontSize="14px"
              color="#ffffff"
              display="flex"
              justifyContent="center"
              alignItems="center"
              onClick={() => connect()}
            >
             connect wallet
              <ArrowForwardIosIcon fontSize="small" />
            </Box>

            <Box
              zIndex={1}
              sx={{
                cursor: "pointer",
              }}
              bgcolor="transparent"
              width="180px"
              height="42px"
              fontFamily="Helvetice-Bold"
              border="1px solid white"
              borderRadius="30px"
              fontSize="14px"
              color="#ffffff"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              Logout
              <ArrowForwardIosIcon fontSize="small" />
            </Box>
          </Box>
        )}
      </Box>
    </div>
  );
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="fixed"
        style={{
          backgroundImage: "linear-gradient(to right, #FF6503, #FF8606)",
          zIndex: "100",
        }}
        height="92px"
        width="100%"
      >
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pl={matches ? 0 : 5}
            pr={matches ? 0 : 5}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <HashLink
                smooth
                to="/home#home"
                style={{ textDecoration: "none" }}
              >
                <Box>
                  <img src="/images/logo.png" width="50%" height="50%" />
                </Box>
              </HashLink>
            </Box>
            <Box
              display="flex"
              justifyContent={matches1 ? "end" : "space-between"}
              alignItems="center"
            >
              <Box
                display="flex"
                justifyContent="space-around"
                // flexBasis={matches1 ? "0px" : "70%"}
                alignItems="center"
              >
                <Hidden mdDown>
                  <HashLink to="/home#home" style={{ textDecoration: "none" }}>
                    <Box
                      pr={2}
                      fontSize="15px"
                      fontFamily="Helvetice-Bold"
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "#ffffff",
                        textTransform: "capitalize",
                      }}
                    >
                      home
                    </Box>
                  </HashLink>

                  {/* <HashLink
                    smooth
                    to="/home#about"
                    style={{ textDecoration: "none" }}
                  > */}
                  <Box pr={2} fontFamily="Helvetice-Bold" zIndex="1">
                    <Button
                      id="demo-customized-button"
                      aria-controls={open ? "demo-customized-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      sx={{
                        color: "white",
                        textTransform: "capitalize",
                        fontSize: "15px",
                      }}
                      onClick={handleClick}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      QuickLinks
                    </Button>
                    <StyledMenu
                      id="demo-customized-menu"
                      MenuListProps={{
                        "aria-labelledby": "demo-customized-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                    >
                      <HashLink
                        smooth
                        to="/home#NFT Marketplace"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <MenuItem onClick={handleClose} disableRipple>
                          NFT Marketplace
                        </MenuItem>
                      </HashLink>

                      <HashLink
                        smooth
                        to="/home#Tokenomics"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <MenuItem onClick={handleClose} disableRipple>
                          Tokenomics
                        </MenuItem>
                      </HashLink>

                      <HashLink
                        smooth
                        to="/home#Public Presale"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <MenuItem onClick={handleClose} disableRipple>
                          Public Presale
                        </MenuItem>
                      </HashLink>

                      <HashLink
                        smooth
                        to="/home#Dev Team"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <MenuItem onClick={handleClose} disableRipple>
                          Dev Team
                        </MenuItem>
                      </HashLink>

                      <HashLink
                        smooth
                        to="/home#Blog"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <MenuItem onClick={handleClose} disableRipple>
                          Blog
                        </MenuItem>
                      </HashLink>

                      <HashLink
                        smooth
                        to="/home#about"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <MenuItem onClick={handleClose} disableRipple>
                          About
                        </MenuItem>
                      </HashLink>

                      <HashLink
                        smooth
                        to="/home#private presale"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <MenuItem onClick={handleClose} disableRipple>
                          Private Presale
                        </MenuItem>
                      </HashLink>

                      <HashLink
                        smooth
                        to="/home#listings"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <MenuItem onClick={handleClose} disableRipple>
                          Listing
                        </MenuItem>
                      </HashLink>

                      <HashLink
                        smooth
                        to="/home#road map"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <MenuItem onClick={handleClose} disableRipple>
                          RoadMap
                        </MenuItem>
                      </HashLink>
                    </StyledMenu>
                  </Box>
                  {/* </HashLink> */}

                  {/* <HashLink
                    smooth
                    to="/home#rogdollcatnft"
                    style={{ textDecoration: "none" }}
                  > */}
                  <Box pr={2} fontFamily="Helvetice-Bold" zIndex="1">
                    <Button
                      id="demo-customized-button"
                      aria-controls={open2 ? "demo-customized-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open2 ? "true" : undefined}
                      sx={{
                        color: "white",
                        textTransform: "capitalize",
                        fontSize: "15px",
                      }}
                      onClick={handleClick2}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      utilities
                    </Button>
                    <StyledMenu
                      id="demo-customized-menu"
                      MenuListProps={{
                        "aria-labelledby": "demo-customized-button",
                      }}
                      anchorEl={anchorE2}
                      open={open2}
                      onClose={handleClose2}
                    >
                      <MenuItem onClick={handleClose2} disableRipple>
                        RDC Token
                      </MenuItem>
                      <MenuItem onClick={handleClose2} disableRipple>
                        NFT Marketplace
                      </MenuItem>

                      <MenuItem onClick={handleClose2} disableRipple>
                        Live Cat Marketplace
                      </MenuItem>

                      <MenuItem onClick={handleClose2} disableRipple>
                        Cat Lovers Community
                      </MenuItem>

                      <MenuItem onClick={handleClose2} disableRipple>
                        Stake & Earn
                      </MenuItem>

                      <MenuItem onClick={handleClose2} disableRipple>
                        Blog Post
                      </MenuItem>
                    </StyledMenu>
                  </Box>
                  {/* </HashLink> */}

                  <Box pr={2} fontFamily="Helvetice-Bold" zIndex="1">
                    <Button
                      id="demo-customized-button"
                      aria-controls={open3 ? "demo-customized-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open3 ? "true" : undefined}
                      sx={{
                        color: "white",
                        textTransform: "capitalize",
                        fontSize: "15px",
                      }}
                      onClick={handleClick3}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      documents
                    </Button>
                    <StyledMenu
                      id="demo-customized-menu"
                      MenuListProps={{
                        "aria-labelledby": "demo-customized-button",
                      }}
                      anchorEl={anchorE3}
                      open={open3}
                      onClose={handleClose3}
                    >
                      <HashLink
                        smooth
                        to="/home#documents"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <MenuItem onClick={handleClose3} disableRipple>
                          Audit
                        </MenuItem>
                      </HashLink>

                      <HashLink
                        smooth
                        to="/home#road map"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <MenuItem onClick={handleClose3} disableRipple>
                          RoadMap
                        </MenuItem>
                      </HashLink>

                      <HashLink
                        smooth
                        to="/home#documents"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <MenuItem onClick={handleClose3} disableRipple>
                          WhitePaper
                        </MenuItem>
                      </HashLink>

                      <HashLink
                        smooth
                        to="/faq"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <MenuItem onClick={handleClose3} disableRipple>
                          FAQ
                        </MenuItem>
                      </HashLink>

                      <HashLink
                        smooth
                        to="/business"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <MenuItem onClick={handleClose3} disableRipple>
                          Business
                        </MenuItem>
                      </HashLink>

                      <HashLink
                        smooth
                        to="/logo"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <MenuItem onClick={handleClose3} disableRipple>
                          Logo
                        </MenuItem>
                      </HashLink>
                    </StyledMenu>
                  </Box>

                  <Box pr={2} fontFamily="Helvetice-Bold" zIndex="1">
                    <Button
                      id="demo-customized-button"
                      aria-controls={open4 ? "demo-customized-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open4 ? "true" : undefined}
                      sx={{
                        color: "white",
                        textTransform: "capitalize",
                        fontSize: "15px",
                      }}
                      onClick={handleClick4}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      community
                    </Button>
                    <StyledMenu
                      id="demo-customized-menu"
                      MenuListProps={{
                        "aria-labelledby": "demo-customized-button",
                      }}
                      anchorEl={anchorE4}
                      open={open4}
                      onClose={handleClose4}
                    >
                      <MenuItem onClick={handleClose4} disableRipple>
                        Twitter
                      </MenuItem>
                      <MenuItem onClick={handleClose4} disableRipple>
                        Telegram
                      </MenuItem>

                      <MenuItem onClick={handleClose4} disableRipple>
                        Facebook
                      </MenuItem>

                      <MenuItem onClick={handleClose4} disableRipple>
                        Instagram
                      </MenuItem>

                      <MenuItem onClick={handleClose4} disableRipple>
                        YouTube
                      </MenuItem>

                      <MenuItem onClick={handleClose4} disableRipple>
                        Bitcointalk
                      </MenuItem>
                    </StyledMenu>
                  </Box>

                  {account ? (
                    <Box
                      width="130px"
                      height="42px"
                      bgcolor="#098CDC"
                      borderRadius="8px"
                      sx={{ cursor: "pointer" }}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      color="#ffffff"
                      fontWeight="500"
                      fontSize="16px"
                      onClick={() => disconnect()}
                      style={{ zIndex: 1 }}
                    >
                      {account.slice(0, 4) + "..." + account.slice(-4)}
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        width: "fit-content",
                        border: "3px solid #FF8504",
                        borderRadius: "30px",
                        margin: "auto",
                        boxShadow: 4,
                      }}
                    >
                      <Box
                        zIndex={1}
                        sx={{
                          cursor: "pointer",
                          textTransform: "uppercase",
                        }}
                        bgcolor="transparent"
                        width="180px"
                        height="42px"
                        fontFamily="Helvetice-Bold"
                        border="1px solid white"
                        borderRadius="30px"
                        fontSize="14px"
                        color="#ffffff"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        onClick={() => connect()}
                      >
                        connect wallet
                        <ArrowForwardIosIcon fontSize="small" />
                      </Box>
                    </Box>
                  )}

                  <Box
                    pl={2}
                    fontSize="15px"
                    fontFamily="Helvetice-Bold"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "#ffffff",
                      textTransform: "capitalize",
                    }}
                    onClick={logoutUser}
                  >
                    Logout
                  </Box>
                </Hidden>
              </Box>

              <Hidden mdUp>
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button
                      onClick={toggleDrawer(anchor, true)}
                      style={{ zIndex: 1 }}
                    >
                      <MenuIcon
                        style={{
                          fontSize: "38px",
                          cursor: "pointer",
                          color: "#FFFFFF",
                        }}
                      ></MenuIcon>
                    </Button>
                    <Paper>
                      <SwipeableDrawer
                        classes={{ paper: classes.paper }}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                      >
                        {list(anchor)}
                      </SwipeableDrawer>
                    </Paper>
                  </React.Fragment>
                ))}
              </Hidden>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
