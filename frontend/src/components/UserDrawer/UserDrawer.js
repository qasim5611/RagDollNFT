import * as React from "react";
import "./UserDrawer.css";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../images/logo.png";
import { Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import useMediaQuery from "@mui/material/useMediaQuery";

// All Icones used in this component
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { BsBoxArrowInLeft } from "react-icons/bs";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import { BsBoxArrowRight } from "react-icons/bs";

import { FiActivity } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

import { alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Marquee from "react-fast-marquee";

import SelectUnstyled, {
  selectUnstyledClasses
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";

// Select Field start //
const StyledButton = styled("button")(
  ({ theme }) => `
      font-size: 10px;
      width:100%;
      background-color: #FFFFFF;
      min-height: calc(1.5em + 22px);
      border: 0px solid #371F00;
      border-radius: 5px;
      text-align: left;
      &:hover {
        cursor:pointer;
        background: #;
        
      }
      &.${selectUnstyledClasses.expanded} {
        &::after {
          content: '▴';
        }
      }
      &::after {
        content: '▾';
        float: right;
      }`
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
      font-size: 13px;
      box-sizing: border-box;
      padding: 5px;
      margin: 10px 0;
      width:100%;
      background: #111122;
      border: 1px solid #41414E;
      border-radius: 0.75em;
      color: #ffffff;
      overflow: auto;
      outline: 0px;
      `
);
export const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
      list-style: none;
      padding: 8px;
      border-radius: 0.45em;
      cursor: default;
      &:last-of-type {
        border-bottom: none;
      }
      &:hover:not(.${optionUnstyledClasses.disabled}) {
        background-color: #000000;
        color: #ffffff;
      }`
);
const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;
export const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components
  };
  return <SelectUnstyled {...props} ref={ref} components={components} />;
});
//Select fields End //

// select Box starts here
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right"
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    borderTop: "2px solid #0894FF",
    marginTop: theme.spacing(1),
    minWidth: 180,
    width: 250,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0"
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
        backgroundColor: "transparent"
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        )
      }
    }
  }
}));
//select Box Ends here

// ******************linking style ***********************
let activeStyle = {
  textDecoration: "none",
  color: "#037DFF",
  background: "#eef0f7 !important",
  borderRadius: "50px"
};

let activeClassName = {
  textDecoration: "none",
  color: "#8094AE"
};
// ******************linking style ***********************

// ******** Array of tokenes which are use in header of user dashboard *********
let arrayToken = [
  { tokenName: "USD / AUD = ", tokenValue: "1.341" },
  { tokenName: "USD / EUR = ", tokenValue: "0.919" },
  { tokenName: "USD / GBP = ", tokenValue: "0.766" },
  { tokenName: "USD / CAD = ", tokenValue: "1.258" },
  { tokenName: "USD / TRY = ", tokenValue: "14.84" },
  { tokenName: "USD / RUB = ", tokenValue: "76.13" },
  { tokenName: "USD / BRL = ", tokenValue: "1.3414.793" },
  { tokenName: "USD / BTC = ", tokenValue: "0.00002281" },
  { tokenName: "USD / ETH = ", tokenValue: "0.0003035" },
  { tokenName: "USD / LTC = ", tokenValue: "0.008694" }
];

// ******** Array of tokenes which are use in header of user dashboard *********

const drawerWidth = 300;

