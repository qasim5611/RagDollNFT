import * as React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button, Typography, useMediaQuery } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Basictabs() {
  const check= useMediaQuery("(max-Width:700px)")

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',
    //  display:"flex",
// flexDirection:"column",
// justifyContent:"center",
// alignItems:"center"
}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="History" {...a11yProps(0)} />
          <Tab label="Pending" {...a11yProps(1)} />
          <Tab label="On Hold" {...a11yProps(2)} />
          <Tab label="Proceed" {...a11yProps(3)} />
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
        <Typography sx={{ color: "#526484",fontSize:"20px", ml:"20px",my:check?"20px":"" }}>All Orders</Typography>
        <Box
          sx={{
            display: "flex",
            color: "#526484",
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
      <TabPanel value={value} index={0}>
      
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#526484" }}>Details</TableCell>
            <TableCell align="right" sx={{ color: "#526484" }}>
              Tnx By
            </TableCell>
            <TableCell align="right" sx={{ color: "#526484" }}>
              Order
            </TableCell>      
            <TableCell align="right" sx={{ color: "#526484" }}>
              Amount
            </TableCell>
          </TableRow>
        </TableHead>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => {
            return (
        <TableBody>
          <TableRow
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row" sx={{ color: "#526484" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{background:"#e2fbf4", mr:"5px"}}>
                  <CallReceivedIcon sx={{color:"#1ee0ac",}} />
                </Avatar>
                <Box>
                  <Typography sx={{
                      color:"#364a63",
                      fontSize:"14px"
                  }}>Deposit Funds</Typography>
                  <Typography sx={{
                      color:"#8094ae",
                      fontSize:"12px"
                  }}>Dec 06, 2021</Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell align="right" sx={{ color: "#526484" }}>
              <Box>
                <Typography sx={{
                    color:"#364a63",
                    fontSize:"14px"
                }}>UID00003</Typography>
                <Typography sx={{
                    color:"#8094ae",
                    fontSize:"12px"
                }}>via PayPal</Typography>
              </Box>
            </TableCell>
            <TableCell align="right" sx={{ color: "#526484" }}>
            <Box>
              <Typography sx={{
                color:"#8094ae",
                fontSize:"14px"
            }}>18884918</Typography>
              <Typography sx={{
                color:"#1ee0ac",
                fontSize:"12px"
            }}>Deposit</Typography>
            </Box>
          </TableCell>
            <TableCell align="right" sx={{ color: "#526484" }}>
              <Box>
                <Typography sx={{
                    color:"#364a63",
                    fontSize:"14px"
                }}><span>+ 50.00 </span> EUR</Typography>
                <Typography sx={{
                    color:"#8094ae",
                    fontSize:"12px"
                }}>60.753 USD</Typography>
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
        );
    })}
      </Table>
      </TableContainer>
     
      </TabPanel>
      <TabPanel value={value} index={1}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#526484" }}>Details</TableCell>
            <TableCell align="right" sx={{ color: "#526484" }}>
              Tnx By
            </TableCell>
            <TableCell align="right" sx={{ color: "#526484" }}>
              Order
            </TableCell>      
            <TableCell align="right" sx={{ color: "#526484" }}>
              Amount
            </TableCell>
          </TableRow>
        </TableHead>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => {
            return (
        <TableBody>
          <TableRow
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row" sx={{ color: "#526484" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{background:"#e2fbf4", mr:"5px"}}>
                  <CallReceivedIcon sx={{color:"#1ee0ac",}} />
                </Avatar>
                <Box>
                  <Typography sx={{
                      color:"#364a63",
                      fontSize:"14px"
                  }}>Deposit Funds</Typography>
                  <Typography sx={{
                      color:"#8094ae",
                      fontSize:"12px"
                  }}>Dec 06, 2021</Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell align="right" sx={{ color: "#526484" }}>
              <Box>
                <Typography sx={{
                    color:"#364a63",
                    fontSize:"14px"
                }}>UID00003</Typography>
                <Typography sx={{
                    color:"#8094ae",
                    fontSize:"12px"
                }}>via PayPal</Typography>
              </Box>
            </TableCell>
            <TableCell align="right" sx={{ color: "#526484" }}>
            <Box>
              <Typography sx={{
                color:"#8094ae",
                fontSize:"14px"
            }}>18884918</Typography>
              <Typography sx={{
                color:"#1ee0ac",
                fontSize:"12px"
            }}>Deposit</Typography>
            </Box>
          </TableCell>
            <TableCell align="right" sx={{ color: "#526484" }}>
              <Box>
                <Typography sx={{
                    color:"#364a63",
                    fontSize:"14px"
                }}><span>+ 50.00 </span> EUR</Typography>
                <Typography sx={{
                    color:"#8094ae",
                    fontSize:"12px"
                }}>60.753 USD</Typography>
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
        );
    })}
      </Table>
      </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#526484" }}>Details</TableCell>
            <TableCell align="right" sx={{ color: "#526484" }}>
              Tnx By
            </TableCell>
            <TableCell align="right" sx={{ color: "#526484" }}>
              Order
            </TableCell>      
            <TableCell align="right" sx={{ color: "#526484" }}>
              Amount
            </TableCell>
          </TableRow>
        </TableHead>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => {
            return (
        <TableBody>
          <TableRow
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row" sx={{ color: "#526484" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{background:"#e2fbf4", mr:"5px"}}>
                  <CallReceivedIcon sx={{color:"#1ee0ac",}} />
                </Avatar>
                <Box>
                  <Typography sx={{
                      color:"#364a63",
                      fontSize:"14px"
                  }}>Deposit Funds</Typography>
                  <Typography sx={{
                      color:"#8094ae",
                      fontSize:"12px"
                  }}>Dec 06, 2021</Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell align="right" sx={{ color: "#526484" }}>
              <Box>
                <Typography sx={{
                    color:"#364a63",
                    fontSize:"14px"
                }}>UID00003</Typography>
                <Typography sx={{
                    color:"#8094ae",
                    fontSize:"12px"
                }}>via PayPal</Typography>
              </Box>
            </TableCell>
            <TableCell align="right" sx={{ color: "#526484" }}>
            <Box>
              <Typography sx={{
                color:"#8094ae",
                fontSize:"14px"
            }}>18884918</Typography>
              <Typography sx={{
                color:"#1ee0ac",
                fontSize:"12px"
            }}>Deposit</Typography>
            </Box>
          </TableCell>
            <TableCell align="right" sx={{ color: "#526484" }}>
              <Box>
                <Typography sx={{
                    color:"#364a63",
                    fontSize:"14px"
                }}><span>+ 50.00 </span> EUR</Typography>
                <Typography sx={{
                    color:"#8094ae",
                    fontSize:"12px"
                }}>60.753 USD</Typography>
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
        );
    })}
      </Table>
      </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#526484" }}>Details</TableCell>
            <TableCell align="right" sx={{ color: "#526484" }}>
              Tnx By
            </TableCell>
            <TableCell align="right" sx={{ color: "#526484" }}>
              Order
            </TableCell>      
            <TableCell align="right" sx={{ color: "#526484" }}>
              Amount
            </TableCell>
          </TableRow>
        </TableHead>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => {
            return (
        <TableBody>
          <TableRow
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row" sx={{ color: "#526484" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{background:"#e2fbf4", mr:"5px"}}>
                  <CallReceivedIcon sx={{color:"#1ee0ac",}} />
                </Avatar>
                <Box>
                  <Typography sx={{
                      color:"#364a63",
                      fontSize:"14px"
                  }}>Deposit Funds</Typography>
                  <Typography sx={{
                      color:"#8094ae",
                      fontSize:"12px"
                  }}>Dec 06, 2021</Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell align="right" sx={{ color: "#526484" }}>
              <Box>
                <Typography sx={{
                    color:"#364a63",
                    fontSize:"14px"
                }}>UID00003</Typography>
                <Typography sx={{
                    color:"#8094ae",
                    fontSize:"12px"
                }}>via PayPal</Typography>
              </Box>
            </TableCell>
            <TableCell align="right" sx={{ color: "#526484" }}>
            <Box>
              <Typography sx={{
                color:"#8094ae",
                fontSize:"14px"
            }}>18884918</Typography>
              <Typography sx={{
                color:"#1ee0ac",
                fontSize:"12px"
            }}>Deposit</Typography>
            </Box>
          </TableCell>
            <TableCell align="right" sx={{ color: "#526484" }}>
              <Box>
                <Typography sx={{
                    color:"#364a63",
                    fontSize:"14px"
                }}><span>+ 50.00 </span> EUR</Typography>
                <Typography sx={{
                    color:"#8094ae",
                    fontSize:"12px"
                }}>60.753 USD</Typography>
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
        );
    })};
      </Table>
      </TableContainer>
      </TabPanel>
    </Box>
  );
}
