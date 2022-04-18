import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Divider, tableRowClasses } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { Box, Button, Container } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { Fade, Bounce } from 'react-reveal'
function createData(tags, privatesale, publicsale, launch) {
  return { tags, privatesale, publicsale, launch };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#371F00",
    fontSize: 16,
    fontWeight: "800",
    border: "none"
  },
  [`&.${tableCellClasses.body}`]: {
    color: "#371F00",
    fontSize: 14,
    fontWeight: 700,
    border: "none",
    borderTopLeftRadius: "60px",
    borderBottomLeftRadius: "60px"
  }
}));
const StyledTableMiddleCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#371F00",
    fontSize: 16,
    fontWeight: "800",
    border: "none"
  },
  [`&.${tableCellClasses.body}`]: {
    color: "#371F00",
    fontSize: 14,
    fontWeight: 700,
    border: "none"
  }
}));
const StyledTableRightCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#371F00",
    fontSize: 16,
    fontWeight: "800",
    border: "none"
  },
  [`&.${tableCellClasses.body}`]: {
    color: "#371F00",
    fontSize: 14,
    fontWeight: 700,
    border: "none",
    borderTopRightRadius: "60px",
    borderBottomRightRadius: "60px"
  }
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  [`&.${tableRowClasses.root}`]: {
    borderBottom: "12px solid #FFC789"
  }
}));

const rows = [
  createData(
    "Price",
    "1 BNB = 15M 14M 13M",
    "1 BNB = 12,000,000",
    "1 BNB = 10,000,000"
  ),
  createData("Bonus", "Up To 50%", "No Bonus", "No Bonus"),
  createData(
    "Contract",
    "0x00000000000000000001",
    "0x00000000000000000002",
    "0x00000000000000000002"
  ),
  createData("Liquidity", "Manual", "Auto", "Auto + Manual"),
  createData("Security", "High", "High", "Regular"),
  createData("Risk", "Low", "Low", "Regular"),
  createData("Profit", "Very High", "High", "Regular"),
  createData("Platform", "Website Token", "Pinksale", "PancakeSwap")
];