function ResponsiveDrawer(props) {
  const hide = useMediaQuery("(max-Width: 900px)");

  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //Select Box starts
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //Select Box ends

  const drawer = (
    <Container>
      <div>
        <Box mt={2}>
          <img src={logo} alt="logo" />
        </Box>
        <Box>
          <Typography
            mt="15%"
            mb="2%"
            color="#8094ae"
            fontSize="12px"
            fontWeight="bold"
          >
            MAIN ACCOUNT BALANCE
          </Typography>
          <Typography
            my="2%"
            color="#037DFF"
            fontSize="1.5rem"
            fontWeight="500"
          >
            500.00 USD
          </Typography>
          <Typography color="#8094ae" fontSize="15px" fontWeight="700">
            0.1419 ETH
          </Typography>

          <Box my="2%" display="flex" justifyContent="space-between">
            <Typography fontSize="13px" color="#8094ae" fontWeight="700">
              Profit (7d)
            </Typography>
            <Typography fontSize="13px" color="#364a63" fontWeight="bold">
              0.00 USD
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            mt: "10%",
            display: { xs: "none", sm: "none", md: "flex" },
            justifyContent: "space-between"
          }}
        >
          <Box>
            <Link
              to="/userDashboard/deposit"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                sx={{
                  backgroundColor: "#037DFF",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  width: "100px",
                  "&:hover": { backgroundColor: "#037DFFa1" }
                }}
              >
                DEPOSIT
              </Button>
            </Link>
          </Box>

          <Box>
            <Link
              to="/userDashboard/withdraw"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                sx={{
                  backgroundColor: "#F4BD0E",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  width: "130px",
                  "&:hover": {
                    backgroundColor: "#F4BD0Ea1"
                  }
                }}
              >
                WITHDRAW
              </Button>
            </Link>
          </Box>
        </Box>
        <Toolbar />
        <Typography color="#8094ae" fontSize="11px" fontWeight="bold">
          MENU
        </Typography>

        <List sx={{ color: "#8094ae" }}>
          <NavLink
            to="/userDashboard"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem
              button
              sx={{
                "&:hover": {
                  borderRadius: "50px",
                  color: "#037DFF",
                  backgroundColor: "#EEF0F7"
                }
              }}
            >
              <DashboardOutlinedIcon />
              <ListItemText sx={{ paddingLeft: "14%" }}>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "700"
                  }}
                >
                  Dashboard
                </span>
              </ListItemText>
            </ListItem>
          </NavLink>

          <NavLink
            to="/userDashboard/transactions"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem
              button
              sx={{
                "&:hover": {
                  borderRadius: "50px",
                  color: "#037DFF",
                  backgroundColor: "#EEF0F7"
                }
              }}
            >
              <CompareArrowsOutlinedIcon />
              <ListItemText sx={{ paddingLeft: "14%" }}>
                <span style={{ fontSize: "15px", fontWeight: "700" }}>
                  Transaction
                </span>
              </ListItemText>
            </ListItem>
          </NavLink>
          <NavLink
            to="/userDashboard/investment"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem
              button
              sx={{
                "&:hover": {
                  borderRadius: "50px",
                  color: "#037DFF",
                  backgroundColor: "#EEF0F7"
                }
              }}
            >
              <CurrencyExchangeIcon />
              <ListItemText sx={{ paddingLeft: "14%" }}>
                <span style={{ fontSize: "15px", fontWeight: "700" }}>
                  Investment
                </span>
              </ListItemText>
            </ListItem>
          </NavLink>

          <NavLink
            to="/userDashboard/investment/plans"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem
              button
              sx={{
                "&:hover": {
                  borderRadius: "50px",
                  color: "#037DFF",
                  backgroundColor: "#EEF0F7"
                }
              }}
            >
              <CurrencyExchangeIcon />
              <ListItemText sx={{ paddingLeft: "14%" }}>
                <span style={{ fontSize: "15px", fontWeight: "700" }}>
                  Our Plans
                </span>
              </ListItemText>
            </ListItem>
          </NavLink>

          <NavLink
            to="/userDashboard/profile"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem
              button
              sx={{
                "&:hover": {
                  borderRadius: "50px",
                  color: "#037DFF",
                  backgroundColor: "#EEF0F7"
                }
              }}
            >
              <ManageAccountsOutlinedIcon />
              <ListItemText sx={{ paddingLeft: "14%" }}>
                <span style={{ fontSize: "15px", fontWeight: "700" }}>
                  My Profile
                </span>
              </ListItemText>
            </ListItem>
          </NavLink>

          <NavLink
            to="/userDashboard/referrals"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem
              button
              sx={{
                "&:hover": {
                  borderRadius: "50px",
                  color: "#037DFF",
                  backgroundColor: "#EEF0F7"
                }
              }}
            >
              <ShareOutlinedIcon />
              <ListItemText sx={{ paddingLeft: "14%" }}>
                <span style={{ fontSize: "15px", fontWeight: "700" }}>
                  Referrals
                </span>
              </ListItemText>
            </ListItem>
          </NavLink>
        </List>
        <span style={{ fontSize: "11px", fontWeight: "700", color: "#8094ae" }}>
          ADDITIONAL
        </span>

        <List sx={{ color: "#8094ae" }}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem
              button
              sx={{
                "&:hover": {
                  borderRadius: "50px",
                  color: "#037DFF",
                  backgroundColor: "#EEF0F7"
                }
              }}
            >
              <span style={{ fontSize: "15px", fontWeight: "700" }}>
                Go To Home
              </span>
            </ListItem>
          </NavLink>
        </List>
        {/* <Toolbar /> */}
        <Box display="flex" justifyContent="space-between">
          <ListItem
            button
            sx={{
              "&:hover": { borderRadius: "50px", color: "#037DFF" },
              color: "#8094ae"
            }}
          >
            <MessageOutlinedIcon sx={{ color: "#037DFF" }} />
            <Typography sx={{ fontSize: "12px" }}>Contact</Typography>
          </ListItem>
          <ListItem
            button
            sx={{
              color: "#8094ae",
              "&:hover": { borderRadius: "50px", color: "#037DFF" }
            }}
          >
            <LanguageOutlinedIcon sx={{ color: "#037DFF" }} />
            <CustomSelect defaultValue="item 1" color="8094ae">
              <StyledOption value="item 1">English</StyledOption>
              <StyledOption value="item 2">RTL Mode</StyledOption>
            </CustomSelect>
          </ListItem>
        </Box>
      </div>
    </Container>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#FFFFFF",
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
          borderBottom: "1px solid",
          borderColor: "divider"
        }}
      >
        <Toolbar
          sx={{
            justifyContent: {
              xs: "space-between"
              //  sm: 'flex-end'
            }
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { lg: "none" },
              color: "black"
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box width="84%">
            <Marquee speed={100} pauseOnHover gradient={false}>
              <Box
                sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
                fontSize="13px"
              >
                {arrayToken.map((item) => {
                  return (
                    <Box display="flex">
                      <Box color="#8094ae" ml={4}>
                        {item.tokenName}
                      </Box>
                      <Box color="#526484" fontWeight="550" ml={1}>
                        {item.tokenValue}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Marquee>
          </Box>

          <Box display="flex" alignItems="center">
            <Box>
              <Avatar sx={{ backgroundColor: "#037DFF" }}>
                <PersonOutlinedIcon />
              </Avatar>
              {/* <Avatar sx={{ backgroundColor: '#1EE2C9' }} src="/broken-image.jpg" alt='broken Image' /> */}
            </Box>
            <Box textAlign="center">
              <Typography color="#1EE2C9" fontSize="13px">
                Verified
              </Typography>

              <div>
                <Button
                  style={{
                    background: "transparent",
                    color: "black",
                    fontSize: "11px",
                    fontWeight: "700"
                  }}
                  id="demo-customized-button"
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="contained"
                  disableElevation
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Only
                </Button>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button"
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <Box backgroundColor="#F5F6FA">
                    <MenuItem onClick={handleClose}>
                      <Avatar sx={{ backgroundColor: "#037DFF" }}>ON</Avatar>
                      <Box ml={2} display="flex" flexDirection="column">
                        <Box fontSize="13px" fontWeight="800">
                          Only
                        </Box>
                        <Box fontSize="12px" fontWeight="500" color="#8094ae">
                          abc@gmail.com
                        </Box>
                      </Box>
                    </MenuItem>
                  </Box>

                  <MenuItem>
                    <Box display="flex" flexDirection="column">
                      <Box display="flex" flexDirection="column" my={3}>
                        <Typography
                          color="#8094ae"
                          fontSize="12px"
                          fontWeight="bold"
                        >
                          MAIN ACCOUNT BALANCE
                        </Typography>
                        <Typography
                          color="#037DFF"
                          fontSize="1.5rem"
                          fontWeight="500"
                        >
                          500.00 USD
                        </Typography>
                        <Typography
                          color="#8094ae"
                          fontSize="15px"
                          fontWeight="700"
                        >
                          0.1419 ETH
                        </Typography>
                      </Box>
                    </Box>
                  </MenuItem>

                  <MenuItem onClick={handleClose} disableRipple>
                    <Box color="#037DFF">
                      <ListItemText>
                        <span style={{ fontSize: "13px", fontWeight: "700" }}>
                          Deposit Funds
                        </span>{" "}
                        <BsBoxArrowInLeft />
                      </ListItemText>
                    </Box>
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <Box color="#037DFF">
                      <ListItemText>
                        <span style={{ fontSize: "13px", fontWeight: "700" }}>
                          WithDraw Funds
                        </span>{" "}
                        <BsBoxArrowRight />
                      </ListItemText>
                    </Box>
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <Box color="#75849D">
                    <MenuItem onClick={handleClose} disableRipple>
                      <ListItem sx={{ "&:hover": { color: "#037DFF" } }}>
                        <ListItemIcon>
                          <PermIdentityOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography fontSize="13px" fontWeight="700">
                            View Profile{" "}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </MenuItem>

                    <MenuItem onClick={handleClose} disableRipple>
                      <ListItem sx={{ "&:hover": { color: "#037DFF" } }}>
                        <ListItemIcon>
                          <CheckCircleOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography fontSize="13px" fontWeight="700">
                            KYC Verification{" "}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                      <ListItem sx={{ "&:hover": { color: "#037DFF" } }}>
                        <ListItemIcon>
                          <SettingsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography fontSize="13px" fontWeight="700">
                            Security Setting
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </MenuItem>

                    <MenuItem onClick={handleClose} disableRipple>
                      <ListItem sx={{ "&:hover": { color: "#037DFF" } }}>
                        <ListItemIcon>
                          <FiActivity />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography fontSize="13px" fontWeight="700">
                            Login Activity
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </MenuItem>
                  </Box>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={handleClose} disableRipple>
                    <List>
                      <ListItem
                        sx={{
                          "&:hover": { color: "#037DFF" },
                          color: "#75849D"
                        }}
                      >
                        <ListItemIcon>
                          <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography fontSize="13px" fontWeight="700">
                            Sign out
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </List>
                  </MenuItem>
                </StyledMenu>
              </div>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "bloxk", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% -${drawerWidth}px)`, md: "100%" }
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
ResponsiveDrawer.propTypes = { window: PropTypes.func };
export default ResponsiveDrawer;
