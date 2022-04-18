import Box from "@mui/material/Box";
import { Button, Container, Grid, useMediaQuery, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

let activeStyle = {
  textDecoration: "none",
  color: "#037DFF"
};

let activeClassName = {
  textDecoration: "none",
  color: "#8094AE"
};

export default ({ head, text }) => {
  const matches = useMediaQuery("(min-width:950px)");

  return (
    <Box
      sx={{
        background: "#F5F6FA"
      }}
    >
      <Container>
        <Box
          pt={5}
          sx={{
            lineHeight: matches ? "40px" : "30px"
          }}
        >
          <Box
            sx={{
              color: "#364A63",
              fontSize: { md: "30px", xs: "20px" }
            }}
          >
            {head}
          </Box>
          <Box
            sx={{
              color: "#526484",
              fontSize: { md: "16px", xs: "14px" }
            }}
          >
            You have full control to manage your own account setting.
          </Box>
        </Box>

        <Box
          mt={4}
          sx={{
            color: "#364A63",
            fontWeight: "bold",
            borderBottom: 2,
            borderColor: "divider",
            display: "flex"
          }}
        >
          <Box>
            <NavLink
              to="/userDashboard/profile"
              style={({ isActive }) =>
                isActive ? activeStyle : activeClassName
              }
            >
              Profile
            </NavLink>
          </Box>
          <Box pl={2}>
            <NavLink
              to="/userDashboard/profile/accounts"
              style={({ isActive }) =>
                isActive ? activeStyle : activeClassName
              }
            >
              Accounts
            </NavLink>
          </Box>
          <Box pl={2}>
            <NavLink
              to="/userDashboard/profile/settings"
              style={({ isActive }) =>
                isActive ? activeStyle : activeClassName
              }
            >
              Security
            </NavLink>
          </Box>
          <Box pl={2}>
            <NavLink
              to="/userDashboard/profile/activity"
              style={({ isActive }) =>
                isActive ? activeStyle : activeClassName
              }
            >
              Activity
            </NavLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