export default function TableBox() {
  return (
    <Box
      sx={{
        background: "#FFC789",
      }}
      pt={4}
      pb={3}

    >
      <Container >
        <TableContainer >
          <Table style={{ overflow: 'hidden' }}>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="center">
                  <Box display="flex" justifyContent="center">
                    <Box
                      border="2px solid white"
                      borderRadius="30px"
                      width="160px"
                      p={1}
                      sx={{
                        backgroundImage:
                          "linear-gradient(to right, #FF5300, #FFA923)",
                        fontFamily: "Helvetica"
                      }}
                    >
                      Private Sale
                    </Box>
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Box display="flex" justifyContent="center">
                    <Box
                      border="2px solid white"
                      borderRadius="30px"
                      width="160px"
                      p={1}
                      sx={{
                        backgroundImage:
                          "linear-gradient(to right, #FF5300, #FFA923)",
                        fontFamily: "Helvetica"
                      }}
                    >
                      Public Sale
                    </Box>
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Box display="flex" justifyContent="center">
                    <Box
                      border="2px solid white"
                      borderRadius="30px"
                      width="160px"
                      p={1}
                      sx={{
                        backgroundImage:
                          "linear-gradient(to right, #FF5300, #FFA923)",
                        fontFamily: "Helvetica"
                      }}
                    >
                      Launching
                    </Box>
                  </Box>
                </StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <StyledTableRow
                  sx={{
                    background: "linear-gradient(to right, #FF8605, #FFA923)"
                  }}
                >
                  <StyledTableCell
                    align="center"
                    sx={{
                      fontSize: { md: "20px", xs: "14px" },
                      fontFamily: "Helvetica"
                    }}
                  >
                    <Box display="flex" width="100%" alignItems="center">
                      <Box display="flex" justifyContent="center" width="75%">
                        <Fade left >
                          {row.tags}
                        </Fade>
                      </Box>
                      <Box display="flex" justifyContent="flex-end" width="25%">
                        <Divider
                          style={{
                            backgroundColor: "white",
                            width: "3px",
                            height: "20px"
                          }}
                        />
                      </Box>
                    </Box>
                  </StyledTableCell>
                  <StyledTableMiddleCell
                    align="center"
                    sx={{
                      fontSize: { md: "20px", xs: "14px" },
                      fontFamily: "Helvetica"
                    }}
                  >
                    <Box display="flex" width="100%" alignItems="center">
                      <Box display="flex" justifyContent="center" width="75%">
                        <Fade left >

                          {row.privatesale}
                        </Fade>
                      </Box>
                      <Box display="flex" justifyContent="flex-end" width="25%">
                        <Divider
                          style={{
                            backgroundColor: "white",
                            width: "3px",
                            height: "20px"
                          }}
                        />
                      </Box>
                    </Box>
                  </StyledTableMiddleCell>
                  <StyledTableMiddleCell
                    align="center"
                    sx={{
                      fontSize: { md: "20px", xs: "14px" },
                      fontFamily: "Helvetica"
                    }}
                  >
                    <Box display="flex" width="100%" alignItems="center">
                      <Box display="flex" justifyContent="center" width="75%">
                        <Fade right>
                          {row.publicsale}
                        </Fade>
                      </Box>
                      <Box display="flex" justifyContent="flex-end" width="25%">
                        <Divider
                          style={{
                            backgroundColor: "white",
                            width: "3px",
                            height: "20px"
                          }}
                        />
                      </Box>
                    </Box>
                  </StyledTableMiddleCell>
                  <StyledTableRightCell
                    align="center"
                    sx={{
                      fontSize: { md: "20px", xs: "14px" },
                      fontFamily: "Helvetica"
                    }}
                  >
                    <Fade right>
                      {row.launch}
                    </Fade>
                  </StyledTableRightCell>
                </StyledTableRow>
              ))}
              {/* <Fade bottom> */}
              <TableRow>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="center">
                  <Box display="flex" justifyContent="center">
                    <Fade bottom>
                      <Box
                        sx={{
                          width: "fit-content",
                          border: "3px solid #FF8504",
                          borderRadius: "30px",
                          margin: "auto"
                        }}
                      >
                        <Button
                          sx={{
                            border: "1.5px solid white",
                            borderRadius: "30px",
                            backgroundImage:
                              "linear-gradient(to right, #FF8605, #FFAB24)",
                            color: "#371F00",
                            fontSize: "16px",
                            fontWeight: "800",
                            fontFamily: "Helvetica",
                            width: "130px"
                          }}
                        >
                          BUY NOW
                        </Button>
                      </Box>
                    </Fade>
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Box display="flex" justifyContent="center">
                    <Fade bottom>
                      <Box
                        sx={{
                          width: "fit-content",
                          border: "3px solid #FF8504",
                          borderRadius: "30px",
                          margin: "auto"
                        }}
                      >
                        <Button
                          sx={{
                            border: "1.5px solid white",
                            borderRadius: "30px",
                            backgroundImage:
                              "linear-gradient(to right, #FF8605, #FFAB24)",
                            color: "#371F00",
                            fontSize: "16px",
                            fontWeight: "800",
                            fontFamily: "Helvetica",
                            width: "130px"
                          }}
                        >
                          BUY NOW
                        </Button>
                      </Box>
                    </Fade>
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Box display="flex" justifyContent="center">
                    <Fade bottom>
                      <Box
                        sx={{
                          width: "fit-content",
                          border: "3px solid #FF8504",
                          borderRadius: "30px",
                          margin: "auto"
                        }}
                      >
                        <Button
                          sx={{
                            border: "1.5px solid white",
                            borderRadius: "30px",
                            backgroundImage:
                              "linear-gradient(to right, #FF8605, #FFAB24)",
                            color: "#371F00",
                            fontSize: "16px",
                            fontWeight: "800",
                            fontFamily: "Helvetica",
                            width: "130px"
                          }}
                        >
                          BUY NOW
                        </Button>
                      </Box>
                    </Fade>
                  </Box>
                </StyledTableCell>

              </TableRow>
              {/* </Fade> */}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
