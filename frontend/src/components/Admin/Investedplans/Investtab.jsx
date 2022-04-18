import * as React from "react";
import PropTypes from "prop-types";
import { Avatar, Button, Typography, useMediaQuery } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Investtab() {
  const check= useMediaQuery("(max-Width:700px)")

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
       
      }}
    >
      <Box sx={{ borderBottom: 1,
         borderColor: "divider",
        
        }}>
        <Tabs sx={{
          color:"blue",
          
        }}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          aria-label="basic tabs example"
        >
          <Tab label="Actived" {...a11yProps(0)} />
          <Tab label="Pending" {...a11yProps(1)} />
          <Tab label="Completed" {...a11yProps(2)} />
          <Tab label="All Plans" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection:check?"column":"",
mt:"20px"
        }}
      >
        <Typography sx={{ color: "#526484",ml:"23px", fontSize:"20px",my:check?"20px":"" }}>
          Actived Invested Plans
        </Typography>
        <Box
          sx={{
            display: "flex",
            color: "#526484",
          }}
        >
          <Button sx={{ color: "#526484" }}>
            <SearchIcon />
          </Button>
          <Button sx={{ color: "#526484", }}>
            <SettingsIcon />
          </Button>
        </Box>
      </Box>

      {/* Actived Table */}

      <TabPanel value={value} index={0}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#526484" }}>Plan</TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  Invest By
                </TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  Start Date
                </TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  End Date
                </TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  Investment ID
                </TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  Amount
                </TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => {
              return (
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ color: "#526484" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          // flexDirection:check?"column":""

                        }}
                      >
                        <Avatar sx={{ background: "#e5e9f2",color:"#364a63",fontSize:{xs:"12px", md:"16px"}, mr: "5px" }}>
                          MC
                        </Avatar>

                        <Typography
                          sx={{
                            color: "#364a63",
                            fontSize: {xs:"10px", md:"16px"}
                          }}
                        >
                          Mercury - Hourly 0.45% for 1 Day
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell  sx={{ color: "#526484" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Avatar sx={{ background: "#1ee0ac", mr: "5px",fontSize:{xs:"12px", md:"16px"}, }}>
                          PR
                        </Avatar>
                        <Typography
                          sx={{
                            color: "#364a63",
                            fontSize: "14px",
                          }}
                        >
                          Prabakaran
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell  sx={{ color: "#526484" }}>
                      <Typography
                        sx={{
                          color: "#8094ae",
                          fontSize: "14px",
                        }}
                      >
                        Apr 09, 2022 11:56 AM
                      </Typography>
                    </TableCell>
                    <TableCell  sx={{ color: "#526484" }}>
                      <Typography
                        sx={{
                          color: "#364a63",
                          fontSize: "14px",
                        }}
                      >
                        Apr 10, 2022 11:57 AM
                      </Typography>
                    </TableCell>
                    <TableCell  sx={{ color: "#526484" }}>
                      <Typography
                        sx={{
                          color: "#364a63",
                          fontSize: "14px",
                        }}
                      >
                        51662977
                      </Typography>
                    </TableCell>
                    <TableCell  sx={{ color: "#526484" }}>
                      <Typography
                        sx={{
                          color: "#364a63",
                          fontSize: "14px",
                        }}
                      >
                        100.00 USD
                      </Typography>
                    </TableCell>
                    <TableCell  sx={{ color: "#526484" }}>
                      <Typography
                        sx={{
                          color: "#364a63",
                          fontSize: "14px",
                        }}
                      >
                        Status
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </TableContainer>
      </TabPanel>

      {/*  Pending  Table */}

      <TabPanel value={value} index={1}>
                <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#526484" }}>Plan</TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  Invest By
                </TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  Start Date
                </TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  End Date
                </TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  Investment ID
                </TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  Amount
                </TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => {
              return (
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ color: "#526484" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          // flexDirection:check?"column":""

                        }}
                      >
                        <Avatar sx={{ background: "#e5e9f2",color:"#364a63",fontSize:{xs:"12px", md:"16px"}, mr: "5px" }}>
                          MC
                        </Avatar>

                        <Typography
                          sx={{
                            color: "#364a63",
                            fontSize: {xs:"10px", md:"16px"}
                          }}
                        >
                          Mercury - Hourly 0.45% for 1 Day
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell  sx={{ color: "#526484" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Avatar sx={{ background: "#1ee0ac", mr: "5px",fontSize:{xs:"12px", md:"16px"}, }}>
                          PR
                        </Avatar>
                        <Typography
                          sx={{
                            color: "#364a63",
                            fontSize: "14px",
                          }}
                        >
                          Prabakaran
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell  sx={{ color: "#526484" }}>
                      <Typography
                        sx={{
                          color: "#8094ae",
                          fontSize: "14px",
                        }}
                      >
                        Apr 09, 2022 11:56 AM
                      </Typography>
                    </TableCell>
                    <TableCell  sx={{ color: "#526484" }}>
                      <Typography
                        sx={{
                          color: "#364a63",
                          fontSize: "14px",
                        }}
                      >
                        Apr 10, 2022 11:57 AM
                      </Typography>
                    </TableCell>
                    <TableCell  sx={{ color: "#526484" }}>
                      <Typography
                        sx={{
                          color: "#364a63",
                          fontSize: "14px",
                        }}
                      >
                        51662977
                      </Typography>
                    </TableCell>
                    <TableCell  sx={{ color: "#526484" }}>
                      <Typography
                        sx={{
                          color: "#364a63",
                          fontSize: "14px",
                        }}
                      >
                        100.00 USD
                      </Typography>
                    </TableCell>
                    <TableCell  sx={{ color: "#526484" }}>
                      <Typography
                        sx={{
                          color: "#364a63",
                          fontSize: "14px",
                        }}
                      >
                        Status
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </TableContainer>
      </TabPanel>

      {/* Completed  Table  */}

      <TabPanel value={value} index={2}>
                <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#526484" }}>Plan</TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  Invest By
                </TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  Start Date
                </TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  End Date
                </TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  Investment ID
                </TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  Amount
                </TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => {
              return (
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ color: "#526484" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          // flexDirection:check?"column":""

                        }}
                      >
                        <Avatar sx={{ background: "#e5e9f2",color:"#364a63",fontSize:{xs:"12px", md:"16px"}, mr: "5px" }}>
                          MC
                        </Avatar>

                        <Typography
                          sx={{
                            color: "#364a63",
                            fontSize: {xs:"10px", md:"16px"}
                          }}
                        >
                          Mercury - Hourly 0.45% for 1 Day
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell  sx={{ color: "#526484" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Avatar sx={{ background: "#1ee0ac", mr: "5px",fontSize:{xs:"12px", md:"16px"}, }}>
                          PR
                        </Avatar>
                        <Typography
                          sx={{
                            color: "#364a63",
                            fontSize: "14px",
                          }}
                        >
                          Prabakaran
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell  sx={{ color: "#526484" }}>
                      <Typography
                        sx={{
                          color: "#8094ae",
                          fontSize: "14px",
                        }}
                      >
                        Apr 09, 2022 11:56 AM
                      </Typography>
                    </TableCell>
                    <TableCell  sx={{ color: "#526484" }}>
                      <Typography
                        sx={{
                          color: "#364a63",
                          fontSize: "14px",
                        }}
                      >
                        Apr 10, 2022 11:57 AM
                      </Typography>
                    </TableCell>
                    <TableCell  sx={{ color: "#526484" }}>
                      <Typography
                        sx={{
                          color: "#364a63",
                          fontSize: "14px",
                        }}
                      >
                        51662977
                      </Typography>
                    </TableCell>
                    <TableCell  sx={{ color: "#526484" }}>
                      <Typography
                        sx={{
                          color: "#364a63",
                          fontSize: "14px",
                        }}
                      >
                        100.00 USD
                      </Typography>
                    </TableCell>
                    <TableCell  sx={{ color: "#526484" }}>
                      <Typography
                        sx={{
                          color: "#364a63",
                          fontSize: "14px",
                        }}
                      >
                        Status
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </TableContainer>
      </TabPanel>

      {/*   All Plans  Table */}

      <TabPanel value={value} index={3}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#526484" }}>Plan</TableCell>
            <TableCell  sx={{ color: "#526484" }}>
              Invest By
            </TableCell>
            <TableCell  sx={{ color: "#526484" }}>
              Start Date
            </TableCell>
            <TableCell  sx={{ color: "#526484" }}>
              End Date
            </TableCell>
            <TableCell  sx={{ color: "#526484" }}>
              Investment ID
            </TableCell>
            <TableCell  sx={{ color: "#526484" }}>
              Amount
            </TableCell>
            <TableCell  sx={{ color: "#526484" }}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => {
          return (
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ color: "#526484" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection:check?"column":""

                    }}
                  >
                    <Avatar sx={{ background: "#e5e9f2",color:"#364a63", mr: "5px" }}>
                      MC
                    </Avatar>

                    <Typography
                      sx={{
                        color: "#364a63",
                        fontSize: "14px",
                      }}
                    >
                      Mercury - Hourly 0.45% for 1 Day
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Avatar sx={{ background: "#1ee0ac", mr: "5px" }}>
                      PR
                    </Avatar>
                    <Typography
                      sx={{
                        color: "#364a63",
                        fontSize: "14px",
                      }}
                    >
                      Prabakaran
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  <Typography
                    sx={{
                      color: "#8094ae",
                      fontSize: "14px",
                    }}
                  >
                    Apr 09, 2022 11:56 AM
                  </Typography>
                </TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  <Typography
                    sx={{
                      color: "#364a63",
                      fontSize: "14px",
                    }}
                  >
                    Apr 10, 2022 11:57 AM
                  </Typography>
                </TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  <Typography
                    sx={{
                      color: "#364a63",
                      fontSize: "14px",
                    }}
                  >
                    51662977
                  </Typography>
                </TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  <Typography
                    sx={{
                      color: "#364a63",
                      fontSize: "14px",
                    }}
                  >
                    100.00 USD
                  </Typography>
                </TableCell>
                <TableCell  sx={{ color: "#526484" }}>
                  <Typography
                    sx={{
                      color: "#364a63",
                      fontSize: "14px",
                    }}
                  >
                    Status
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          );
        })}
      </Table>
    </TableContainer>
      </TabPanel>
    </Box>
  );
}
