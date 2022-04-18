import { Button, Container, Divider, Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import InvestGraph from "./investGraph";
import ReceiptIcon from "@mui/icons-material/Receipt";
import RestorePageOutlinedIcon from "@mui/icons-material/RestorePageOutlined";
import { Link } from 'react-router-dom';
export default () => {
  const matches = useMediaQuery("(min-width: 950px)");
  const matches1 = useMediaQuery("(min-width: 400px)");

  return (
    <Box bgcolor="#F5F6FA" py={5} pb={35}>
      <Container>
        <Box
          sx={{
            display: { md: "flex", xs: "block" },
            justifyContent: "space-between"
          }}
          mb={4}
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
              Investment
            </Box>
            <Box
              sx={{
                color: "#364A63",
                fontSize: { md: "30px", xs: "20px" },
                fontWeight: "600"
              }}
            >
              Invested Plans
            </Box>
            <Box
              sx={{
                color: "#526484",
                fontSize: { md: "14px", xs: "12px" }
              }}
            >
              At a glance summary of your investment.
            </Box>
          </Box>
          <Box display="flex" alignItems="center" mt={{ md: 0, xs: 2 }}>
            <Link to='/userDashboard/deposit' style={{ textDecoration: 'none', color: "white" }} >

              <Button
                variant="contained"
                sx={{
                  background: "white",
                  fontWeight: "700",
                  fontSize: { md: "12px", xs: "10px" },
                  color: "black",
                  boxShadow: "none",
                  border: "1px solid",
                  borderColor: "divider",
                  textTransform: "capitalize",
                  "&:hover": { backgroundColor: "#ffffffa1" },
                }}
              >
                deposit funds
                <ArrowForwardIcon style={{ paddingLeft: "5px" }} />
              </Button>
            </Link>

            <Link to='/userDashboard/invest' style={{ textDecoration: 'none', color: "white" }} >

              <Button
                variant="contained"
                sx={{
                  background: "#037DFF",
                  marginLeft: "10px",
                  fontWeight: "700",
                  fontSize: { md: "12px", xs: "10px" },
                  textTransform: "capitalize",
                  boxShadow: "none",
                  "&:hover": { backgroundColor: "#037DFFa1" },
                }}
              >
                invest & earn
                <ArrowForwardIcon style={{ paddingLeft: "5px" }} />
              </Button>
            </Link>

          </Box>
        </Box>

        <Box>
          <Grid container spacing={4}>
            <Grid item xs={matches ? 4 : 12}>
              {/* --------Invesment Account box-------- */}
              <Box
                px={3}
                py={3}
                border="1px solid"
                borderColor="divider"
                borderRadius="4px"
                bgcolor="white"
                borderLeft="4px solid #037DFF"
              >
                <Box color="#526484 " fontSize="18px" fontWeight="500">
                  Investment Amount
                  <InfoOutlinedIcon
                    fontSize="12px"
                    sx={{ verticalAlign: "-3px", marginLeft: "6px" }}
                  />
                </Box>

                {/* ------Amount funds------- */}
                <Box
                  display={matches1 ? "flex" : "block"}
                  mt={{ md: 2, xs: 1 }}
                >
                  <Box>
                    <Box
                      color="#364a63"
                      fontSize={{ md: "24px", xs: "22px" }}
                      fontWeight="550"
                      display="flex"
                      alignItems="center"
                    >
                      0.00
                      <Box
                        sx={{
                          color: "#526484",
                          fontSize: { md: "20px", xs: "18px" },
                          fontWeight: "300"
                        }}
                        ml={1}
                      >
                        USD
                      </Box>
                    </Box>

                    <Box color="#8094ae" fontSize="14px">
                      Available Funds
                    </Box>
                  </Box>
                  <Box ml={matches1 ? 4 : 0} mt={matches1 ? 1 : 1}>
                    <AddIcon sx={{ color: "#8094ae" }} />
                  </Box>
                  <Box ml={matches1 ? 1.5 : 0}>
                    <Box
                      color="#364a63"
                      fontSize={{ md: "24px", xs: "22px" }}
                      fontWeight="550"
                    >
                      0.00
                    </Box>
                    <Box color="#8094ae" fontSize="14px">
                      Locked
                    </Box>
                  </Box>
                </Box>
                {/* ----End amount funds box----- */}

                <Box mt={3} display="flex" alignItems="center">
                  <Button
                    variant="contained"
                    sx={{
                      background: "#364a63",
                      fontWeight: "700",
                      fontSize: { md: "13px", xs: "11px" },
                      textTransform: "capitalize",
                      boxShadow: "none",
                      "&:hover": { backgroundColor: "#364a63a1" },
                    }}
                  >
                    transfer funds
                    <ArrowForwardIcon style={{ paddingLeft: "5px" }} />
                  </Button>

                  <Box ml={3}>
                    <SettingsIcon sx={{ color: "#526484" }} fontSize="small" />
                  </Box>
                </Box>
              </Box>
              {/* --------END Invesment Account box-------- */}
            </Grid>

            <Grid item xs={matches ? 8 : 12}>
              <Box
                border="1px solid"
                borderColor="divider"
                borderRadius="4px"
                bgcolor="white"
              >
                {/* --------Invested Amount box-------- */}
                <Box px={3} py={3}>
                  <Grid container spacing={2}>
                    <Grid item xs={matches ? 6 : 12}>
                      <Box color="#526484 " fontSize="18px" fontWeight="500">
                        Amount in Invested
                        <InfoOutlinedIcon
                          fontSize="12px"
                          sx={{ verticalAlign: "-3px", marginLeft: "6px" }}
                        />
                      </Box>

                      {/* ------Invest profit Box------- */}
                      <Box
                        display={matches1 ? "flex" : "block"}
                        mt={{ md: 2, xs: 1 }}
                      >
                        <Box>
                          <Box
                            color="#364a63"
                            fontSize={{ md: "24px", xs: "22px" }}
                            fontWeight="550"
                            display="flex"
                            alignItems="center"
                          >
                            0.00
                            <Box
                              sx={{
                                color: "#526484",
                                fontSize: { md: "20px", xs: "18px" },
                                fontWeight: "300"
                              }}
                              ml={1}
                            >
                              USD
                            </Box>
                          </Box>

                          <Box color="#8094ae" fontSize="14px">
                            Currently Invested
                          </Box>
                        </Box>
                        <Box ml={matches1 ? 4 : 0} mt={matches1 ? 1 : 1}>
                          <AddIcon sx={{ color: "#8094ae" }} />
                        </Box>
                        <Box ml={matches1 ? 1.5 : 0}>
                          <Box
                            color="#364a63"
                            fontSize={{ md: "24px", xs: "22px" }}
                            fontWeight="550"
                          >
                            0.00
                          </Box>
                          <Box color="#8094ae" fontSize="14px">
                            Approx Profit
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                    {/* ----End Invest profit Box----- */}

                    {/* ----- Graph ----- */}
                    <Grid item xs={matches ? 6 : 12}>
                      <InvestGraph />
                    </Grid>
                    {/* ----End of Graph----- */}
                  </Grid>
                </Box>
                <Divider />
                <Box px={2.5} py={2.4}>
                  <Box
                    display="flex"
                    alignItems="center"
                    color="#0894ff"
                    fontSize="14px"
                  >
                    <Box
                      sx={{ cursor: "pointer" }}
                      display="flex"
                      alignItems="center"
                    >
                      <ReceiptIcon fontSize="small" />
                      <Box ml={1}>Transactions</Box>
                    </Box>
                    <Box
                      ml={5}
                      sx={{ cursor: "pointer" }}
                      display="flex"
                      alignItems="center"
                    >
                      <RestorePageOutlinedIcon fontSize="small" />
                      <Box ml={1}>History</Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* --------END Invested Amount box-------- */}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
