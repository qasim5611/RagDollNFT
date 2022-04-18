import * as React from "react";
import "./AdminDrawer.css";
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
import logo from "../../../images/logo.png";
import { Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/system";
import { alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Nested List starts
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
// Nested List ends

// All Icones used in this component
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import PercentIcon from "@mui/icons-material/Percent";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import { BsBarChartLine } from "react-icons/bs";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { BsBoxArrowRight } from "react-icons/bs";
import { AiOutlineCalculator } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";
import TranslateIcon from "@mui/icons-material/Translate";
import { BsMouse } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

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

let activeStyle = {
  textDecoration: "none",
  color: "#037DFF"
};

let activeClassName = {
  textDecoration: "none",
  color: "#8094AE"
};
const drawerWidth = 300;

function ResponsiveDrawer(props) {
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

  //Nested List for transaction
  const [openList, setOpenList] = React.useState(false);
  const handleClickList = () => {
    setOpenList(!openList);
  };
  //Nested List for transaction

  //Nested List for invested plans
  const [invested, setInvested] = React.useState(false);
  const handleClickinvested = () => {
    setInvested(!invested);
  };
  //Nested List for invested plans

  //Nested List for invest statement
  const [statement, setStatement] = React.useState(false);
  const handleClickStatement = () => {
    setStatement(!statement);
  };
  //Nested List for invest statement

  //Nested List for invest statement
  const [users, setUsers] = React.useState(false);
  const handleClickUsers = () => {
    setUsers(!users);
  };
  //Nested List for invest statement

  //Nested List for invest statement
  const [content, setContent] = React.useState(false);
  const handleClickContent = () => {
    setContent(!content);
  };
  //Nested List for invest statement

  //Nested List for Application settings
  const [application, setApplication] = React.useState(false);
  const handleClickApplication = () => {
    setApplication(!application);
  };
  //Nested List for Application settings

  const drawer = (
    <Box backgroundColor="#101924">
      <Container>
        <Box mt={2}>
          <img src={logo} alt="logo" />
        </Box>
        <List>
          {/* sx={{ color: '#8094ae'}} */}
          <NavLink
            to="/adminDashboard"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem button>
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
            to="/adminDashboard/deposit"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem button>
              <BsBoxArrowInLeft style={{ fontSize: "1.5rem" }} />
              <ListItemText sx={{ paddingLeft: "14%" }}>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "700"
                  }}
                >
                  Deposit
                </span>
              </ListItemText>
              <Box
                sx={{
                  borderRadius: "3px",
                  backgroundColor: "#203247",
                  color: "#037DFF",
                  fontWeight: "700",
                  fontSize: "10px",
                  padding: "2%",
                  textAlign: "center"
                }}
              >
                896
              </Box>
            </ListItem>
          </NavLink>

          <NavLink
            to="/adminDashboard/withdraw"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem button>
              <BsBoxArrowRight style={{ fontSize: "1.5rem" }} />
              <ListItemText sx={{ paddingLeft: "14%" }}>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "700"
                  }}
                >
                  Withdraw
                </span>
              </ListItemText>
              <Box
                sx={{
                  borderRadius: "3px",
                  backgroundColor: "#203247",
                  color: "#037DFF",
                  fontWeight: "700",
                  fontSize: "10px",
                  padding: "2%",
                  textAlign: "center"
                }}
              >
                152
              </Box>
            </ListItem>
          </NavLink>

          <NavLink
            to="/adminDashboard/referral"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem button>
              <PercentIcon style={{ fontSize: "1.5rem" }} />
              <ListItemText sx={{ paddingLeft: "14%" }}>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "700"
                  }}
                >
                  Referral
                </span>
              </ListItemText>
              <Box
                sx={{
                  borderRadius: "3px",
                  backgroundColor: "#203247",
                  color: "#037DFF",
                  fontWeight: "700",
                  fontSize: "10px",
                  padding: "2%",
                  textAlign: "center"
                }}
              >
                21
              </Box>
            </ListItem>
          </NavLink>

          {/* Drop Down List Starts here */}
          <ListItemButton onClick={handleClickList}>
            <ListItemIcon sx={{ color: "#6E82A5" }}>
              <CompareArrowsOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#6E82A5"
                }}
              >
                Transaction
              </Box>
            </ListItemText>
            {openList ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openList} timeout="auto" unmountOnExit>
            <NavLink
              to="/adminDashboard/transactions/list/pending"
              style={({ isActive }) =>
                isActive ? activeStyle : activeClassName
              }
            >
              <ListItemButton>
                <ListItemIcon />
                <Box
                  sx={{
                    "&:hover": { color: "#037DFF" },
                    fontSize: "12px",
                    color: "#6E82A5"
                  }}
                >
                  Pending (1048)
                </Box>
              </ListItemButton>
            </NavLink>

            <NavLink
              to="/adminDashboard/transactions/list/on-hold"
              style={({ isActive }) =>
                isActive ? activeStyle : activeClassName
              }
            >
              <ListItemButton>
                <ListItemIcon />
                <Box
                  sx={{
                    "&:hover": { color: "#037DFF" },
                    fontSize: "12px",
                    color: "#6E82A5"
                  }}
                >
                  On Hold (229)
                </Box>
              </ListItemButton>
            </NavLink>

            <NavLink
              to="/adminDashboard/transactions/list/deposit"
              style={({ isActive }) =>
                isActive ? activeStyle : activeClassName
              }
            >
              <ListItemButton>
                <ListItemIcon />
                <Box
                  sx={{
                    "&:hover": { color: "#037DFF" },
                    fontSize: "12px",
                    color: "#6E82A5"
                  }}
                >
                  Deposit
                </Box>
              </ListItemButton>
            </NavLink>

            <NavLink
              to="/adminDashboard/transactions/list/withdrawal"
              style={({ isActive }) =>
                isActive ? activeStyle : activeClassName
              }
            >
              <ListItemButton>
                <ListItemIcon />
                <Box
                  sx={{
                    "&:hover": { color: "#037DFF" },
                    fontSize: "12px",
                    color: "#6E82A5"
                  }}
                >
                  Withdrawal
                </Box>
              </ListItemButton>
            </NavLink>

            <NavLink
              to="/adminDashboard/transactions/list"
              style={({ isActive }) =>
                isActive ? activeStyle : activeClassName
              }
            >
              <ListItemButton>
                <ListItemIcon />
                <Box
                  sx={{
                    "&:hover": { color: "#037DFF" },
                    fontSize: "12px",
                    color: "#6E82A5"
                  }}
                >
                  All Transactions
                </Box>
              </ListItemButton>
            </NavLink>
          </Collapse>
        </List>
        {/* DropDown List ends here  */}

        <span style={{ fontSize: "11px", fontWeight: "700", color: "#B7C2D0" }}>
          INVESTMENT
        </span>

        <List>
          <NavLink
            to="/adminDashboard/investment/dashboard"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem button sx={{ "&:hover": {} }}>
              <ListItemIcon sx={{ color: "#6E82A5" }}>
                <BsBarChartLine style={{ fontSize: "1.5rem" }} />
              </ListItemIcon>
              <ListItemText>
                <Box
                  sx={{
                    "&:hover": { color: "#037DFF" },
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#6E82A5"
                  }}
                >
                  Invest Dashboard
                </Box>
              </ListItemText>
            </ListItem>
          </NavLink>
          {/* Invested Drop Down List Starts here */}
          <ListItemButton onClick={handleClickinvested}>
            <ListItemIcon sx={{ color: "#6E82A5" }}>
              <CurrencyExchangeOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#6E82A5"
                }}
              >
                Invested Plans
              </Box>
            </ListItemText>
            {invested ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={invested} timeout="auto" unmountOnExit>
            <NavLink
              to="/adminDashboard/investment/history/active"
              style={({ isActive }) =>
                isActive ? activeStyle : activeClassName
              }
            >
              <ListItemButton>
                <ListItemIcon />
                <Box
                  sx={{
                    "&:hover": { color: "#037DFF" },
                    fontSize: "12px",
                    color: "#6E82A5"
                  }}
                >
                  Actived Invest
                </Box>
              </ListItemButton>
            </NavLink>

            <NavLink
              to="/adminDashboard/investment/history/pending"
              style={({ isActive }) =>
                isActive ? activeStyle : activeClassName
              }
            >
              <ListItemButton>
                <ListItemIcon />
                <Box
                  sx={{
                    "&:hover": { color: "#037DFF" },
                    fontSize: "12px",
                    color: "#6E82A5"
                  }}
                >
                  Pending Invest
                </Box>
              </ListItemButton>
            </NavLink>

            <NavLink
              to="/adminDashboard/investment/history/completed"
              style={({ isActive }) =>
                isActive ? activeStyle : activeClassName
              }
            >
              <ListItemButton>
                <ListItemIcon />
                <Box
                  sx={{
                    "&:hover": { color: "#037DFF" },
                    fontSize: "12px",
                    color: "#6E82A5"
                  }}
                >
                  Completed Invest
                </Box>
              </ListItemButton>
            </NavLink>

            <NavLink
              to="/adminDashboard/investment/history"
              style={({ isActive }) =>
                isActive ? activeStyle : activeClassName
              }
            >
              <ListItemButton>
                <ListItemIcon />
                <Box
                  sx={{
                    "&:hover": { color: "#037DFF" },
                    fontSize: "12px",
                    color: "#6E82A5"
                  }}
                >
                  All Invested Plans
                </Box>
              </ListItemButton>
            </NavLink>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "12px",
                  color: "#6E82A5"
                }}
              >
                Manage Schemes
              </Box>
            </ListItemButton>
          </Collapse>
          {/* Invested DropDown List ends here  */}

          {/* Invest statement Drop Down List Starts here */}
          <ListItemButton onClick={handleClickStatement}>
            <ListItemIcon sx={{ color: "#6E82A5" }}>
              <AiOutlineCalculator style={{ fontSize: "1.5rem" }} />
            </ListItemIcon>
            <ListItemText>
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#6E82A5"
                }}
              >
                Invest Statement
              </Box>
            </ListItemText>
            {statement ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={statement} timeout="auto" unmountOnExit>
            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "12px",
                  color: "#6E82A5"
                }}
              >
                All Transactions
              </Box>
            </ListItemButton>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "12px",
                  color: "#6E82A5"
                }}
              >
                Profit Settlement
              </Box>
            </ListItemButton>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "12px",
                  color: "#6E82A5"
                }}
              >
                Transferred History
              </Box>
            </ListItemButton>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "12px",
                  color: "#6E82A5"
                }}
              >
                Profit / Interest Logs
              </Box>
            </ListItemButton>
          </Collapse>

          {/* Invest statement DropDown List ends here  */}
        </List>

        <span style={{ fontSize: "11px", fontWeight: "700", color: "#B7C2D0" }}>
          User Managment
        </span>

        <List>
          {/* Invested Drop Down List Starts here */}
          <ListItemButton onClick={handleClickUsers}>
            <ListItemIcon sx={{ color: "#6E82A5" }}>
              <FiUsers style={{ fontSize: "1.5rem" }} />
            </ListItemIcon>
            <ListItemText>
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#6E82A5"
                }}
              >
                Manage Users
              </Box>
            </ListItemText>
            {users ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={users} timeout="auto" unmountOnExit>
            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "12px",
                  color: "#6E82A5"
                }}
              >
                Active
              </Box>
            </ListItemButton>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "12px",
                  color: "#6E82A5"
                }}
              >
                Inactive <span>(74)</span>
              </Box>
            </ListItemButton>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "12px",
                  color: "#6E82A5"
                }}
              >
                Suspended <span>(20)</span>
              </Box>
            </ListItemButton>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "12px",
                  color: "#6E82A5"
                }}
              >
                All Users
              </Box>
            </ListItemButton>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "12px",
                  color: "#6E82A5"
                }}
              >
                Administrator <span>(2)</span>
              </Box>
            </ListItemButton>
          </Collapse>
          {/* Invested DropDown List ends here  */}

          <ListItem button sx={{ "&:hover": {} }}>
            <ListItemIcon sx={{ color: "#6E82A5" }}>
              <BsCheck2Circle style={{ fontSize: "1.5rem" }} />
            </ListItemIcon>
            <ListItemText>
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#6E82A5"
                }}
              >
                Verification Center
              </Box>
            </ListItemText>
          </ListItem>
        </List>

        <span style={{ fontSize: "11px", fontWeight: "700", color: "#B7C2D0" }}>
          Managment
        </span>

        <List>
          {/* Manage Content Drop Down List Starts here */}
          <ListItemButton onClick={handleClickContent}>
            <ListItemIcon sx={{ color: "#6E82A5" }}>
              <FaRegCopy style={{ fontSize: "1.5rem" }} />
            </ListItemIcon>
            <ListItemText>
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#6E82A5"
                }}
              >
                Manage Content
              </Box>
            </ListItemText>
            {content ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={content} timeout="auto" unmountOnExit>
            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "12px",
                  color: "#6E82A5"
                }}
              >
                Manage Pages
              </Box>
            </ListItemButton>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "12px",
                  color: "#6E82A5"
                }}
              >
                Email Tamplates
              </Box>
            </ListItemButton>
          </Collapse>
          {/* Manage Content DropDown List ends here  */}

          {/* Application Setting Drop Down List Starts here */}
          <ListItemButton onClick={handleClickApplication}>
            <ListItemIcon sx={{ color: "#6E82A5" }}>
              <SettingsOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#6E82A5"
                }}
              >
                Application Settings
              </Box>
            </ListItemText>
            {application ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={application} timeout="auto" unmountOnExit>
            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "12px",
                  color: "#6E82A5"
                }}
              >
                Global Settings
              </Box>
            </ListItemButton>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "12px",
                  color: "#6E82A5"
                }}
              >
                Website Settings
              </Box>
            </ListItemButton>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "12px",
                  color: "#6E82A5"
                }}
              >
                Manage Components
              </Box>
            </ListItemButton>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "12px",
                  color: "#6E82A5"
                }}
              >
                Payment Options
              </Box>
            </ListItemButton>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "12px",
                  color: "#6E82A5"
                }}
              >
                Investment Apps
              </Box>
            </ListItemButton>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "12px",
                  color: "#6E82A5"
                }}
              >
                Email Configuration
              </Box>
            </ListItemButton>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "12px",
                  color: "#6E82A5"
                }}
              >
                System Status
              </Box>
            </ListItemButton>
          </Collapse>
          {/* Application Setting DropDown List ends here  */}

          <ListItem button sx={{ "&:hover": {} }}>
            <ListItemIcon sx={{ color: "#6E82A5" }}>
              <TranslateIcon style={{ fontSize: "1.5rem" }} />
            </ListItemIcon>
            <ListItemText>
              <Box
                sx={{
                  "&:hover": { color: "#037DFF" },
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#6E82A5"
                }}
              >
                Manage Language
              </Box>
            </ListItemText>
          </ListItem>
        </List>
        <Toolbar />
      </Container>
    </Box>
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
          borderBottom: 1,
          borderColor: "divider",
          boxShadow: "none",
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar
          // width="100%"
          // sx={{
          //   justifyContent: {
          //     xs: "space-between"

          //     // sm: 'flex-end'
          //   }
          // }}
          sx={{
            display: "flex",
            justifyContent: "space-between"
            // maxWidth: "100px"
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            color="black"
            sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex" } }}
          >
            <Box sx={{ color: "#037DFF", fontSize: "1.5rem" }}>
              <BsMouse style={{ fontSize: "1.5rem" }} />
            </Box>
            <Box>
              <span style={{ fontSize: "13px" }}>Fun Fact!</span>
              <span
                style={{
                  fontSize: "13px",
                  color: "#6E82A5",
                  marginLeft: "4px"
                }}
              >
                You have 157 actived invested plan
              </span>
            </Box>
          </Box>

          <Box display="flex" alignItems="center">
            <Box
              color="black"
              mr={3}
              sx={{ cursor: "pointer", fontSize: "1.3rem" }}
            >
              <BsBoxArrowUpRight />
            </Box>
            <Box>
              <Avatar sx={{ backgroundColor: "#037DFF" }}>
                <PersonOutlinedIcon />
              </Avatar>
            </Box>
            <Box textAlign="center">
              <Typography color="#037DFF" fontSize="13px">
                Admin
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
                  Administrator
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
                      <Avatar sx={{ backgroundColor: "#20C997" }}>AD</Avatar>
                      <Box ml={2} display="flex" flexDirection="column">
                        <Box fontSize="13px" fontWeight="800">
                          Administrator
                        </Box>
                        <Box fontSize="12px" fontWeight="500" color="#8094ae">
                          info@softnio.com
                        </Box>
                      </Box>
                    </MenuItem>
                  </Box>

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
                          <SettingsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography fontSize="13px" fontWeight="700">
                            Account Setting
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
            display: { xs: "block", sm: "block", md: "block", lg: "block" },
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
          width: { xs: `calc(100% - ${drawerWidth}px)`, md: "100%" }
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
