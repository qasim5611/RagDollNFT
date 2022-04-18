import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Container, Grid, useMediaQuery, Stack } from "@mui/material";
import {
  BsFillArrowDownLeftCircleFill,
  BsFillArrowUpRightCircleFill
} from "react-icons/bs";
import { makeStyles } from "@mui/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default () => {
  const [value, setValue] = React.useState(0);
  const matches = useMediaQuery("(min-width:950px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        background: "#F5F6FA",
        position: "relative",
        height: "100vh"
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Box
            sx={{
              lineHeight: matches ? "40px" : "30px"
            }}
          >
            <Box
              sx={{
                color: "#8094AE",
                fontSize: { md: "18px", xs: "15px" }
              }}
            >
              History
            </Box>
            <Box
              sx={{
                color: "#364A63",
                fontSize: { md: "30px", xs: "20px" }
              }}
            >
              Transactions
            </Box>
            <Box
              sx={{
                color: "#526484",
                fontSize: { md: "16px", xs: "14px" }
              }}
            >
              List of transactions in your account.
            </Box>
          </Box>
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              alignItems: "center"
            }}
          >
            <Link to='/userDashboard/deposit' style={{textDecoration: 'none' , color:'#037DFF'}}>
            <Button
              variant="contained"
              sx={{
                background: "#037DFF",
                fontWeight: "bold",
                fontSize: "12px",
                "&:hover": { backgroundColor: "#037DFFa1" },
              }}
            >
              Deposit
              <ArrowForwardIcon style={{ paddingLeft: "5px" }} />
            </Button>
            </Link>
          </Box>
        </Box>

        <Box
          mt={5}
          sx={{
            borderBottom: 1,
            borderColor: "divider"
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            aria-label="scrollable auto tabs example"
          >
            <Tab
              label="History"
              {...a11yProps(0)}
              style={{
                fontWeight: "700",
                color: value == 0 ? "#037DFF" : "#364A63"
              }}
            />
            <Tab
              label="Deposit"
              {...a11yProps(1)}
              style={{
                fontWeight: "700",
                color: value == 1 ? "#037DFF" : "#364A63"
              }}
            />
            <Tab
              label="Withdraw"
              {...a11yProps(2)}
              style={{
                fontWeight: "700",
                color: value == 2 ? "#037DFF" : "#364A63"
              }}
            />
          </Tabs>
        </Box>

        <Box>
          <TabPanel value={value} index={0}>
            <Box
              mt={3}
              px={3}
              sx={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <Box
                sx={{
                  color: "#526484",
                  fontWeight: "bold"
                }}
              >
                All Transactions
              </Box>
              <Box
                sx={{
                  display: "flex",
                  color: "#526484"
                }}
              >
                <Button sx={{ color: "#526484" }}>
                  <SearchIcon />
                </Button>
                <Button sx={{ color: "#526484" }}>
                  <MenuIcon />
                </Button>
                <Button sx={{ color: "#526484" }}>
                  <SettingsIcon />
                </Button>
              </Box>
            </Box>
            <Box
              mt={1}
              p={matches ? 3 : 1}
              sx={{
                background: "white",
                borderRadius: "5px",
                border: "1px solid #8094ae",
                display: "flex",
                alignItems: "center"
              }}
            >
              <Box
                sx={{
                  height: "fit-content"
                }}
              >
                <ArrowForwardIcon
                  style={{
                    color: "#1EE0AC",
                    fontSize: matches ? "2rem" : "1.5rem"
                  }}
                />
              </Box>

              <Box pl={matches ? 3 : 1} flexGrow="1">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between"
                  }}
                >
                  <Box
                    sx={{
                      color: "#364A63",
                      fontWeight: "500",
                      fontSize: { md: "16px", xs: "13px" }
                    }}
                  >
                    Signup Bonus
                  </Box>
                  <Box
                    sx={{
                      color: "#526484",
                      fontSize: { md: "16px", xs: "13px" }
                    }}
                  >
                    <Box component="span" color="#1ee0ac">
                      + 500.00
                    </Box>{" "}
                    USD
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between"
                  }}
                >
                  <Box
                    sx={{
                      color: "#9096B6",
                      fontSize: { md: "12px", xs: "10px" }
                    }}
                  >
                    March 14,2022. &nbsp; Completed
                  </Box>
                  <Box
                    sx={{
                      color: "#526484",
                      fontSize: { md: "12px", xs: "10px" }
                    }}
                  >
                    {" "}
                    500 USD
                  </Box>
                </Box>
              </Box>

              <Box pt={1} pl={2}>
                <ArrowForwardIosIcon
                  style={{ color: "#1EE0AC", fontSize: "1rem" }}
                />
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box
              mt={3}
              p={2}
              sx={{
                border: 1,
                borderColor: "divider",
                background: "white",
                color: "#526484"
              }}
            >
              No transactions found!
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Box
              mt={3}
              p={2}
              sx={{
                border: 1,
                borderColor: "divider",
                background: "white",
                color: "#526484"
              }}
            >
              No transactions found!
            </Box>
          </TabPanel>
        </Box>
      </Container>
    </Box>
  );
}
